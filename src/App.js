import { Routes, Route, Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import Country from './pages/Country';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="country/:countryName" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
