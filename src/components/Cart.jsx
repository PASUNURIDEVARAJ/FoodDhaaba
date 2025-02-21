import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import CartItem from './CartItem';

const Cart = () => {
  return (
    <>
    <div className="fixed right-0 top-0 w-full h-full lg:w-[20vw] bg-white p-5 rounded-lg">
        <div className="flex justify-between items-center my-4">
            <span className="text-xl font-bold text-purple-500">My Orders </span>
            <IoCloseCircleOutline  className="text-red-600 font-bold text-3xl cursor-pointer "/>
        </div>
          <CartItem/> 
          <CartItem/>
          <CartItem/>
       
            <div className=" absolute fixed bottom-0">
                <h1 className="font-bold text-lg text-slate-500">items : </h1>
                <h1 className="font-bold text-lg text-slate-500">total amount :</h1>
                <hr className="w-[90vw] lg:w-[18vw] my-2 "></hr>
                <button 
                className="bg-slate-700 font-bold px-3 w-[90vw] lg:w-[18vw] mb-5 text-white py-2 rounded-md">
                Place Order
                </button>
            </div>
   </div>
   </>
  )
}

export default Cart;