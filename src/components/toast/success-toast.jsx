import success from "./svg/success.svg";
import close from "./svg/close.svg";
import PropTypes from "prop-types";
import { motion } from "framer-motion"
import toast from "react-hot-toast";

const SuccessToast = ({ t }) => {
  return (
    <motion.div
    className={`
      bg-[#22305C] 
      shadow-success flex w-[320px] gap-2 z-50
      text-[14px] leading-[19.67px] text-white
      p-3 rounded-[10px] items-center
    `}
    initial={{ opacity: 0, y: -20 }}
    animate={{ 
      opacity: t.visible ? 0.8 : 0,
      y: t.visible ? 0 : -20,
      transition: {
        default: { type: "spring" },
      } 
    }} 
    exit={{ opacity: 0, y: 20 }}
  >
    <img src={success} alt="Success" className="w-[20px] h-[20px]" />
    <p className="flex-1">Resume Submitted Successfully!</p>
    <img
      src={close}
      alt="Close"
      className="ml-auto cursor-pointer"
      onClick={() => toast.dismiss(t.id)} 
    />
  </motion.div>
  );
};

SuccessToast.propTypes = {
  t: PropTypes.object.isRequired,
};

export default SuccessToast;
