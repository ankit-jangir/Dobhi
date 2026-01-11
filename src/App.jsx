import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

const Home = lazy(()=>import('./Component/Page/Homepage'))
const Notfound = lazy(()=>import('./Component/Common/Notfound'))


function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </Suspense>
  )
}

export default App