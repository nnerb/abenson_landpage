import mission from "../assets/images/mission.jpg"
import vision from "../assets/images/vision.jpg"
import core from "../assets/images/core.jpg"

const details = [ 
  { 
    title: 'MISSION', 
    description: 'At Abenson, our mission is to create JOY by bringing ‘Good Life’ to every Filipino home.' , 
    image: mission 
  },
  { 
    title: 'VISION',
    description: `
      Happy Customer, 
      Great People, 
      Great Company.
    ` , 
    image: vision 
  },
  { 
    title: 'CORE VALUES', 
    description: `
      Care for Customers,
      Leadership by All, 
      Win-Win-Win!`,
    image: core
  }
]


const CompanyOverview = () => {
  return ( 
    <section className="w-full flex items-center justify-center">
      <ul className="inline-flex gap-2 overflow-auto scrollbar-hide cursor-pointer md:cursor-default" >
        {details.map((detail) => (
          <li
            key={detail.title}
            className="relative h-auto w-[401px] min-h-[188px] min-w-[177px] p-30"
          >
            <div
              className="absolute inset-0 rounded-primary"
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 45.75%, rgba(0, 1, 44, 0.7) 68.25%)`
              }}
            />
            <img
              src={detail.image}
              className="object-cover h-full w-full rounded-primary"
            />
            <h1 className="absolute top-[13px] left-[13px] md:top-[30px] md:left-[30px] text-[14px] lg:text-[28px] text-primary-gray font-poppins-medium">{detail.title}</h1>
            <p 
              className="absolute bottom-[13px] left-[13px] right-[13px] text-primary-text font-poppins-semibold text-xs
              md:bottom-[30px] md:left-[30px] md:right-[30px] lg:text-2xl"
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