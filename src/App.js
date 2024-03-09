import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

// COMPONENTS
import Banner from "./components/banner"
import Footer from "./components/footer"
import Header from "./components/header"
import Navigation from "./components/navigation"
import Portfolio from "./components/portfolio"
import Profile from "./components/profile"

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Profile />
      <Portfolio />
    </div>
  )
}

export default App
