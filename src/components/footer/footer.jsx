import Banner from "./components/banner";
import Contacts from "./components/contacts";
import Socials from "./components/socials";
import Subscribe from "./components/subscribe";
import SupportPayment from "./components/support-payment";

const Footer = () => {
 

  return (
    <footer
      className="
        relative h-[full] :::h-[831.8px] bg-no-repeat bg-footer-image flex flex-col gap-6
        bg-sm-position bg-sm-bg-size md:gap-5
        md:bg-md-position md:bg-md-bg-size
         lg:py-[58px] lg:px-4
        lg:flex-row lg:items-start lg:justify-between z-20
        
      "
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
      <SupportPayment />
      <div className="relative z-10 px-4 md:hidden">
        <Socials />
      </div>
      <div className="px-[15px] lg:px-0 text-white relative z-10 md:px-[38px]">
        <Contacts />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-blue opacity-[93%] z-0" />
    </footer>
  );
};

export default Footer;
