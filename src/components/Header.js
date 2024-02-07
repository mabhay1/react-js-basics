import {LOGO_URL} from "../utils/constants"
import {useState} from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";;

const Header = () => {
    const [btnName,setBtnName]=useState("login")
    const onlineStatus=useOnlineStatus()
    return (
    <div className="main-HEADER"> 
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnName==="login"?setBtnName("logout"):setBtnName("login")
                        }}>{btnName}</button>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Header