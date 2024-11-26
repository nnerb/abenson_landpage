import { motion } from "framer-motion"

const HeroBannerHeader = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0,
      opacity: 1,
      transition: { 
        duration: 2.5, 
        type: "spring"
      } 
    },
  };

  return ( 
    <motion.header 
      className="flex flex-col custom-md:gap-3 md:gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView='visible'
      viewport={{ once:true }}
    >
      <motion.h1 
      className="
        text-center leading-9 font-poppins-semibold 
        text-[clamp(24px,4vw,50px)]
        lg:leading-[75px]
        -tracking-[0.3px]
      "
      variants={itemVariants}


    >
        Awesome at Abenson
      </motion.h1>
      <motion.p 
        className="
          text-center text-[clamp(11px,2vw,16px)] leading-[12.54px] 
          md:leading-[24px] 
          md:text-sm 
          lg:text-base
        "
        variants={itemVariants}
      >
        We’re here to make people happy through technology. 
        Be a part of a high performance team and grow your career with us.
      </motion.p>
    </motion.header>
   );
}
 
export default HeroBannerHeader;