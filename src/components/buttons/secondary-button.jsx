import PropTypes from "prop-types";

const SecondaryButton = ({ className, onClick, children }) => {
  return (
    <button
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
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}
 
export default SecondaryButton;