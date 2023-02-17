import { Routes, Route, Link } from "react-router-dom"
import { useContext } from "react"
import HomePage from "../pages/Home"
import { ThemeContext } from "../components/ThemeContext"

function Nav() {
    const { theme, handleTheme } = useContext(ThemeContext);
    console.log(theme);
    return (
        <div className="nav">
            <Link to="/" className="logo">
                Where in the world?
            </Link>
            <button className="themeBtn" onClick={handleTheme}>
                {
                    theme === "light" ?
                    <>
                    <i className="fa-regular fa-sun"></i> 
                    Light Mode
                    </>
                    
                    :
                    <>
                    <i className="fa-solid fa-moon"></i>
                    Dark Mode
                    </>
                }
            </button>

        </div>
    )
}

export default Nav