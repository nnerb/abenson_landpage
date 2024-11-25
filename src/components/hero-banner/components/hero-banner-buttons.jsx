const HerroBannerButtons = () => {
  return ( 
    <div className="flex items-center justify-center gap-[6px] md:gap-3 lg:gap-4 w-full mt-4">
      <button 
        className="rounded-full border bg-white border-none ring-1 max-w-[230px]
        text-[13px] leading-[14.82px] gap-[3px] text-primary-button py-[8.5px] px-[14px] 
        flex items-center font-poppins-semibold shadow-2xl
        md:text-[15px] md:leading-[22.5px] md:-tracking-[0.3px] md:py-[10.5px] md:px-11"
          
      >
        <span className="hidden text-nowrap md:block">Check for</span>
        <span>Openings</span>
      </button>
      <button 
        className="flex items-center gap-1 font-poppins-semibold 
        rounded-full bg-primary-button ring-1
        border-none text-[13px] leading-[14.82px] 
        md:text-[15px] text-white py-[8.5px] px-[14px]
        md:py-[10.5px] md:px-14 md:leading-[22.5px] md:-tracking-[0.3px]"
      >
        <span>Submit</span> 
        <span className="hidden md:block">Resume</span>
      </button>
    </div>
   );
}
 
export default HerroBannerButtons;