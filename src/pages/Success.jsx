import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import  { useNavigate } from "react-router-dom";

const Success = () => {
  const[loading, setLoading ] = useState(true);
  const navigate = useNavigate();

  useEffect(()=> {
    setTimeout(()=> {
      setLoading(false)
    }, 3000)
  }, [])
  
  return (
  
    <div className="flex  flex-col justify-center items-center h-screen">
    {
      loading ? (<PropagateLoader color="#1ce884"size={15}/>): (
        <div>
     
        <h1 className="text-3xl font-bold mb-4 ">Order Successfull</h1>
        <p>Your order has been placed successfully</p>
        <button
        onClick={()=> navigate("/")}
        className= "flex justify-center  bg-green-600 py-4 px-4 rounded-lg mt-5">Back home</button>
        </div>
        

      )
    }
    {/* <button
    onClick={()=> navigate("/")}
     className="bg-green-600 px-3 rounded-lg my-2">Back home</button> */}
   
    </div>
  )
}

export default Success;