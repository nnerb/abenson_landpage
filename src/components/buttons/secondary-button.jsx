import PropTypes from "prop-types";

const SecondaryButton = ({ label, className, onClick, children }) => {
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
      {children || label}
    </button>
   );
}

SecondaryButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}
 
export default SecondaryButton;