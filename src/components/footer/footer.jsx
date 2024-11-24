import Banner from "./components/banner";
import Socials from "./components/socials";
import Subscribe from "./components/subscribe";
import CallIcon from "./icon/call-icon";
import ChevronDownIcon from "./icon/chevron-down-icon";
import TrailingIcon from "./icon/trailing-icon";

const personalShopperDetails = [
  { 
    title: 'Online Personal Shopper',
    items: [
      '(02) 8811-8811',
      '(02) 8811-8811',
    ],
    hasIcon: false,
    icon: false
  },
  { 
    title: 'In-Store Personal Shopper',
    items: [''],
    hasIcon: true,
    icon: <TrailingIcon/>
  },
  { 
    title: 'Overseas Hotlines',
    items: [
      '(02) 8248-3233',
      '09989587101',
      '(02) 8248-3233',
      '09989587101',
    ],
    hasIcon: true,
    icon: 'chevron'
  },
  { 
    title: 'Business Solutions',
    items: [
      '(02) 8248-3233',
      '09989587101',
    ],
    hasIcon: true,
    icon: 'chevron'
  },
  { 
    title: 'Online Personal Shopper',
    items: [
      '(02) 8248-3233',
      '09989587101',
      'customerservice@abenson.com',
      'Customer Inquiry Form'
    ],
    hasIcon: true,
    icon: 'chevron'
  },
]


const Footer = () => {
  return (
    <footer
      className="
        relative h-[831.8px] bg-no-repeat bg-footer-image flex flex-col gap-6
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
              <div className="ml-auto">
                <TrailingIcon />
              </div>
            </div>
            <ul className="flex flex-col gap-2">
              {personalShopperDetails.map((detail, index) => (
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
          <li className="py-4 px-2 flex flex-col gap-4 border-t-[1px]">
            <div className="flex w-full items-center">
              <h1 className="text-xs leading-[18px]">Overseas Hotlines</h1>
              <div className="ml-auto">
                <ChevronDownIcon />
              </div>
            </div>
          </li>
          <li className="py-4 px-2 flex flex-col gap-4 border-t-[1px]">
            <div className="flex w-full items-center">
              <h1 className="text-xs leading-[18px]">Business Solutions</h1>
              <div className="ml-auto">
                <ChevronDownIcon />
              </div>
            </div>
          </li>
          <li className="py-4 px-2 flex flex-col gap-4 border-t-[1px]">
            <div className="flex w-full items-center">
              <h1 className="text-xs leading-[18px]">Customer Care</h1>
              <div className="ml-auto">
                <ChevronDownIcon />
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-blue opacity-[93%]"/>
    </footer>
  );
};

export default Footer;
