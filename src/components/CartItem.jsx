import React from 'react'
import { AiOutlinePlus ,  AiOutlineMinus} from "react-icons/ai"
import { MdDelete } from "react-icons/md";
const CartItem = () => {
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
        <div>
        <MdDelete className="absolute right-7 cursor-pointer" />
            <img src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
             alt="" 
             className="w-[60px] h-[60px]"/>
        </div>
        <div className="leading-5">
            <h1 className="text-black font-bold">onion Pizza</h1>
            <div className="flex justify-between">
                <span className="text-green-500 font-bold">₹ 120</span>
                <div className="flex justify-center items-center gap-2 absolute right-7">
                    <AiOutlinePlus className="border-2 border-gray-500 text-gray-500 text-xl p-1
                    hover:text-white hover:bg-green-600 hover:border-none rounded-lg transition-all
                    ease-linear cursor-pointer" />
                    <span>1</span>
                    <AiOutlineMinus
                    className="border-2 border-gray-500 text-gray-500 text-xl p-1
                    hover:text-white hover:bg-green-600 hover:border-none rounded-lg transition-all
                    ease-linear cursor-pointer" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem;