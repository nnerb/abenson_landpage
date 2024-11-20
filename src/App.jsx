import CategoryBar from "./components/header/categorybar/categorybar"
import Navbar from "./components/header/navbar/navbar"
import TopBar from "./components/header/topbar/topbar"


function App() {
  return (
    <div className="w-full h-full overflow-hidden font-poppins-regular max-w-[1440px] mx-auto ">
      <TopBar />
      <Navbar />
      <CategoryBar />
    </div>
  )
}

export default App
