import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(false);
  const [image,setImage] = useState(false)  

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { getToken } = useAuth();

  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });

      const data = response.data; 

      if (data.success) {
        setCredit(data.credits);
        console.log("User Credits:", data.credits);
      } else {
        console.warn("Failed to load credits:", data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeBg = async (image) => {
    try {
        
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const value = {
    credit,
    setCredit,
    backendUrl,
    loadCreditsData,
    image,
    setImage,
    removeBg
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
