import bannerIcon from "../../../assets/images/app-md.png"

const BannerIconMd = () => {
  return ( 
    <img 
      src={bannerIcon} 
      className="hidden md:block lg:hidden absolute -top-[89px] left-[31px] w-[188px] h-[243px]"
    />
   );
}
 
export default BannerIconMd;