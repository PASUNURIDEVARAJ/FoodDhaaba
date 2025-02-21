import React from 'react'
import { IoIosStar } from "react-icons/io";
import { useDispatch } from 'react-redux';
import {addToCart} from "../Redux/Slices/CartSlice"

const FoodCard = ({id ,name, price, desc, rating, img , handleToast}) => {
    const dispatch = useDispatch();
    const handleAddCart= ()=> {
        dispatch(addToCart({id, name, price , rating, img, qty:1})),
        handleToast(name)
    }
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col
     rounded-md gap-2 hover:scale-110 cursor-grab transition-all duration-300 ease-in-out">
        <img
         src={img}
         alt=''
         className="w-auto h-[130px] "/>

        <div className="text-sm flex justify-between">
            <h2>{name}</h2>
            <span className="text-green-500 font-bold"> ₹ {price}</span>
        </div>
        <p className="text-sm font-normal">
            {desc.slice(0, 50)}...
        </p>
        <div className="flex justify-between">
            <span className="flex justify-center items-center">
                <IoIosStar className="mr-1 text-yellow-300 text-lg "/>{rating} 
            </span>
            <button onClick={handleAddCart} 
            
            className="bg-green-500 text-white p-1 hover:bg-green-600 rounded-lg text-lg"
            > add cart</button>
           
        </div>
    </div>

  )
}

export default FoodCard;