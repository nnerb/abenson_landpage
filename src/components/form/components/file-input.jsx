import PropTypes from "prop-types"

const FileInput = ({ label, register, error, fileName }) => (
  <div className="relative w-full">
    <input
      type="text"
      value={fileName}
      readOnly
      className={`
        px-[14px] py-3 custom-sm:py-[10.5px] rounded-full text-xs custom-sm:text-[14px] 
        custom-sm:leading-[21px] outline-none appearance-none ring-1 leading-[18px] 
        w-full pr-36 peer
        ${error ? "ring-error text-error" : "ring-primary-bg-gray-hover focus:ring-primary-button"}
      `}
    />
    <label
      className={`
        absolute top-0 right-0 text-[13px] custom-sm:text-[13.5px] font-poppins-medium 
        cursor-pointer h-[42px] w-[131px] grid place-items-center text-center 
        leading-[14.82px] rounded-full ring-1
        ${error ? "ring-error text-error" : "ring-primary-button text-primary-button"}
      `}
    >
      Browse Files
      <input
        type="file"
        {...register("resume")}
        className="hidden peer"
      />
    </label>
    <label
      className={`
        absolute top-0 left-0 -translate-y-[7px] translate-x-2 bg-white 
        text-[11px] leading-[14.3px] font-poppins-semibold px-1 transition-colors
        ${error ? "text-error" : "ring-primary-bg-gray-hover peer-focus:text-primary-button"}
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

FileInput.propTypes = {
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.object,             
  fileName: PropTypes.string.isRequired, 
};



export default FileInput