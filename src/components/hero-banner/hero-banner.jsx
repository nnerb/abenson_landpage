import HerroBannerButtons from "./components/hero-banner-buttons";
import HeroBannerHeader from "./components/hero-banner-header";
import HeroBannerImage from "./components/hero-banner-image";
import { motion } from "framer-motion"

const HeroBanner = () => {


  return (
    <motion.section 
      className="mt-6 lg:mt-[140px] z-0 w-full mx-auto max-w-[1300px] lg:px-[30px]"
    >
      <div className="relative">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 rounded-primary bg-custom-gradient"/>
        </div>
          {/* Image */}
        <HeroBannerImage />
        <div 
          className="
            absolute bottom-0 flex flex-col items-center 
            justify-center w-full mx-auto text-white right-0 
            left-0 px-9 gap-[3px] max-w-[632px] mb-[21px]
            custom-md:gap-3
            md:gap-4 md:mb-6
            lg:mb-8 z-20
          "  
        >
          <HeroBannerHeader />
          <HerroBannerButtons />
        </div>
      </div>
    </motion.section>
  );
};

export default HeroBanner;
