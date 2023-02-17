import {
    AiFillHome, AiFillSetting, AiOutlineTeam,
} from "react-icons/ai";
import {
    FaBars,
}from "react-icons/fa"
import {
    GiWhistle,
}from "react-icons/gi"
import {
    MdOutlineSportsVolleyball,
}from "react-icons/md"
import{
    VscGraph
}from "react-icons/vsc"
import {NavLink} from "react-router-dom";
import {ReactNode, useState} from "react";
import Navbar from "./Navbar";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const Sidebar = ({children,...props}:Props)=> {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen (!isOpen);
    }
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <AiFillHome></AiFillHome>
        },
        {
            path: "/teams",
            name: "Teams",
            icon: <AiOutlineTeam></AiOutlineTeam>
        },
        {
            path: "/referees",
            name: "Referees",
            icon: <GiWhistle></GiWhistle>
        },
        {
            path: "/statistics",
            name: "Statistics",
            icon: <VscGraph></VscGraph>
        },
        {
            path: "/matches",
            name: "Matches",
            icon: <MdOutlineSportsVolleyball></MdOutlineSportsVolleyball>
        },
        {
            path: "/settings",
            name: "Settings",
            icon: <AiFillSetting></AiFillSetting>
        },
    ]
    return (
        <div className="container">

            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar" onMouseEnter={toggle} onMouseLeave={toggle}>
                <div className="top_section">
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="ball" id="ball">

                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <div className="mainPage">
                <Navbar></Navbar>
                <main>{children}</main>
            </div>

        </div>
    );
}

export default Sidebar