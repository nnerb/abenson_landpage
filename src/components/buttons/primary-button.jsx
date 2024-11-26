import PropTypes from "prop-types";

const PrimaryButton = ({ className, onClick, children, type }) => {
  return (
    <button
      type={type}
      className={`
        ${className} 
        text-white bg-primary-button
        rounded-full outline-0 font-poppins-semibold
        hover:bg-primary-button-hover duration-300
      `}
      onClick={onClick}
    >
      {children}
    </button>
   );
}

PrimaryButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default PrimaryButton;