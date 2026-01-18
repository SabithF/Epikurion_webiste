import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Origin from './components/Origin'
import Harvest from './components/Harvest';
import EpikurionPage from './components/Epikurion';


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/origin' element={<Origin />} />
          <Route path='/harvest' element={<Harvest />} />
          <Route path='/epikurion' element={<EpikurionPage />} />


        </Routes>

      </BrowserRouter>



    </>
  )
}

export default App
