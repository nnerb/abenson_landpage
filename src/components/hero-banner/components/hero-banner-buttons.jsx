import { Link } from "react-scroll";
import PrimaryButton from "../../buttons/primary-button";
import SecondaryButton from "../../buttons/secondary-button";
import { motion } from "framer-motion"

const HerroBannerButtons = () => {

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below and invisible
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 2, 
        delay: 1, 
        type: "spring"
      } 
    },
  };

  return ( 
    <motion.div 
      variants={buttonVariants}
      className="flex items-center justify-center gap-[6px] md:gap-3 lg:gap-4 w-full mt-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} 
    > 
      <SecondaryButton
        className="
          max-w-[230px] text-[13px] leading-[14.82px] 
          py-[8.5px] px-[14px] shadow-2xl 
          md:py-[10.5px] md:px-11
        "
      >
        <Link
          to="openings"
          spy={true}
          smooth={true}
          offset={-120}
          className="
            flex items-center gap-[3px] 
            md:text-[15px] md:leading-[22.5px] md:-tracking-[0.3px]
          "
        >
          <span className="hidden text-nowrap md:block">Check for</span>
          <span>Openings</span>
        </Link>
      </SecondaryButton>
      <PrimaryButton>
        <Link
          to="resume"
          spy={true}
          smooth={true}
          offset={-120}
          className="
            flex items-center gap-1 text-[13px] leading-[14.82px] 
            md:text-[15px] py-[8.5px] px-[14px]
            md:py-[10.5px] md:px-14 md:leading-[22.5px] md:-tracking-[0.3px]
          "
        >
        <span>Submit</span> 
        <span className="hidden md:block">Resume</span>
        </Link>
      </PrimaryButton>
    </motion.div>
   );
}
 
export default HerroBannerButtons;