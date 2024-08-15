import './fontAwesome';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import OurService from './Components/OurService'
import ContactUs from './Components/ContactUs'


export default function App() {

  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="OurService" element={<OurService/>}/>
          <Route path="ContactUs" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
