import { useState } from "react";
import logo from "../../../assets/images/logo.png"
import CartIcon from "./icons/cart-icon"
import SearchIcon from "./icons/search-icon";
import UserIcon from "./icons/user-icon";
import ColoredCartIcon from "./icons/colored-cart-icon";
import { phpFormatter } from "../../../utils/formatter";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false)
  return ( 
    <header 
      className="bg-primary-blue mx-auto w-full max-w-[1300px] rounded-b-primary
       px-3 flex items-center gap-3 fixed 
       lg:gap-[25px] lg:px-[30px] text-white z-50"
    >
      {/* Branding */}
      <div className="flex-shrink-0">
        <a href="/" aria-label="Homepage">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-[14px] w-[106px] lg:h-[22px] lg:w-[160px] lg:mb-[7px]" 
          />
        </a>
      </div>

      {/* Search bar  */}
      <div className="pt-2 pb-[10px] lg:py-[15px] relative flex-1">
        <input 
          className="rounded-[25px] bg-[#4B4EBB] text-sm
          py-[8.5px] px-[11px] pr-10 w-full placeholder-white
          focus:outline-none text-white focus:text-gray-500 focus:bg-white focus:placeholder-gray-600"
          placeholder="Summer Promo!"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}  
        />
        <div className="absolute right-0 top-0 translate-y-[1.1rem] -translate-x-4 lg:translate-y-6 ">
          {<SearchIcon isFocused={isFocused} />}
        </div>
      </div>

      <div className="flex items-center gap-[15px]">
        {/* User Account */}
        <nav 
          className="hidden lg:flex gap-2 font-poppins-semibold 
          hover:bg-primary-blue-hover rounded-2xl p-2 -m-2"
        >
          <UserIcon aria-hidden="true" />
          <a href="/">
            Login
          </a>
        </nav>

        {/* Cart */}
        <button className="p-[6px] pr-[10px] mt-[5px] cursor-pointer" aria-label="Open cart">
          <div className="hover:bg-primary-blue-hover rounded-2xl px-2 -mx-2 pt-2 -mt-2 flex items-center">
            <div className="relative">
              <div className="lg:hidden">
                <CartIcon />
              </div>
              <div className="hidden lg:block">
                <ColoredCartIcon/>
              </div>
              <p 
                className="absolute font-roboto-bold text-[10px]
                text-primary-blue rounded-full py-[0.5px] px-[5.13px] bg-primary-yellow
                -translate-y-7 translate-x-3 lg:-translate-y-8 lg:translate-x-4"
              >
                1
              </p>
            </div>
            <div className="hidden lg:flex flex-col items-center ml-2">
              <span className="font-poppins-semibold text-[15px] leading-[0.8] ">Cart</span>
              <span className="text-[10px] font-poppins leading-[2] ">{phpFormatter.format(999999)}</span>
            </div>  
          </div>
        </button>
      </div>
    </header>
   );
}
 
export default Navbar;