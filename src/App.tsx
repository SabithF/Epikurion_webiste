import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Origin from './components/Origin'


function App() {
 

  return (
    <>

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          <Route path='/origin' element={<Origin />} />
          </Routes>
    
      </BrowserRouter>


      
    </>
  )
}

export default App
