import About from './About'
import './App.css'
import Home from './Home'
import Footer from './component/Footer'
import NavBar from './component/NavBar'
import { Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/*' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
