import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { teamsData } from "../data/teams-data";
import SecondaryButton from "../../buttons/secondary-button";

const TeamsGrid = () => {
  return ( 
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
              <SecondaryButton
                className="text-[10px] text-center py-1 px-3 w-full 
                md:py-[6px] slider-semi-lg:px-4 lg:text-[15px] 
                slider-lg:px-7"
              >
                <a href="https://recruitment.dataon.com/abensongroup/#" target="_blank">
                  Check for openings
                </a>
              </SecondaryButton>
              </div>
            </div>
          </div>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
   );
}
 
export default TeamsGrid;