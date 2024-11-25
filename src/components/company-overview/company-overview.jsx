import { details } from "./data/company-overview-details";

const CompanyOverview = () => {
  return ( 
    <section className="relative w-full flex items-center justify-center relatove overflow-hidden">
      <ul className="inline-flex gap-2 overflow-auto scrollbar-hide cursor-pointer md:cursor-default">
      
      {/* -translate-y-[px] -translate-x-4 */}
      
        {details.map((detail, index) => (
          <li
            key={detail.title}
            className="relative h-auto w-[401px] min-h-[188px] min-w-[177px] p-30 "
          >
            {/* The Lightning effect */}
            { 
              index === 0 &&
              <div 
                className="
                absolute z-10 h-[78.86px] w-[84.74px] ring-1  blur-[32.79px]
                -rotate-[29.13deg] -translate-y-[42px] -translate-x-4 bg-white opacity-80
                lg:w-[189px] lg:h-[178px] lg:blur-[72px]
              "
              /> 
            }
            <img
              src={detail.image}
              alt="Image representing the company's mission, vision, and core values."
              className="object-cover h-full w-full rounded-primary"
            />
            <h1 
              className="
                absolute top-[13px] left-[13px]
                text-primary-gray font-poppins-medium
                md:top-[30px] md:left-[30px] text-[14px] md:text-xl 
                lg:text-[28px] z-20"
            >
              {detail.title}
            </h1>
            <p 
              className="
                absolute bottom-[13px] left-[13px] right-[13px] 
                text-primary-text font-poppins-semibold text-xs
                md:bottom-[30px] md:left-[30px] md:right-[30px] md:text-lg 
                lg:text-2xl
              "
              dangerouslySetInnerHTML={{
                __html: detail.title === "MISSION" 
                ? detail.description
                : detail.description.replace(/,/g, ',<br />')
              }}
            />
          </li>
        ))}
      </ul>
    </section>
   );
}
 
export default CompanyOverview;