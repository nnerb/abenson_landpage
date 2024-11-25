import { followUsDetails } from "../data/follow-us-data";


const FollowUsGrid = () => {
  return ( 
    <>
     {followUsDetails.map((detail, index) => (
          <li key={index} className="flex-1 custom-sm:flex-auto">
            <a 
              href={detail.url} 
              target="_blank"
              className="
                flex gap-[9.77px]  
                md:items-center lg:gap-4
              "
            >
              <img 
                src={detail.logo} 
                className="
                h-[26.88px] w-[26.88px]
                md:h-8 md:w-8
                lg:h-11 lg:w-11
                "
                alt="logo"
              />
              <div className="flex flex-col gap-0 lg:gap-2 text-[11px] md:text-[14px]">
                <p className="leading-[12.54px] md:leading-[14px]">{detail.name}</p> 
                <p className="leading-[12.54px] md:leading-[14px]">{detail.page}</p>
              </div>
            </a>
          </li>
        ))}
    </>
   );
}
 
export default FollowUsGrid;