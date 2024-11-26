import PropTypes from "prop-types";

const SecondaryButton = ({ type ,className, onClick, children }) => {
  return (
    <button
      type={type}
      className={`
        ${className} 
        ring-1 ring-inset ring-primary-button text-primary-button bg-white
        rounded-full outline-0 font-poppins-semibold
        hover:bg-secondary-button-hover duration-300
      `}
      onClick={onClick}
    >
      {children}
    </button>
   );
}

SecondaryButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}
 
export default SecondaryButton;