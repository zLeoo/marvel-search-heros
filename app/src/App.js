
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import HeroSection from './Components/HeroSection/HeroSection';
import { UserStorage } from './UserContext';



function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/hero" element={<HeroSection/>} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
