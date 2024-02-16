import { useContext } from "react"
import { CDN_URL } from "../utils/constants"
import UserContext from "../utils/UserContext"

const RestaurantCard = (props) => {
    const {resData} =props
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData.info
    const {loggedInUser}=useContext(UserContext)


    return (
        <div data-testid="resCard" className="m-4 p-4 w-[300px] rounded-lg bg-gray-100  hover:bg-gray-200" >
            <img className=" rounded-lg h-[170px] w-[280px]" src={(CDN_URL+cloudinaryImageId)}/>
            
            <h3 className=" font-bold text-xl py-4">{name}</h3>
            <h4 className="break-words">{cuisines.toString()}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
            <h4>User:- {loggedInUser}</h4>
            
        </div>
    )
}

// Higher order component

// input - RestaurantCard => RestaurantCardDiscountLabel

export const withDiscountLabel =(RestaurantCard)=>{
    return (props)=>{
        const{resData}=props
        
        
        return (
            <div>
                <label data-testid="discountLabel" className=" absolute text-white mt-[145px] ml-[40px] font-black text-xl">{resData.info.aggregatedDiscountInfoV3.header+" "+ resData.info.aggregatedDiscountInfoV3.subHeader}</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard