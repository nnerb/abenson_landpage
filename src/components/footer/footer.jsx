import Banner from "./components/banner";
import BottomFooter from "./components/bottom-footer";
import Contacts from "./components/contacts";
import FooterInfo from "./components/footer-info";
import PaymentImagesGrid from "./components/payment-images-grid";
import Socials from "./components/socials";
import Subscribe from "./components/subscribe";
import SupportPayment from "./components/support-payment";
import { leftFooterDetails, rightFooterDetails } from "./data/footer-details";

const Footer = () => {

  return (
    <footer
      className="
        relative flex flex-col
        bg-no-repeat bg-footer-image bg-sm-position bg-sm-bg-size
        md:bg-md-position md:bg-md-bg-size
        lg:py-[58px] lg:px-4 
        xl:px-[70px] 
      "
      >
      <div
        className="
          flex flex-col gap-6 
          md:gap-5 
          lg:flex-row lg:items-start lg:justify-between 
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
        <div className="px-[15px] lg:px-0 text-white relative z-10 md:px-[38px] flex flex-col gap-6">
          <h1
            className="
              hidden lg:block
            text-primary-yellow font-poppins-semibold
              leading-6  
              lg:text-base lg:leading-[32px]
            "
          >
            Connect with us
          </h1>
          <div className="hidden lg:block">
            <Socials />
          </div>
          <Contacts />
          <div className="md:hidden">
            <PaymentImagesGrid />
          </div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary-blue opacity-[93%] z-0" />
        {/* Bottom Footer */}
        <div className="flex z-10 mx-auto gap-[37px] pb-[18px] lg:hidden">
          <div className="hidden md:block lg:hidden">
           <Socials />
          </div>
          <div className="z-10 mx-auto flex flex-col items-center gap-[7px] md:flex-row">
            <FooterInfo details={leftFooterDetails}/>
            <FooterInfo details={rightFooterDetails}/> 
          </div>
        </div>
      </div>
      <hr className="z-10 lg:mt-[52px]"/>
      <BottomFooter />
    </footer>
  );
};

export default Footer;
