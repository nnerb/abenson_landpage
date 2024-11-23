import heroImage from "../assets/images/hero-image.jpg";

const HeroBanner = () => {
  return (
    <section className="mt-6 lg:mt-[140px] z-0">
      <div className="relative">

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10">
          <div
            className="absolute inset-0 rounded-primary"
            style={{
              background: `
                linear-gradient(180deg, rgba(0, 0, 0, 0) 26.69%, rgba(0, 0, 0, 0.3) 58.99%),
                linear-gradient(180deg, rgba(0, 0, 0, 0) 48.44%, rgba(30, 34, 170, 0.5) 100%),
                linear-gradient(180deg, rgba(30, 34, 170, 0) 0%, rgba(30, 34, 170, 0.2) 100%)
              `
            }}
          />
        </div>
          {/* Image */}
          <img
            src={heroImage}
            alt="Hero Banner"
            className="w-full max-h-[517px] min-h-[286px] object-cover 
            object-[50%_35%] rounded-primary"
          />
        <div 
          className="absolute bottom-0 flex flex-col items-center justify-center w-full mx-auto
          text-white right-0 left-0 px-9 gap-2 md:gap-4 lg:gap-8
          max-w-[632px] mb-[21px] md:mb-6 lg:mb-8 z-20"
        >
          <h1 className="text-center text-2xl font-poppins-semibold md:text-4xl lg:text-[50px]">
            Awesome at Abenson
          </h1>
          <p className="text-center text-[11px] md:text-sm lg:text-base">
            We’re here to make people happy through technology. 
            Be a part of a high performance team and grow your career with us.
            </p>
          <div className="flex items-center justify-center gap-[6px] lg:gap-4 w-full">
            <button 
              className="rounded-full border bg-white border-none ring-1 
              text-[13px] md:text-[15px] text-primary-button py-[8.5px] px-[14px] 
              md:py-[10.5px] md:px-11 flex items-center gap-1 font-poppins-semibold shadow-2xl"
            >
              <span className="hidden md:block">Check for </span>
              <span>Openings</span>
            </button>
            <button 
              className="rounded-full border bg-primary-button ring-1
              border-none text-[13px] md:text-[15px] text-white py-[8.5px] px-[14px]
              md:py-[10.5px] md:px-14 flex items-center gap-1 font-poppins-semibold"
            >
              <span>Submit</span> 
              <span className="hidden md:block">Resume</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
