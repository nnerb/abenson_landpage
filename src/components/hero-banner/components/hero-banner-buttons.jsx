import PrimaryButton from "../../buttons/primary-button";
import SecondaryButton from "../../buttons/secondary-button";

const HerroBannerButtons = () => {
  return ( 
    <div className="flex items-center justify-center gap-[6px] md:gap-3 lg:gap-4 w-full mt-4">
      <SecondaryButton
        className="
          max-w-[230px] text-[13px] leading-[14.82px] 
          gap-[3px] py-[8.5px] px-[14px] flex items-center shadow-2xl 
          md:text-[15px] md:leading-[22.5px] md:-tracking-[0.3px] md:py-[10.5px] md:px-11
        "
        onClick={() => {}}
      >
        <span className="hidden text-nowrap md:block">Check for</span>
        <span>Openings</span>
      </SecondaryButton>
      <PrimaryButton
        className="
        flex items-center gap-1 text-[13px] leading-[14.82px] 
        md:text-[15px] py-[8.5px] px-[14px]
        md:py-[10.5px] md:px-14 md:leading-[22.5px] md:-tracking-[0.3px]"
        onClick={() => {}}
      >
        <span>Submit</span> 
        <span className="hidden md:block">Resume</span>
      </PrimaryButton>
    </div>
   );
}
 
export default HerroBannerButtons;