import {LOGO_URL} from "../utils/constants"
import {useState,useContext} from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"


const Header = () => {
    const [btnName,setBtnName]=useState("login")
    const onlineStatus=useOnlineStatus()
    const {loggedInUser}=useContext(UserContext)
    const cartItems=useSelector((store)=>store.cart.items)
    const countEachCartItem=useSelector((store)=>store.cart.countEachItem)
    let totalItems=0
    for(key in countEachCartItem){
        totalItems+=countEachCartItem[key]
    }
    return (
    <div className="main-HEADER"> 
        <div className="flex justify-between bg-green-50 shadow-lg items-center sm:bg-pink-50">
            <div className="logo-container">
                <img className="w-36" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex m-4 p-4 gap-4 items-center">
                    <li>
                        Online Status {onlineStatus?"🟢":"🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li className="font-bold"><Link to="/cart">Cart - {totalItems} items</Link></li>
                    <button className=" shadow-lg p-3 rounded-lg bg-green-50" onClick={()=>{
                        btnName==="login"?setBtnName("logout"):setBtnName("login")
                        }}>{btnName}</button>
                    <li className=" font-bold">{loggedInUser}</li>    
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Header