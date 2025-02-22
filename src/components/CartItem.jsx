import React from 'react'
import { AiOutlinePlus ,  AiOutlineMinus} from "react-icons/ai"
import { MdDelete } from "react-icons/md";
import{removeFromCart, incrementQty, decrementQty} from "../Redux/Slices/CartSlice";
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const CartItem = ({id , name, price, img , qty}) => {
    const dispatch = useDispatch();
    const handleDelete = ()=> {
        dispatch(removeFromCart({id, name, price, img, qty}))
        toast(`${name} removed`, {
            icon: "👋"
           
          });
    }

    const hadleDecrementQty= ()=> {
        qty > 1 ? dispatch(decrementQty({id})):(qty = 0);
    }
    const handleIncrementQty = ()=> {
        dispatch(incrementQty({id}),  qty+1)
    }
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
        <div>
        <MdDelete onClick={handleDelete}
        className="absolute right-7 cursor-pointer " />
            <img src={img} alt=""className="w-[60px] h-[60px]"/>
        </div>
        <div className="leading-5">
            <h1 className="text-black font-bold">{name}</h1>
            <div className="flex justify-between">
                <span className="text-green-500 font-bold">₹{price}</span>
                <div className="flex justify-center items-center gap-2 absolute right-7">
                <AiOutlineMinus onClick={hadleDecrementQty}
                    className="border-2 border-gray-500 text-gray-500 text-xl p-1
                    hover:text-white hover:bg-green-600 hover:border-none rounded-lg transition-all
                    ease-linear cursor-pointer" />
                    <span>{qty}</span>
                    <AiOutlinePlus 
                    onClick={handleIncrementQty}
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