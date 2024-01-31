import RestaurantCard from "./RestaurantCard"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"


const Body = () => {

    const [searchText,setSearchText] = useState("")

    // local state variables - useState hook - when variable updates react rerender component
    const [listOfRestaurants,setListOfRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    
    // useEffect hook calls callback fuction after component rendered
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6369411&lng=77.2056647&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json()
        // console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle)
        // optional chaining
        console.log(jsonData)
        if(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setListOfRestaurants(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setListOfRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setListOfRestaurants(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        else if(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants){
            setListOfRestaurants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        
        // setListOfRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setFilteredRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return (listOfRestaurants.length === 0)?(
    <Shimmer/>
    ): (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                        }}/>
                    <button onClick={()=>{
                        console.log(searchText)
                        setFilteredRestaurants(listOfRestaurants.filter(
                            (res)=>(
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            )))
                        }}>Search</button>
                </div>
                <button 
                className="filter-btn" 
                onClick={()=>{
                    const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating >= 4.3)
                    setFilteredRestaurants(filteredList)
                    
                    
                    }}> 
                        Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
              {filteredRestaurants.map((restaurant)=><RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    )
}

export default Body