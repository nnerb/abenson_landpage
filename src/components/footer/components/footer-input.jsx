const FooterInput = () => {
  return ( 
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Enter your email address"
        className={`
        text-primary-gray
          text-[14px] px-[16px] py-[11.5px] rounded-full text-xs 
          leading-[21px] outline-none appearance-none ring-1 ring-inset
          w-full pr-36 peer ring-primary-bg-gray-hover focus:ring-primary-button
        `}
      />
      {/* subscribe for file input */}
      <button
        alt="subscribe"
        className={`
          absolute top-0 right-0 text-[15px] font-poppins-semibold 
          cursor-pointer h-[44px] w-[131.5px] grid place-items-center text-center 
          leading-[17.1px] rounded-full bg-primary-yellow transition-all
          ring-primary-button text-primary-button hover:bg-yellow-300/80 duration-300
        `}
      >
        Subscribe
      </button>
    </div>
   );
}
 
export default FooterInput;