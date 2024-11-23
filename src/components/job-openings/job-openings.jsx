import { useState, useEffect } from "react";
import DesktopVector from "./svg/desktop-vector";
import MobileVector from "./svg/mobile-vector";

const JobOpenings = () => {
  const jobOpeningsData = [
    { title: 'CORPORATE SALES SPECIALIST', location: 'Quezon City', setup: 'Onsite' },
    { title: 'IT PROJECT/SYSTEMS MANAGER', location: 'Quezon City', setup: 'Hybrid' },
    { title: 'STORE SUPERVISOR', location: 'Bacolod', setup: 'Onsite' },
    { title: 'STORE SUPERVISOR', location: 'Cebu', setup: 'Onsite' },
    { title: 'STORE SUPERVISOR', location: 'Iloilo', setup: 'Onsite' },
    { title: 'STORE SUPERVISOR', location: 'Laguna', setup: 'Onsite' },
    { title: 'JUNIOR FRONT-END WEB DEVELOPER', location: 'Quezon City', setup: 'Hybrid' },
  ];

  const [showAll, setShowAll] = useState(false)
  const [visibleItems, setVisibleItems] = useState(3)
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth)

  

  // Update the visible items count when the screen is resized
  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth)
    }

    const updateVisibleItems = () => {

      if (currentWidth >= 1024) {
        setVisibleItems(6)
      } else if (currentWidth >= 641) {
        setVisibleItems(4)
      } else {
        setVisibleItems(3)
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", updateVisibleItems)
      window.removeEventListener("resize", handleResize)
    };
  }, [currentWidth]);


  const toggleShowAll = () => setShowAll(prev => !prev);
  const itemsToShow = showAll ? jobOpeningsData.length : visibleItems;

  return (
    <section 
      className="relative w-full bg-secondary-blue 
      text-primary-gray z-10 overflow-hidden rounded-[10px]"
    >
      <MobileVector />
      {currentWidth >= 360 ? <DesktopVector/> : <MobileVector/>}
      <div 
        className="py-6 px-4 lg:px-[30px] lg:py-[50px] rounded-secondary 
         lg:gap-10 flex flex-col !z-100 items-center justify-center w-full gap-6 z-20"
      >
        <h1 className="text-lg font-poppins-semibold custom-md:text-[28px] md:leading-[36px]">
          Featured Job Openings
        </h1>

        {/* Grid with responsive columns */}
        <div 
          className={`grid gap-3 lg:gap-5 max-w-[1240px] w-full
            grid-rows-${jobOpeningsData.length} custom-md:grid-rows-2
            grid-cols-1 custom-md:grid-cols-2 lg:grid-cols-3
            lg:rounded-primary px-8 lg:px-0 duration-300 transition-all
            ${visibleItems >= 3 && showAll ? "h-auto" : `h-[182px] overflow-hidden 
            custom-md:overflow-visible custom-md:h-auto`}
          `}
        >
          {/* Individual Job Cards */}
          {jobOpeningsData.slice(0, itemsToShow).map((job, index) => (
            <div 
              key={index} 
              className="bg-white flex flex-col rounded-lg 
              lg:rounded-primary p-3 min-w-[232px] lg:p-5 shadow-combined cursor-pointer"
            >
              <h1 
                className="font-poppins-semibold text-[11.62px] 
                lg:text-xl text-primary-blue leading-[13.94px] lg:leading-6 lg:tracking-[0.15px]"
              >
                {job.title}
              </h1>
              <p className="text-[9.29px] leading-[13.94px] font-normal lg:text-base lg:leading-6">
                {job.location}
              </p>
              <p className="text-[9.29px] leading-[13.94px] font-normal lg:text-base lg:leading-6">
                {job.setup}
              </p>
            </div>
          ))}
        </div>

        {/* Show See More/See Less button only if there are more items to show */}
        {jobOpeningsData.length > visibleItems && (
          <button
            onClick={toggleShowAll}
            className="bg-white py-[8.5px] max-w-[131px] rounded-full w-full 
            text-primary-b-blue font-poppins-medium custom-md:font-poppins-semibold text-[13px] 
            leading-[14.82px] outline-none ring-1 ring-primary-b-blue
            custom-md:py-[10.5px] custom-md:text-[15px] custom-md:max-w-[275px] 
            custom-md:leading-[22.5px] custom-md:tracking-[-0.3px]"
          >
            {showAll ? 'See Less' : 'See All'}
          </button>
        )}
      </div>
    </section>
  );
};

export default JobOpenings;
