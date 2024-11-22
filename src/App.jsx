import CategoryBar from "./components/header/categorybar/categorybar"
import About from "./components/about"
import Navbar from "./components/header/navbar/navbar"
import TopBar from "./components/header/topbar/topbar"
import HeroBanner from "./components/hero-banner"
import CompanyOverview from "./components/company-overview"
import JoinUs from "./components/join-us/join-us"
import Teams from "./components/teams/teams"
import JobOpenings from "./components/job-openings/job-openings"


function App() {
  return (
    <div className="w-full h-full overflow-hidden font-poppins-regular max-w-[1440px] mx-auto">
      <div className="fixed top-0 right-0 left-0 w-full mx-auto max-w-[1300px] z-50 bg-white">
        <TopBar />
        <Navbar />
        <CategoryBar />
      </div>
      <div 
        className="flex flex-col gap-4 md:gap-10 px-4 lg:px-[30px] 
        mb-4 md:mb-10 w-full mx-auto max-w-[1300px]"
      >
        <HeroBanner />
        <About/>
        <CompanyOverview />
        <JoinUs />  
        <Teams />
      </div>
      <JobOpenings />
    </div>
  )
}

export default App
