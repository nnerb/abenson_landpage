import { useState } from "react";
import CallIcon from "../icon/call-icon";
import PropTypes from "prop-types";


const OnlinePersonalShopperSection = ({ onlinePersonalShopper }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSeeMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <li className="py-4 px-2 flex flex-col gap-4 border-t-[1px]">
      <div className="flex w-full items-center">
        <h1 className="text-xs leading-[18px]">Online Personal Shopper</h1>
      </div>
      <ul className="flex flex-col gap-2">
        {onlinePersonalShopper.slice(0, 2).map((detail, index) => (
          <li className="flex items-center gap-3" key={index}>
            <CallIcon />
            <p className="text-xs leading-[18px]">{detail.number}</p>
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
                <p className="text-xs leading-[18px]">{detail.number}</p>
              </li>
            ))}
        </div>
        <li className="text-xs leading-[18px] cursor-pointer hover:underline" onClick={toggleSeeMore}>
          {isExpanded ? "See less" : "See more"}
        </li>
      </ul>
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
