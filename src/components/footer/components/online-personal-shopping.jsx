import { useState } from "react";
import CallIcon from "../icons/call-icon";
import PropTypes from "prop-types";
import ChevronDownIcon from "../icons/chevron-down-icon";

const OnlinePersonalShopperSection = ({ onlinePersonalShopper }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSeeMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <li 
      className="py-4 px-2 flex flex-col border-t-[1px]
      md:gap-2 md:pt-0 "
    >
      <div className="flex w-full items-center mb-4 md:p-0 md:mb-0">
        <div
          className='flex w-full items-center cursor-pointer'
          onClick={toggleSeeMore}
        >
          <h1 
            className="
              text-xs leading-[18px]
              md:text-[12.78px] md:leading-[44.8px]
            "
          >
            Online Personal Shopping
          </h1>
          <div
            className={`ml-auto transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            <ChevronDownIcon />
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-2 md:ml-[48px] lg:ml-0">
        {onlinePersonalShopper.slice(0, 2).map((detail, index) => (
          <li className="flex items-center gap-3" key={index}>
            <CallIcon />
            <p 
              className="text-xs leading-[18px] md:text-[14px] md:leading-[16.42px]"
            >
              {detail.number}
            </p>
          </li>
        ))}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out flex flex-col gap-2 ${
            isExpanded ? "max-h-[200px]" : "max-h-0"
          }`}
        >
          {isExpanded &&
            onlinePersonalShopper.slice(2).map((detail, index) => (
              <li className="flex items-center gap-3" key={index}>
                <CallIcon />
                <p 
                  className="
                    text-xs leading-[18px] 
                    md:text-[14px] md:leading-[16.42px]
                  "
                >
                  {detail.number}
                </p>
              </li>
          ))}
        </div>
      </ul>
      <a 
        className="
          text-[11px] leading-[16.5px] cursor-pointer hover:underline mt-[10px]
          md:text-[14px] md:leading-[16.42px] md:ml-[48px] md:mt-0
        " 
        onClick={toggleSeeMore}>
        {isExpanded ? "See less" : "See more..."}
      </a>
    </li>
  );
};

OnlinePersonalShopperSection.propTypes = {
  onlinePersonalShopper: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired, // Ensure 'number' is a string
    })
  ).isRequired,
};


export default OnlinePersonalShopperSection;
