import { useDispatch } from "react-redux";
import NavLogo from "../assets/Navlogo.png"
import { setSearch } from "../Redux/Slices/SearchSlice";


const NavBar = () => {
  const dispatch = useDispatch()
  return (
   <nav className="flex justify-between flex-col bg-gray-500 lg:flex-row py-3 px-5 rounded-lg mb-6 ">
    <div>
    <img  
    className="w-[120px] mx-2 "
    src={NavLogo} alt="nav-logo"/>
    </div>
    <div>
      <input
      onChange={(e)=>dispatch(setSearch(e.target.value))}
      className="my-6 p-12 py-3 mx-4 rounded-lg border-gray-400  w-full lg:w-[25vw]"
      type="text"
      placeholder="search here"
      />
    </div>

   </nav>
  
  )
}

export default NavBar;