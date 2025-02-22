import React, { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";


const Cart = () => {  
  const[activeCart , setActiveCart ] = useState(false);
  const cartItems = useSelector((store)=> store.cart.cart)
  const totalQtys = cartItems.reduce((totalQtys, item) => totalQtys + item.qty, 0 )
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price , 0)
  console.log(cartItems)
  return (
    <>
    <div className={`fixed right-0 top-0 w-full h-full lg:w-[20vw] bg-white 
    p-5 rounded-lg mb-3 ${activeCart ? "translate-x-0" : "translate-x-full"} 
    translate-all duration-500 z-50 ` }>
        <div className="flex justify-between items-center my-4">
            <span className="text-xl font-bold text-purple-500">My Orders </span>
            <IoCloseCircleOutline onClick={()=>setActiveCart(!activeCart)}
             className="hover:scale-110 text-red-600 font-bold text-3xl cursor-pointer ">{activeCart}</IoCloseCircleOutline>
        </div>
        
          {cartItems.length  > 0 ? cartItems.map((food) => {
             return (
              <CartItem key={food.id}
             id = {food.id}
             name = {food.name}
             price = {food.price}
             img = {food.img}
             qty = {food.qty}
             /> 
            );
          }) : <p className='flex text-lg justify-center font-bold' >Cart is empty</p>}
         
          
       
            <div className=" absolute fixed bottom-0">
                <h1 className="font-bold text-lg text-slate-500">items : {totalQtys}</h1>
                <h1 className="font-bold text-lg text-slate-500">total amount : {totalPrice}</h1>
                <hr className="w-[90vw] lg:w-[18vw] my-2 "></hr>
                <button 
                className="bg-slate-700 font-bold px-3 w-[90vw] lg:w-[18vw] mb-5 text-white py-2 rounded-md">
                Place Order
                </button>
            </div>
   </div>
   <FaShoppingCart 
   onClick={()=> setActiveCart(!activeCart)}
   className={`text-5xl rounded-full bg-white shadow-md p-3 fixed
     bottom-10 right-4 hover:scale-110 ${totalQtys > 0 && "animate-bounce delay-500 translate-all"}`}
   />
   </>
  )
}

export default Cart;