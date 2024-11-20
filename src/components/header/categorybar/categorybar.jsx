import { useEffect, useRef, useState } from "react";
import ChevronRightIcon from "./icons/chevron-right-icon";
import TagIcon from "./icons/tag-icon";

const CategoryBar = () => {

  const categoryBarItems = [
    { name: 'Featured', hasIcon: false },
    { name: 'Deals', hasIcon: true },
    { name: 'Mobile', hasIcon: false },
    { name: 'Gadgets', hasIcon: false },
    { name: 'TV', hasIcon: false },
    { name: 'Aircon', hasIcon: false },
    { name: 'Home Appliance', hasIcon: false },
    { name: 'Small Appliance', hasIcon: false },
    { name: 'Hardware', hasIcon: false },
    { name: 'Furniture', hasIcon: false },
    { name: 'Services', hasIcon: false },
  ]

  const listRef = useRef(null);

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: listRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return ( 
    <nav 
      className={`${isScrolled ? "flex" : "lg:flex hidden"} items-center w-full mt-[67px] lg:mt-[79px] mb-[13px] px-3
      md:px-[30px] lg:px-[100px] xl:px-[148px] bg-white`}
    >
      <ul 
        ref={listRef}
        className="flex items-center w-full px-2 gap-4 text-primary-gray text-sm
        md:justify-between lg:gap-2 overflow-x-auto lg:overflow-x-hidden scrollbar-hide"
      >
        {categoryBarItems.map((item) => (
          <li 
            key={item.name}
            className="flex items-center gap-1 justify-center 
            rounded-xl px-2 -mx-2 flex-shrink-0 hover:bg-blue-50 cursor-pointer"
          > 
            {item.hasIcon && <TagIcon />}
            <span className="">{item.name}</span>
          </li>
        ))}
      </ul>
      <button className="lg:hidden" onClick={scrollRight}>
        <ChevronRightIcon />
      </button>
    </nav>
   );
}
 
export default CategoryBar;