import { useEffect, useRef, useState } from "react";
import ChevronRightIcon from "./icons/chevron-right-icon";
import TagIcon from "./icons/tag-icon";
import { categoryBarItems } from "./data/category-bar-items";
import { motion } from "framer-motion"

const CategoryBar = () => {

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

   // Framer Motion Variants
   const itemVariants = {
    hidden: { y: -50, opacity: 0 }, 
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.3,
        duration: 1.25, 
      },
    }),
  };

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
        {categoryBarItems.map((item, index) => (
          <motion.li 
            key={item.name}
            className="flex items-center gap-1 justify-center 
            rounded-xl px-2 -mx-2 flex-shrink-0 hover:bg-blue-50 cursor-pointer"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={index} // Pass index for staggered animation
          > 
            {item.hasIcon && <TagIcon />}
            <span className="">{item.name}</span>
          </motion.li>
        ))}
      </ul>
      <button aria-label="next" className="lg:hidden" onClick={scrollRight}>
        <ChevronRightIcon />
      </button>
    </nav>
   );
}
 
export default CategoryBar;