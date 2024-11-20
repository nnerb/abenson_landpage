import heroImage from "../assets/images/hero-image.jpg"

const HeroBanner = () => {
  return ( 
    <section className="md:px-[30px] mt-8 z-0">
      <div className="relative">
        <img 
          src={heroImage} 
          className="w-full object-cover object-center rounded-3xl z-10"
        />      
      </div>
    </section>
   );
}
 
export default HeroBanner;