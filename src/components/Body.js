import RestaurantCard from "./RestaurantCard"
import { useState,useEffect, useContext } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";;
import { withDiscountLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";
const Body = () => {

    const [searchText,setSearchText] = useState("")

    // local state variables - useState hook - when variable updates react rerender component
    const [resTitle,setResTitle]= useState("")
    const [listOfRestaurants,setListOfRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    const RestaurantCardDiscountLabel=withDiscountLabel(RestaurantCard)
    
    // useEffect hook calls callback fuction after component rendered
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6369411&lng=77.2056647&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json()
        // optional chaining
        
        if(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setResTitle(jsonData?.data?.cards[0]?.card?.card?.header?.title)
            setListOfRestaurants(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setResTitle(jsonData?.data?.cards[1]?.card?.card?.header?.title)
            setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setResTitle(jsonData?.data?.cards[2]?.card?.card?.header?.title)
            setListOfRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setResTitle(jsonData?.data?.cards[3]?.card?.card?.header?.title)
            setListOfRestaurants(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setResTitle(jsonData?.data?.cards[4]?.card?.card?.header?.title)
            setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setResTitle(jsonData?.data?.cards[5]?.card?.card?.header?.title)
            setListOfRestaurants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        
        // setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setFilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const onlineStatus=useOnlineStatus()

    const {loggedInUser,setUserName}=useContext(UserContext)

    if (onlineStatus===false){
        return(
        <h1>
            Looks like you are offline!! Please check your Internet Connection
        </h1>)    
    }

    return (listOfRestaurants.length === 0)?(
    <Shimmer/>
    ): (
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-4 p-4">
                    <input type="text" data-testid="searchInput" className="border border-solid border-black p-2" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                        }}/>
                        
                    <button className="px-4 py-2 mx-4 bg-green-100 rounded-lg" onClick={()=>{
                        setFilteredRestaurants(listOfRestaurants.filter(
                            (res)=>(
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            )))
                        }}>Search</button>
                </div>
                <div>
                    <button 
                    className="px-4 py-2 mx-4 bg-green-100 rounded-lg" 
                    onClick={()=>{
                        const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating >= 4.3)
                        setFilteredRestaurants(filteredList)
                    
                    
                    }}> 
                        Top Rated Restaurant
                    </button>
                </div>
                <div>
                    <label>UserName : </label>
                    <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
                </div>

            </div>
            <h1 className=" font-bold text-2xl w-11/12 m-auto">{resTitle}</h1>
            <div className="flex flex-wrap w-11/12 m-auto">                                       
              {filteredRestaurants.map((restaurant)=>(
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                    {restaurant?.info?.aggregatedDiscountInfoV3?<RestaurantCardDiscountLabel resData={restaurant}/>:<RestaurantCard resData={restaurant} />}
                </Link>
              ))}
            </div>
        </div>
    )
}

export default Body