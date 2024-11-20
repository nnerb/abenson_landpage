import CategoryBar from "./components/header/categorybar/categorybar"
import About from "./components/about"
import Navbar from "./components/header/navbar/navbar"
import TopBar from "./components/header/topbar/topbar"
import HeroBanner from "./components/hero-banner"
import CompanyOverview from "./components/company-overview"


function App() {
  return (
    <div className="w-full h-full overflow-hidden font-poppins-regular max-w-[1300px] mx-auto">
      <div className="fixed top-0 w-full mx-auto max-w-[1300px] z-50 bg-white">
        <TopBar />
        <Navbar />
        <CategoryBar />
      </div>
      <HeroBanner />
      <About/>
      <CompanyOverview />
    </div>
  )
}

export default App
