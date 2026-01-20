import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Origin from './components/Origin'
import Harvest from './components/Harvest';
import EpikurionPage from './components/Epikurion';
import NavScreen from './components/NavScreen';


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/origin' element={<Origin />} />
          <Route path='/harvest' element={<Harvest />} />
          <Route path='/epikurion' element={<EpikurionPage />} />
          <Route path='/nav' element={<NavScreen />} />


        </Routes>

      </BrowserRouter>



    </>
  )
}

export default App
