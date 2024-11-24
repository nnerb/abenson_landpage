import Banner from "./components/banner";
import Socials from "./components/socials";
import Subscribe from "./components/subscribe";


const Footer = () => {
  return (
    <footer
      className="
        relative h-[831.8px] bg-no-repeat bg-footer-image flex flex-col gap-6
        bg-sm-position bg-sm-bg-size
        md:bg-md-position md:bg-md-bg-size
        lg:h-[569px] lg:py-[58px] lg:px-[64.02px]
      "
      // style={{
      //   backgroundSize: "203%", 
      //   backgroundPosition: "0.8% 34.6%",
      // }}
    >
      <div 
        className="
          min-w-[280px] w-full lg:w-[455px] lg:max-w-[452px]
          lg:flex lg:flex-col-reverse lg:gap-[34px] 
        "
      >
        <Banner />
        <Subscribe />
      </div>
      <div className="relative z-10 px-4 md:hidden">
        <Socials />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-blue opacity-[93%]"/>
    </footer>
  );
};

export default Footer;
