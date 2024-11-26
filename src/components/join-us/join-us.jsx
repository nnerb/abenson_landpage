import { motion } from "framer-motion";
import { joinUsDetails } from "./data/join-us-details";

const JoinUs = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 }, 
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return ( 
    <section className="text-primary-gray flex flex-col items-center gap-4 lg:gap-7 py-4 lg:py-10">
      <h1 className="text-lg font-poppins-semibold md:text-[28px]">Why join us?</h1>
      <motion.ul
        className="flex gap-4 lg:gap-10 py-2 items-start w-full overflow-x-scroll scrollbar-hide cursor-pointer justify-between"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} 
      >
        {joinUsDetails.map((detail) => (
          <motion.li
            key={detail.title}
            variants={itemVariants}
            className='flex flex-col items-center justify-center gap-2 p-2
            lg:gap-4 min-w-[140px] max-w-[216px] rounded-primary hover:shadow-md'
          >
            <detail.icon />
            <h1 className='text-center font-poppins-semibold text-sm lg:text-xl'>{detail.title}</h1>
            <p className='text-xs text-center lg:text-base'>{detail.description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default JoinUs;
