import FooterInput from "./footer-input";

const Subscribe = () => {
  return ( 
    <div 
      className="
        relative px-[15.5px] mt-[105px] pt-6 z-10 text-white max-w-[440px] mx-auto
        md:pt-[46px] lg:mt-0 
        lg:max-w-none lg:mx-0 lg:pt-0
        lg:px-[5.98px]
      "
    >
      <div className="flex flex-col gap-2 w-full">
        <div 
          className="
            flex flex-col items-center px-2 text-center
            md:px-0
            lg:items-start
          "
        >
          <h1 
            className="
              font-poppins-semibold text-base tracking-[0.15px]
              md:text-xl leading-[33.46px]
            "
          >
            Get Special Offers from Abenson
          </h1>
          <p 
            className="
              text-xs leading-[18px] text-center
              md:text-[14px] md:leading-[21px]
              md:text-nowrap
            "
          >
            Join our subscription and get P100 on your first online order!
          </p>
        </div>
        <FooterInput />
      </div>
    </div>
   );
}
 
export default Subscribe;