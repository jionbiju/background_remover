import { Webhook } from "svix"
import userModel from "../models/userModel.js";
import razorpay from 'razorpay';
import transactionModel from "../models/transactionModel.js";



//API controller function to manage clerk user with database
const clerkWebhooks = async (req,res) => {
    try {
        //Create a svix instance with clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);    
        
        await whook.verify(JSON.stringify(req.body),{
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]

        })
        const {data, type} = req.body

        switch (type) {
            case "user.created":{
                const userData = {
                    clerkId:data.id,
                    email:data.email_addresses[0].email_address,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    photo:data.image_url
                }
                await userModel.create(userData)
                res.json({})
                
                break;
            }
                
            case "user.updated":{
                const userData = {
                    email:data.email_addresses[0].email_address,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    photo:data.image_url
                }
                await userModel.findOneAndUpdate({clerkId:data.id},userData)
                res.json({})
                break;
            }
                
            case "user.deleted":{
                await userModel.findOneAndDelete({clerkId:data.id})
                res.json({})
                break;
            }
            
            default:
                break;
        }
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
    }
}
//API controller fuction to get user available credits
const userCredits = async (req, res) => {
  try {
    const clerkId = req.clerkId; 
    console.log("Incoming clerkId:", clerkId);

    if (!clerkId) {
      return res.json({ success: false, message: "Clerk ID not provided" });
    }

    const userData = await userModel.findOne({ clerkId });

    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

       console.log("User data from DB:", userData);

    res.json({ success: true, credits: userData.creditBalance });
  } catch (error) {
    console.log("Error fetching user credits:", error.message);
    res.json({ success: false, message: error.message });
  }
};

//Gateway Initialize
const razorpayInstance = new razorpay({
  key_id:process.env.RAZORPAY_KEY_ID,
  key_secret:process.env.RAZORPAY_KEY_SECRET
})


//API to make payment to credits
const paymentRazorpay = async (req,res) => {
  try {
    const { planId } = req.body;
    const clerkId = req.clerkId;
    
    const userData = await userModel.findOne({clerkId})
    
    if(!userData || !planId){
      return res.json({success:false, message:"Invalid Credentials"})
    }

    let credits, plan, amount, date;

    switch(planId){
      case 'Basic':{
        plan='Basic'
        amount=10
        credits=100
        break;
      }
      case 'Advanced':{
        plan='Advance'
        amount=50
        credits=500
        break;
      }
      case 'Business':{
        plan='Business'
        amount=250
        credits=5000
        break;
      }
      default:
        return res.json({success:false, message:"Invalid plan selected"})
    }
    date=Date.now()

    //Creating transaction
    const transactionData = {
      clerkId,
      amount,
      date,
      plan,
      credits
    }
    const newTransaction = await transactionModel.create(transactionData)

    const options={
      amount:amount*100,
      currency:process.env.CURRENCY || 'INR',
      receipt:newTransaction._id.toString(),
    }
    try {
      const order = await razorpayInstance.orders.create(options);
      res.json({success:true, order});
    } catch (orderError) {
      console.log('Razorpay order creation error:', orderError);
      return res.json({success:false, message: orderError.message || 'Failed to create order'});
    }

  } catch (error) {
    console.log(error.message);
    res.json({success:false,message:error.message})
  }
}

//API Controller funcion to verify razorpay payment
const verifyRazorpay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;

    if (!razorpay_order_id) {
      return res.json({ success: false, message: 'Order ID not provided' });
    }

    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
    
    if (orderInfo.status === 'paid') {
      const transactionData = await transactionModel.findById(orderInfo.receipt);
      
      if (!transactionData) {
        return res.json({ success: false, message: 'Transaction not found' });
      }
      
      if (transactionData.payment) {
        return res.json({ success: false, message: 'Payment already processed' });
      }
      
      // Adding Credit in user data
      const userData = await userModel.findOne({ clerkId: transactionData.clerkId });
      
      if (!userData) {
        return res.json({ success: false, message: 'User not found' });
      }
      
      const creditBalance = userData.creditBalance + transactionData.credits;
      await userModel.findByIdAndUpdate(userData._id, { creditBalance });

      // Making the payment true
      await transactionModel.findByIdAndUpdate(transactionData._id, { payment: true });
      
      res.json({ success: true, message: 'Credit added' });
    } else {
      res.json({ success: false, message: 'Payment not completed' });
    }
  } catch (error) {
    console.log('Verify Razorpay Error:', error.message);
    res.json({ success: false, message: error.message });
  }
};  

export {clerkWebhooks,userCredits, paymentRazorpay,verifyRazorpay}