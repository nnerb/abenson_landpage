import ChevronDownIcon from "./icons/chevron-down-icon";

const TopBar = () => {

  const navItems = [
    { label: "Our shops", hasIcon: true, hoverContent: ["Shop 1", "Shop 2", "Shop 3"] },
    { label: "Store Location", hasIcon: false },
    { label: "Order Tracker", hasIcon: false },
    { label: "Viber Chat", hasIcon: false },
    { label: "Download Absenson App", hasIcon: true,  },
  ]

  return ( 
    <nav 
      className="px-[30px] py-[6px] text-xs w-full bg-primary-gray 
      text-secondary-gray hidden lg:flex items-center gap-5"
    >
     {navItems.map((item, index) => (
        <div 
          key={index}
          className={`flex items-center gap-1 rounded-xl cursor-pointer
          hover:bg-primary-gray-hover px-2 py-1 -mx-2 -my-1 ${
            item.label === "Store Location" ? "ml-auto" : ""
          }`}
        >
          <span>{item.label}</span>
          {item.hasIcon && <ChevronDownIcon />}
          {/* Hover Card */}

        </div>
      ))}
    </nav>
   );
}
 
export default TopBar;