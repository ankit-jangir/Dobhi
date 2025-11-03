import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./Component/Common/Layout"

const Home = lazy(()=>import('./Component/Page/Homepage'))
const Service = lazy(()=>import('./Component/Page/Servicepage'))
const About = lazy(()=>import('./Component/Page/Aboutpage'))
const Pricing = lazy(()=>import('./Component/Page/Pricingpage'))
const Contact = lazy(()=>import('./Component/Page/Contactpage'))
const Howtowork = lazy(()=>import('./Component/Page/How-to-work-page'))
const Login = lazy(()=>import('./Component/Page/Loginpage'))
const Signup = lazy(()=>import('./Component/Page/Signuppage'))
const Notfound = lazy(()=>import('./Component/Common/Notfound'))


function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Pricing" element={<Pricing/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/How-to-work" element={<Howtowork/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </Suspense>
  )
}

export default App