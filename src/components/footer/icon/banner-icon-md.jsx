import bannerIcon from "../../../assets/images/app-md.png"

const BannerIconMd = () => {
  return ( 
    <img 
      src={bannerIcon} 
      className="
        hidden md:block xl:hidden absolute -top-[89px] 
        left-[31px] w-[188px] h-[243px] 
        lg:left-0 lg:-top-[30px] lg:w-[140px] lg:h-[180px]
      "
    />
   );
}
 
export default BannerIconMd;