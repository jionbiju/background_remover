import React from "react";
import { assets, plans } from "../assets/assets.js";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify"; 

const BuyCredit = () => {
  const { backendUrl, loadCreditsData } = useContext(AppContext);
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const initPay = async (order) => {

    if (!window.Razorpay) {
      console.error("Razorpay SDK not loaded");
      toast.error("Payment gateway not loaded. Please refresh the page.");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log("Payment successful:", response);
        const token = await getToken();
        try {
          const { data } = await axios.post(backendUrl+'/api/user/verify-razor',response,
            {headers:{token}})
          
          if(data.success){
            loadCreditsData()
            navigate('/')
            toast.success('Credit Added')
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message)
          
        }

      }
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response) {
      console.log("Payment failed:", response);
      toast.error("Payment failed. Please try again.");
    });

    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      console.log("Clicked on plan:", planId);
      console.log("Razorpay key:", import.meta.env.VITE_RAZORPAY_KEY_ID);


      if (!import.meta.env.VITE_RAZORPAY_KEY_ID) {
        toast.error("Payment configuration error. Please contact support.");
        return;
      }

      const token = await getToken();

      if (!token) {
        toast.error("Please login to continue");
        return;
      }

      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        { headers: { token } }
      );

      console.log("Backend response:", data);

      if (data.success) {
        initPay(data.order);
      } else {
        toast.error(data.message || "Failed to create order");
      }
    } catch (error) {
      console.log("Payment error:", error);
      toast.error(
        error.response?.data?.message || "Payment failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-500 px-4 py-2 rounded-full">
        Our Plans
      </button>
      <h1 className="text-center pb-1 text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
        Choose the plan that's right for you
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left mt-10">
        {plans.map((items, index) => {
          return (
            <div
              key={index}
              className="bg-white border drop-shadow-sm rounded-lg px-8 text-gray-700 py-12 hover:scale-105 transition-all duration-700 cursor-pointer"
            >
              <img src={assets.logo_icon} width={60} alt="" />
              <p className="mt-3 font-semibold">{items.id}</p>
              <p className="text-sm">{items.desc}</p>
              <p className="mt-6">
                <span className="text-3xl font-medium">${items.price}</span>/{" "}
                {items.credits} credits.
              </p>
              <button
                onClick={() => paymentRazorpay(items.id)}
                className="w-full bg-gray-800 text-white rounded-md mt-8 text-sm py-2 min-w-52 hover:bg-gray-700 transition-colors"
              >
                Purchase
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuyCredit;
