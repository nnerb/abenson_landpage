import PropTypes from "prop-types";

const PrimaryButton = ({ label, className, onClick, children }) => {
  return (
    <button
      className={`
        ${className} 
        text-white bg-primary-button
        rounded-full outline-0 font-poppins-semibold
        hover:bg-primary-button-hover duration-300
      `}
      onClick={onClick}
    >
      {children || label}
    </button>
   );
}

PrimaryButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default PrimaryButton;