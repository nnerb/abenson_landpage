import Navbar from "./components/navbar/navbar"
import TopBar from "./components/topbar/topbar"

function App() {
  return (
    <div className="w-full overflow-hidden font-poppins-regular max-w-[1440px] mx-auto">
      <TopBar />
      <Navbar />
    </div>
  )
}

export default App
