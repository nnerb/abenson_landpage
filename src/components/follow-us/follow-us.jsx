import FollowUsGrid from "./components/follow-us-grid";


const FollowUs = () => {
  return ( 
    <section 
      className="flex flex-col items-center gap-[12.22px] md:gap-5 
      max-w-[599px] min-w-[328px] mx-auto text-primary-gray md:py-8 lg:py-10"
    >
      <h1 className="text-lg custom-sm:text-[28px] custom-sm:leading-9 
        font-poppins-semibold vertical-trim custom-sm:no-vertical-trim">
        Follow Us
      </h1>
      <ul className="flex items-start gap-[24.44px] md:gap-10 md:items-center">
       <FollowUsGrid />
      </ul>
    </section>
   );
}
 
export default FollowUs;