import { useState } from "react";
import Banner from "./components/banner";
import Socials from "./components/socials";
import Subscribe from "./components/subscribe";
import CallIcon from "./icon/call-icon";
import ChevronDownIcon from "./icon/chevron-down-icon";
import TrailingIcon from "./icon/trailing-icon";
import { useRef } from "react";

const onlinePersonalShopper = [
  { number: '(02) 8811-8811' },
  { number: '(02) 8811-8811' },
  // { number: '(02) 8811-8811' },
  // { number: '(02) 8811-8811' },
]

const contactDetails = [
  { 
    title: 'Overseas Hotlines',
    items: [
      '(02) 8248-3233',
      '09989587101',
      '(02) 8248-3233',
      '09989587101',
    ],
  },
  { 
    title: 'Business Solutions',
    items: [
      '(02) 8248-3233',
      '09989587101',
    ],
  },
  { 
    title: 'Online Personal Shopper',
    items: [
      '(02) 8248-3233',
      '09989587101',
      'customerservice@abenson.com',
      'Customer Inquiry Form'
    ],
  },
]


const Footer = () => {
  const [expandedIndex, setExpandedIndex] = useState(false);

  const toggleSection = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <footer
      className="
        relative h-[full] :::h-[831.8px] bg-no-repeat bg-footer-image flex flex-col gap-6
        bg-sm-position bg-sm-bg-size
        md:bg-md-position md:bg-md-bg-size
        lg:h-[569px] lg:py-[58px] lg:px-[64.02px]
      "
      // style={{
      //   backgroundSize: "203%", 
      //   backgroundPosition: "0.8% 34.6%",
      // }}
    >
      <div 
        className="
          min-w-[280px] w-full lg:w-[455px] lg:max-w-[452px]
          lg:flex lg:flex-col-reverse lg:gap-[34px] 
        "
      >
        <Banner />
        <Subscribe />
      </div>
      <div className="relative z-10 px-4 md:hidden">
        <Socials />
      </div>
      <div className="px-[15px] text-white relative z-10">
        <ul className="last:border-b-[1px]">
          <li className="py-4 px-2 flex flex-col gap-4 border-t-[1px]">
            <div className="flex w-full items-center">
              <h1 className="text-xs leading-[18px]">Online Personal Shopper</h1>
            </div>
            <ul className="flex flex-col gap-2">
              {onlinePersonalShopper.map((detail, index) => (
                <li className="flex items-center gap-3" key={index}>
                    <CallIcon />
                  <p className="text-xs leading-[18px]">{detail.number}</p>
                </li>
              ))}
                <li className="text-xs leading-[18px]">Open at 8am-6pm daily</li>
                <li className="text-xs leading-[18px]">See more</li>
            </ul>
          </li>
          <li className="py-4 px-2 flex flex-col gap-4 border-t-[1px]">
            <div className="flex w-full items-center">
              <h1 className="text-xs leading-[18px]">In-Store Personal Shopper</h1>
              <div className="ml-auto">
                <TrailingIcon />
              </div>
            </div>
          </li>
          {/* Add the functionality here */}
          {contactDetails.map((detail, index) => (
            <li
              className={`py-4 px-2 flex flex-col border-t-[1px]
              `}
              key={index}
            >
              <div 
                className="flex w-full items-center cursor-pointer"
                style={{}}
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
                className={`flex flex-col gap-2 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  expandedIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {detail.items.map((item, itemIndex) => (
                  <li className="flex items-center gap-3" key={itemIndex}>
                    <CallIcon />
                    <p className="text-xs leading-[18px]">{item}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-blue opacity-[93%]"/>
    </footer>
  );
};

export default Footer;
