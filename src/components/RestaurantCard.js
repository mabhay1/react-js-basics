import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} =props
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData.info

    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img  className="res-logo" alt="KFC-Logo" src={(CDN_URL+cloudinaryImageId)}/>
            <h3>{name}</h3>
            <h4>{cuisines.toString()}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard