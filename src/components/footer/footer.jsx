import Banner from "./components/banner";
import Socials from "./components/socials";
import Subscribe from "./components/subscribe";


const Footer = () => {
  return (
    <footer
      className="
        relative h-[831.8px] bg-no-repeat bg-cover bg-footer-image
        md:bg-md-position flex flex-col gap-6
        lg:h-[569px] 
      "
      style={{
        backgroundSize: "890%", 
        backgroundPosition: "1% 36%",
      }}
    >
      <div className="min-w-[280px]">
        <Banner />
        <Subscribe />
      </div>
      <div className="relative z-10 px-4">
        <Socials />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-blue opacity-[93%]"/>
    </footer>
  );
};

export default Footer;
