const HeroBannerHeader = () => {
  return ( 
    <header className="flex flex-col custom-md:gap-3 md:gap-4">
      <h1 className="
        text-center leading-9 font-poppins-semibold 
        text-[clamp(24px,4vw,50px)]
        lg:leading-[75px]
        -tracking-[0.3px]
        "
      >
        Awesome at Abenson
      </h1>
      <p 
        className="
          text-center text-[clamp(11px,2vw,16px)] leading-[12.54px] 
          md:leading-[24px] 
          md:text-sm 
          lg:text-base
        "
      >
        We’re here to make people happy through technology. 
        Be a part of a high performance team and grow your career with us.
      </p>
    </header>
   );
}
 
export default HeroBannerHeader;