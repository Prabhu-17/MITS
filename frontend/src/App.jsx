import { Route, Routes } from "react-router-dom"
import Conditional from "./components/Conditional"
import Parent from "./components/Parent"
import User from "./components/User"
import Form from "./hooks/Form"
import State from "./hooks/State"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import ProductDetails from "./pages/ProductDetails"
import { createContext } from "react"

export const userContext=createContext()
const App = () => {
  const name='xyz'
  return (
    <>
      <Navbar />
      <userContext.Provider value={{name}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:id" element={<ProductDetails />} />
        </Routes>
      </userContext.Provider>
    </>
  )
}
export default App