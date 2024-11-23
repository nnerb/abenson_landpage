import data from "../../assets/images/teams/data.png"
import digitalDevelopment from "../../assets/images/teams/digital-development.png"
import digitalMarketing from "../../assets/images/teams/digital-marketing.png"
import digitalProducts from "../../assets/images/teams/digital-products.png"
import mobile from "../../assets/images/teams/mobile.png"
import shop from "../../assets/images/teams/shop-online-operations.png"
import smile from "../../assets/images/teams/smile-serve.png"
import system from "../../assets/images/teams/systems-development.png"
import uiux from "../../assets/images/teams/ui-ux.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// SVGS
import uiuxSvg from "./svg/uiux.svg"
import digitalDevelopmentSvg from "./svg/digital-development.svg"
import digitalMarketingSvg from "./svg/digital-marketing.svg"
import digitalProductsSvg from "./svg/digital-products.svg"
import mobileSvg from "./svg/mobile.svg"
import shopSvg from "./svg/shop.svg"
import smileSvg from "./svg/smile.svg"
import systemSvg from "./svg/system.svg"
import dataSvg from "./svg/data.svg"


const teamsData = [
  { 
    name: 'UX/UI',
    description: 'Crafting visually stunning, user-friendly designs from wireframes to prototypes, ensuring our website and app dazzle and delight.',
    color: '#5C4DBD',
    card: uiux,
    icon: uiuxSvg,
    iconColor: '#735FF2',
  },
  { 
    name: 'Mobile App & Loyalty',
    description: 'Managing our awesome mobile app and loyalty program to keep you coming back for more!',
    color: '#1798C4',
    card: mobile,
    icon: mobileSvg,
    iconColor: '#19B6EB',
  },
  { 
    name: 'Digital Marketing',
    description: 'Conceptualizing campaigns, creating content, shooting fun videos, and optimizing paid media across Facebook, Instagram, TikTok, and more!',
    color: '#D01665',
    card: digitalMarketing,
    icon: digitalMarketingSvg,
    iconColor: '#FF177A',
  },
  { 
    name: 'Digital Development',
    description: 'Mastering cutting-edge software, eCommerce innovation, and AWS cloud for stellar online experiences.',
    color: '#0457B1',
    card: digitalDevelopment,
    icon: digitalDevelopmentSvg,
    iconColor: '#006DE2',
  },
  { 
    name: 'Smile Serve (Logistics)',
    description: 'Delivering smiles with timely deliveries and top-notch service, making every delivery a happy moment.',
    color: '#D29605',
    card: smile,
    icon: smileSvg,
    iconColor: '#FFB400',
  },
  { 
    name: 'Systems Development',
    description: 'Innovating and automating omnichannel projects for seamless and efficient solutions.',
    color: '#5AAE41',
    card: system,
    icon: systemSvg,
    iconColor: '#5DCA3D',
  },
  { 
    name: 'Shop Online Operations',
    description: 'Managing order fulfillment, handling inquiries, and converting sales through our dedicated online Personal Shoppers.',
    color: '#D4C008',
    card: shop,
    icon: shopSvg,
    iconColor: '#FAE100',
  },
  { 
    name: 'Digital Products',
    description: 'Ensuring accurate products, pricing, and promos, while expanding categories and brands to help customers decide.',
    color: '#46992E',
    card: digitalProducts,
    icon: digitalProductsSvg,
    iconColor: '#5DCA3D',
  },
  { 
    name: 'Data',
    description: 'Turning data into insights and decisions, making sense of numbers for smarter choices.',
    color: '#6452D2',
    card: data,
    icon: dataSvg,
    iconColor: '#735FF2',
  },
]

const Teams = () => {
  return ( 
    <section className="w-full flex flex-col items-center gap-4 lg:gap-5">
      <h1 className="text-lg font-poppins-semibold md:text-[28px] text-primary-gray">
        Meet our teams
      </h1>
      <div className="w-full relative flex">
        <Swiper
          navigation={true}
          slidesPerView="auto"
          spaceBetween={10} 
          modules={[Pagination, Navigation]}
          className="mySwiper !static"
          breakpoints={{
            715: {
              slidesPerView: 4
            },
            1024: {
              spaceBetween: 20
            }
          }}
          
        >
          {teamsData.map((team) => (  
            <div key={team.card}>
              <SwiperSlide 
                key={team.card} 
                className="max-w-[161px] max-h-[226.52px]
                slider-md:min-w-[161px] slider-md:min-h-[226.52px]
                slider-md:max-w-[302px] slider-md:max-h-[423px]"
              >
              <div className="relative group">
                <img
                  src={team.card}
                  alt={team.name}
                  className="object-cover min-w-[161px] slider-md:min-h-[226.52px]"
                /> 
                {/* <div 
                  style={{ background: team.iconColor }} 
                  className="flex flex-col items-center justify-center gap-"
                >
                  <img src={team.icon}/>
                  <p 
                    className="font-poppins-bold text-[12.83px] leading-[19.24px] text-center text-white
                    lgtext-2xl leading slider-semi-lg:text-lg lg:text-2xl"
                  >
                    {team.name}
                  </p>
                </div> */}
                {/* Content */}
                <div 
                  className=" absolute inset-0 h-full flex items-center justify-center 
                  text-white rounded-xl lg:rounded-primary opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300 "
                  style={{ background: team.color }}
                >
                  <div 
                    className="p-3 h-full flex flex-col justify-center items-center gap-2 
                    slider-semi-lg:gap-5 lg:px-6 
                    slider-lg:gap-[25px] slider-lg:px-[30px]"
                  >
                    <h1 className="text-[12.83px] font-poppins-bold text-center slider-semi-lg:text-lg lg:text-2xl">
                      {team.name}
                    </h1>
                    <p className="text-center text-xs slider-semi-lg:text-sm slider-lg:text-lg">
                      {team.description}
                    </p>
                    <a 
                      className="text-primary-b-blue text-[10px] text-center cursor-pointer
                      font-poppins-semibold bg-white py-1 px-3 rounded-[28px] w-full 
                      md:py-[6px] slider-semi-lg:px-4 lg:text-[15px] slider-lg:px-7"
                      href="https://recruitment.dataon.com/abensongroup/#" target="_blank"
                    >
                      Check for openings
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        {/* <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-[60] bg-gray-800 text-white p-2 rounded-full">
          &lt;
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-[60] bg-gray-800 text-white p-2 rounded-full">
          &gt;
        </div>    */}
      </div>
    </section>
   );
}
 
export default Teams;