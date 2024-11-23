import PropTypes from "prop-types"

const InputField = ({ label, name, type, register, error }) => (
  <div className="relative">
    <input
      type={type}
      {...register(name)}
      className={`
        px-[14px] py-[13px] custom-sm:py-[11.5px] rounded-[28px] text-xs 
        outline-none appearance-none ring-1 peer w-full leading-[18px] 
        custom-sm:text-[14px] custom-sm:leading-[21px]
        ${error ? "ring-error text-error" : "ring-primary-bg-gray-hover focus:ring-primary-button"}
      `}
    />
    <label
      className={`
        absolute top-0 left-0 -translate-y-[7px] translate-x-2 bg-white 
        text-[11px] leading-[14.3px] font-poppins-semibold px-1 transition-colors
        ${error ? "text-error" : "peer-focus:text-primary-button"}
      `}
    >
      {label}
    </label>
    {error && (
      <p className="text-error text-[11px] leading-[12.54px] px-[14px] mt-[2px]">
        {error.message}
      </p>
    )}
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,  // Label for the input field (e.g., "Name")
  name: PropTypes.string.isRequired,   // The name for the field
  type: PropTypes.string,              // Optional type for input (default to "text")
  register: PropTypes.func.isRequired, // The register function from react-hook-form
  error: PropTypes.object,             // Error object for validation messages
  className: PropTypes.string,         // Additional custom className for styling
};
export default InputField;