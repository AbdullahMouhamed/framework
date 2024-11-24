import { useState } from "react"

import { Link, NavLink } from "react-router-dom"


export default function Nav() {
    const [menueOpen, setMenuOpen] = useState(false)

    return (
        <>

            <div className="navbar  p-8  text-white bg-[#2c3e50] fixed w-[100%] z-50">
                <div className="container px-5 flex justify-between items-center mx-auto">
                    <div className=" navContent flex xl:items-center w-[100%] justify-between gap-5  ">
                        <h1 className=" text-[35px] font-bold"><Link to="/">START FRAMEWORK</Link></h1>
                        <ul className={menueOpen ? "open" : ""}>
                            <li ><NavLink

                                className={({ isActive }) => {
                                    return ` p-3 ${isActive ? "bg-[#1abc9c] text-white p-3 rounded-lg" : ""}`

                                }}
                                to="/aboutpage" >ABOUT</NavLink></li>
                            <li><NavLink
                                className={({ isActive }) => {
                                    return ` p-3  ${isActive ? "bg-[#1abc9c] text-white p-3 rounded-lg" : ""}`

                                }}
                                to="/portfolio">PORTFOLIO</NavLink></li>
                            <li><NavLink
                                className={({ isActive }) => {
                                    return ` p-3 transition-all duration-500 ease-in-out  ${isActive ? "bg-[#1abc9c] text-white p-3 rounded-lg" : ""}`

                                }}

                                to="/form">CONTACT</NavLink></li>
                        </ul>
                    </div>
                    <i className="menu fa-solid fa-bars text-[30px] pt-3 " onClick={() =>
                        setMenuOpen(!menueOpen)
                    }></i>
                </div>

            </div>
        </>
    )
}
