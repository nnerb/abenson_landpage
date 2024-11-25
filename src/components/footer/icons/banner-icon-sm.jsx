import bannerIcon from "../../../assets/images/app-sm.png"

const BannerIconSm = () => {
  return ( 
    <img src={bannerIcon} className="md:hidden absolute -top-[50px] left-[15px] w-[242px] h-[161px]"/>
   );
}
 
export default BannerIconSm;