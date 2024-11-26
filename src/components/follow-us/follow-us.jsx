import FollowUsGrid from "./components/follow-us-grid";
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 2,
      type:"spring"
    } 
  }
}
const FollowUs = () => {
  return ( 
    <section 
      className="flex flex-col items-center gap-[12.22px] md:gap-5 
      max-w-[599px] min-w-[328px] mx-auto text-primary-gray md:py-8 lg:py-10"
    >
      <h1 className="text-lg custom-sm:text-[28px] custom-sm:leading-9 
        font-poppins-semibold vertical-trim custom-sm:no-vertical-trim">
        Follow Us
      </h1>
      <motion.ul 
        className="flex items-start gap-[24.44px] md:gap-10 md:items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
       <FollowUsGrid />
      </motion.ul>
    </section>
   );
}
 
export default FollowUs;