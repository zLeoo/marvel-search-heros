
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import HeroSection from './Components/HeroSection/HeroSection';



function App() {
  return (
    <div className="App">
        
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hero" element={<HeroSection/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
