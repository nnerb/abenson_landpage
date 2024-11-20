import { useRef } from "react";
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

  return ( 
    <nav 
      className="flex items-center w-full mt-3 mb-[13px] px-[10px] 
      md:px-[30px] lg:px-[100px] xl:px-[148px]"
    >
      <ul 
        ref={listRef}
        className="category-bar flex items-center w-full px-2 gap-4 text-primary-gray text-sm
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