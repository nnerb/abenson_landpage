import { leftFooterDetails, rightFooterDetails } from "../data/footer-details";
import FooterInfo from "./footer-info";

const BottomFooter = () => {

  return ( 
    <div className="w-full flex z-10 mx-auto items-center justify-around px-4 gap-3">
      <div className="hidden lg:block">
        <FooterInfo details={leftFooterDetails}/>
      </div>
      <div 
        className="
          z-10 font-work-sans-regular text-white text-center 
          pt-[18px] pb-3 leading-[14.08px] text-xs mx-auto w-[239px]
          md:w-full md:font-poppins-regular md:leading-[18px] md:pt-[18.82px] md:pb-[14px]
          lg:pt-[18px] lg:w-auto lg:mx-0 
        "
      >
        Copyright © 2022 Abenson Ventures Inc.
        All rights reserved.
      </div>
      <div className="hidden lg:block">
        <FooterInfo details={rightFooterDetails}/>
      </div>
    </div>
   );
}
 
export default BottomFooter;