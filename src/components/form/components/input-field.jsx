import PropTypes from "prop-types"

const InputField = ({ label, name, type, register, error, placeholder }) => (
  <div className="relative">
    <label
      htmlFor={name}
      className={`
        absolute top-0 left-0 -translate-y-[7px] translate-x-2 bg-white 
        text-[11px] leading-[14.3px] font-poppins-semibold px-1 transition-colors
        ${error ? "text-error" : "peer-focus:text-primary-button"}
      `}
    >
      {label}
    </label>
    {/* Input field */}
    <input
      type={type}
      {...register(name)}
      placeholder={placeholder}
      className={`
        px-[14px] py-[13px] custom-sm:py-[11.5px] rounded-[28px] text-xs 
        outline-none appearance-none ring-1 peer w-full leading-[18px] 
        custom-sm:text-[14px] custom-sm:leading-[21px]
        ${error ? "ring-error text-error" : "ring-primary-bg-gray-hover focus:ring-primary-button"}
      `}
    />
    {/* Error message */}
    {error && (
      <p className="text-error text-[11px] leading-[12.54px] px-[14px] mt-[2px]">
        {error.message}
      </p>
    )}
  </div>
);
// Types for type-checking
InputField.propTypes = {
  label: PropTypes.string.isRequired,  
  name: PropTypes.string.isRequired,   
  type: PropTypes.string,              
  register: PropTypes.func.isRequired, 
  error: PropTypes.object, 
  placeholder: PropTypes.string.isRequired
};

export default InputField;