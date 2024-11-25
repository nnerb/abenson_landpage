import AppStoreIcon from "../icon/app-store";
import GooglePlayIcon from "../icon/google-play";
import qr from "../../../assets/images/qr.png"
import BannerIcon from "../icon/banner-icon";
import BannerIconSm from "../icon/banner-icon-sm";
import BannerIconMd from "../icon/banner-icon-md";

const Banner = () => {
  return ( 
    <div 
      className="
        absolute top-0 h-[360px] md:h-[148px] w-full z-10
        lg:static
      "
    >
    <div className="flex flex-col">
      <div className="absolute top-0 md:top-[-32px] w-full lg:static">
        <div 
          className="
            bg-primary-app w-full h-[94px] flex items-end pb-[4.91px] 
            custom-sm:pb-[15px]
            md:h-[116px]
            lg:bg-none lg:relative lg:h-[288px] lg:items-center
            lg:pb-0
          "
        >
          {/* Banner image */}         
            <BannerIconSm />
            <BannerIconMd />
            <BannerIcon />
          {/* Banner description */}
          <div 
            className="
              flex flex-col gap-[5px] ml-[144px] 
              flex-1 items-center pr-4
              custom-semi-md:ml-[200px] 
              lg:gap-[25px] lg:ml-0
              lg:items-start lg:pr-0
              lg:absolute lg:w-[201px] lg:right-0
              lg:bottom-[36px]
            "
          >
            <h1 
              className="
              text-[18px] font-poppins-semibold text-center leading-[20.52px] text-white
              md:text-[22px] md:leading-[25.08px]
              lg:text-[20px] lg:leading-[22.8px] lg:text-start
            "
            >
              For easier shopping download our app!
            </h1>
            <div className="inline-flex gap-[6.33px]">
              <GooglePlayIcon/>
              <AppStoreIcon />
            </div>
            <img src={qr} className="h-[62px] w-[62px] hidden lg:block"/>
          </div>
        </div>
        <div className="bg-[#FFE961] h-[11px] w-full md:h-8 lg:hidden" />
      </div>
    </div>
  </div>
   );
}
 
export default Banner;