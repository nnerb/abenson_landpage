import CategoryBar from "./components/header/categorybar/categorybar"
import About from "./components/about"
import Navbar from "./components/header/navbar/navbar"
import TopBar from "./components/header/topbar/topbar"
import HeroBanner from "./components/hero-banner"
import CompanyOverview from "./components/company-overview"
import JoinUs from "./components/join-us/join-us"
import Teams from "./components/teams/teams"
import JobOpenings from "./components/job-openings/job-openings"
import Form from "./components/form/form"
import FollowUs from "./components/follow-us/follow-us"
import Footer from "./components/footer/footer"


function App() {
  return (
    <div className="w-full h-full overflow-hidden font-poppins-regular max-w-[1440px] mx-auto">
      <div className="fixed top-0 right-0 left-0 w-full mx-auto max-w-[1300px] z-50 bg-white">
        <TopBar />
        <Navbar />
        <CategoryBar />
      </div>
      {/* MAIN CONTENT GOES HEREEEEE */}
      <main>
        <HeroBanner />
        <div 
          className="flex flex-col gap-4 md:gap-10 px-4 lg:px-[30px] 
          mb-4 md:mb-10 w-full mx-auto max-w-[1300px] mt-4 md:mt-10"
        >
          <About/>
          <CompanyOverview />
          <JoinUs />  
          <Teams />
        </div>
        <div className="px-4 custom-md:px-0 w-full">
          <JobOpenings />
        </div>
        <div 
          className="flex flex-col gap-4 md:gap-10 px-4 custom-sm:px-0 mt-10
          mb-4 md:mb-10 w-full mx-auto max-w-[1300px]"
        >
          <Form />
          <FollowUs />
        </div>
        <div className="flex-col flex gap-2">
          <Footer />
          <Footer />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
