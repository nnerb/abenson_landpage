
import { useState } from "react";
import CallIcon from "../icon/call-icon";
import ChevronDownIcon from "../icon/chevron-down-icon";
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
          className="py-4 px-2 flex flex-col border-t-[1px]"
          key={index}
        >
          <div
            className={`flex w-full items-center cursor-pointer ${
              expandedIndex === index ? "mb-4" : "mb-0"
            }`}
            onClick={() => toggleSection(index)}
          >
            <h1 className="text-xs leading-[18px] ">{detail.title}</h1>
            <div
              className={`ml-auto transition-transform duration-300 ${
                expandedIndex === index ? "rotate-180" : ""
              }`}
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
                  <CallIcon />
                  <p className="text-xs leading-[18px]">{item}</p>
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
