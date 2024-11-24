import FooterInput from "./footer-input";

const Subscribe = () => {
  return ( 
    <div className="relative px-[15.5px] mt-[105px] pt-6 z-10 text-white">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center px-2 text-center">
          <h1 className="font-poppins-semibold text-base tracking-[0.15px]">
            Get Special Offers from Abenson
          </h1>
          <p className="text-xs leading-[18px]">
            Join our subscription and get P100 on your first online order
          </p>
        </div>
        <FooterInput />
      </div>
    </div>
   );
}
 
export default Subscribe;