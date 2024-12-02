import { createContext, useEffect, useState } from "react";

import axios from "axios"
 export const AppContext = createContext();

import {useAuth, useClerk, useUser} from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom";





const AppProvider = ({ children }) => {
  const { openSignIn } = useClerk();

  const {getToken,} = useAuth()
    const [credit , setCredit] = useState(false)

    const [image , setImage] = useState(null)

    const [resultImag , setResultImag] = useState(false)


    console.log(image , "resultImag")



    const vite_bake_url = "http://localhost:3000"


    const {isSignedIn} = useUser()







    const loadCreditBalance = async () => {


        try {


          
            const token = await getToken()
            console.log(token , "token")

          
 
      const {data} = await axios.get(`${vite_bake_url}/api/users/credit` , { headers: { token } })

       
      if(data.success) {
        setCredit(data.creditBalance)
      }
      console.log(data , "data , loadCreditBalance")

          

        } catch (error) {
            console.log(error)

    }
}




const navigate = useNavigate()





const removeImagBG = async (img) => {
  try {
    if (!isSignedIn) {
      return openSignIn();
    }

    setImage(img);
    setResultImag(false);

    const token = await getToken();
    console.log(token, "token removeImagBG");

    const form = new FormData();

    navigate("/result");
    // Hubi in faylka la soo diray
    if (!img) {
      return alert("Please select an image");
    }
    console.log(img, "img");

    form.append('image', img);

    const { data } = await axios.post(
      `${vite_bake_url}/api/imag/remove_imagBg`,
      form,
      { headers: { token } }
    );
    console.log(data, "data removeImagBG");

    if(data.success) {
      setResultImag(data.resultingImg)
    }

    console.log(data, "data");
  } catch (error) {
    console.log(error);
  }
};








    const value  = {
        // your values here
        credit,
        loadCreditBalance,
        setCredit,
        vite_bake_url,
        image,
        setImage,
        removeImagBG,
        resultImag,
        setResultImag
    }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}


export default AppProvider;