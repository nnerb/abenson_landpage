import heroImage from "../../../assets/images/hero-image-enhanced.jpg";
import mobileHeroImage from "../../../assets/images/sm-hero-image-enhanced.png";

const HeroBannerImage = () => {
  return ( 
    <figure>
      <img
        src={mobileHeroImage}
        alt="Small Hero Banner"
        className="w-full max-h-[330px] object-cover rounded-primary custom-md:hidden"
      />
      <img
        src={heroImage}
        alt="Large Hero Banner"
        className="w-full custom-md:block object-cover rounded-primary hidden"
      />  
    </figure>
   );
}
 
export default HeroBannerImage;