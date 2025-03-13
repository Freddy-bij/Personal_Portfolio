import { Outlet } from "react-router"
import Footer from"../Components/Footer.jsx"
import NavBar from"../Components/NavBar.jsx"

const Layout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout