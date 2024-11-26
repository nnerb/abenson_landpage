import TeamsGrid from "./components/teams-grid";
import { motion } from "framer-motion"

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const gridVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};


const Teams = () => {
  return ( 
    <motion.section 
      className="w-full flex flex-col items-center gap-4 lg:gap-5"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      <h1 className="text-lg font-poppins-semibold md:text-[28px] text-primary-gray">
        Meet our teams
      </h1>
      <motion.div 
        className="w-full relative flex" 
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <TeamsGrid />
      </motion.div>
    </motion.section>
   );
}
 
export default Teams;