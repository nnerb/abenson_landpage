import appImage from "../../assets/images/app.png"

const Footer = () => {
  return (
    <footer
      className="relative h-[831.8px] lg:h-[569px] md:bg-md-position bg-no-repeat bg-cover bg-footer-image"
      style={{
        backgroundSize: "890%", // Zoom into the image (300% of original size)
        backgroundPosition: "1% 36%", // Adjust the position to focus on the desired part
      }}
    >
      <div className="absolute top-0 h-[360px] w-full">
        <div className="relative z-10 flex flex-col">
          <img src={appImage} className="absolute -left-3 -top-[46px] z-50 h-auto" />
          <div className="">
            <div className="bg-primary-app w-full h-[94px]">
            </div>
            <div className="bg-[#FFE961] h-[11px] w-full" />
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-blue opacity-[93%]"/>
    </footer>
  );
};

export default Footer;
