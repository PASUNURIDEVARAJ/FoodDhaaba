import React from 'react'

const CategoryMenu = () => {
  return (
    <div className="ml-5 py-6">
        <h1 className="text-3xl font-bold">Find the best Food</h1>
        <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
            <button 
            className="px-3 py-2 text-lg
             bg-gray-500 rounded-md hover:bg-green-500 hover:text-white font-bold">
                All
            </button>
            <button 
            className="px-3 py-2 text-lg
             bg-gray-500 rounded-md hover:bg-green-500 hover:text-white font-bold">
                BreakFast
            </button>
            <button 
            className="px-3 py-2 text-lg
             bg-gray-500 rounded-md hover:bg-green-500 hover:text-white font-bold">
                Lunch
            </button>
            <button 
            className="px-3 py-2 text-lg
             bg-gray-500 rounded-md hover:bg-green-500 hover:text-white font-bold">
                Dinner
            </button>
            <button 
            className="px-3 py-2 text-lg
             bg-gray-500 rounded-md hover:bg-green-500 hover:text-white font-bold">
                Snacks
            </button>
        </div>
    </div>
  )
}

export default CategoryMenu;