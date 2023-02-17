import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { useRef } from "react";
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import Country from './pages/Country';

import { ThemeContext } from "./components/ThemeContext";


function App() {

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="App"  >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="country/:countryName" element={<Country />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
