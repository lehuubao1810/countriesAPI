import { Routes, Route, Link } from "react-router-dom"
import HomePage from "../pages/Home"

function Nav() {
    return (
        <div className="nav">
            <Link to="/" className="logo">
                Where in the world?
            </Link>
            <button className="themeBtn">
                <i className="fa-solid fa-moon"></i>
                Dark Mode
                {/* 
                    <i className="fa-regular fa-sun"></i>
                    Light Mode
                */}
            </button>

        </div>
    )
}

export default Nav