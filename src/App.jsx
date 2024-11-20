import CategoryBar from "./components/header/categorybar/categorybar"
import About from "./components/about"
import Navbar from "./components/header/navbar/navbar"
import TopBar from "./components/header/topbar/topbar"
import HeroBanner from "./components/hero-banner"


function App() {
  return (
    <div className="w-full h-full overflow-hidden font-poppins-regular max-w-[1300px] mx-auto ">
      <TopBar />
      <Navbar />
      <CategoryBar />
      <HeroBanner />
      <About/>
    </div>
  )
}

export default App
