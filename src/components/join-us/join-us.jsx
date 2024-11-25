import { joinUsDetails } from "./data/join-us-details";

const JoinUs = () => {
  return ( 
    <section className="text-primary-gray flex flex-col items-center gap-4 lg:gap-7 py-4 lg:py-10">
      <h1 className="text-lg font-poppins-semibold md:text-[28px]">Why join us?</h1>
      <ul className='flex gap-4 lg:gap-10 py-2 items-start w-full overflow-x-scroll scrollbar-hide cursor-pointer justify-between'>
        {joinUsDetails.map((detail) => (
          <li
            key={detail.title}
            className='flex flex-col items-center justify-center gap-2 p-2
            lg:gap-4 min-w-[140px] max-w-[216px] rounded-primary hover:shadow-md'
          >
            {<detail.icon/>}
            <h1 className='text-center font-poppins-semibold text-sm lg:text-xl'>{detail.title}</h1>
            <p className='text-xs text-center lg:text-base'>{detail.description}</p>
          </li>
        ))}
      </ul>
    </section>
   );
}
 
export default JoinUs;