import fb from "../assets/images/follow-us/fb.png"
import jobstreet from "../assets/images/follow-us/jobstreet.png"
import linkedin from "../assets/images/follow-us/linkedin.png"

const followUsDetails = [
  { name: 'Facebook', logo: fb, company: 'Abenson Careers' },
  { name: 'Jobstreet', logo: jobstreet, company: 'Abenson Ventures Inc.' },
  { name: 'Linkedin', logo: linkedin, company: 'Abenson' },
]
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
        {followUsDetails.map((detail, index) => (
          <li 
            key={index} 
            className="
            flex gap-[9.77px] flex-1 custom-sm:flex-auto 
            md:items-center lg:gap-4"
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
            <p className="leading-[12.54px] md:leading-[14px]">{detail.company}</p>
          </div>
          </li>
        ))}
      </ul>
    </section>
   );
}
 
export default FollowUs;