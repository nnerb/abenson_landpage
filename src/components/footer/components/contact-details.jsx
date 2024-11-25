
import { useState } from "react";
import CallIcon from "../icons/call-icon";
import ChevronDownIcon from "../icons/chevron-down-icon";
import PropTypes from "prop-types";

const ContactDetailsSection = ({
  contactDetails
}) => {

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleSection = (index) => {
    // Toggle logic, close current section if already open, else open the clicked section
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {contactDetails.map((detail, index) => (
        <li
          className={`
            py-4 px-2 flex flex-col border-t-[1px]
            md:py-0 last:border-b-[1px]
            ${expandedIndex === index ? "md:mb-4" : ""}
          `}
          key={index}
        >
          <div
            className={`flex w-full items-center cursor-pointer ${
              expandedIndex === index ? "mb-4 md:mb-0" : "mb-0"
            }`}
            onClick={() => toggleSection(index)}
          >
            <h1 
              className="
                text-xs leading-[18px]
                md:text-[12.78px] md:leading-[44.8px]
              "
            >
            {detail.title}
            </h1>
            <div
              className={`
                ml-auto transition-transform duration-300 
                ${
                  expandedIndex === index ? "rotate-180" : ""
                }
              `}
            >
              <ChevronDownIcon />
            </div>
          </div>
          <ul
            className={`flex flex-col gap-2 overflow-hidden transition-all duration-300`}
            style={{
              maxHeight: expandedIndex === index ? "1000px" : "0px",
            }}
          >
            {expandedIndex === index &&
              detail.items.map((item, itemIndex) => (
                <li className="flex items-center gap-3" key={itemIndex}>
                <CallIcon/>
                <p 
                  className="
                    text-xs leading-[18px] 
                    md:text-[14px] md:leading-[16.42px]
                  "
                >
                  {item}
                </p>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </>
  );
};

ContactDetailsSection.propTypes = {
  contactDetails: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ContactDetailsSection;
