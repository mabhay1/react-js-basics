import NewSectionChild from "./NewSectionChild"
import RestaurantCard from "./RestaurantCard"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const NewSection = () => {

    const [listOfItems,setListOfItems] = useState([])
    const [sectionTitle,setSectionTitle] = useState("")


    const [listRes,setListRes] = useState([])
    const [sectionTitle2,setSectionTitle2] = useState("")
    const [listRes2,setListRes2] = useState([])
    const [sectionTitle3,setSectionTitle3] = useState("")

    
    useEffect(()=>{
        fetchItems()
    },[])

    const fetchItems = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6369411&lng=77.2056647&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json()

        console.log(jsonData.data.cards)
        setListOfItems(jsonData.data.cards[0].card.card.gridElements.infoWithStyle.info)
        setSectionTitle(jsonData.data.cards[0].card.card.header.title)

        setListRes(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setSectionTitle2(jsonData.data.cards[1].card.card.header.title)
        setListRes2(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setSectionTitle3(jsonData.data.cards[2].card.card.title)
    }


    return (listOfItems.length === 0)?(
    <Shimmer/>

    ): (
        <div style={{width:"90%",margin:"auto"}}>
         <div>
         <div className="heading" >
            <h1>{sectionTitle}</h1>    
        </div>   
    
        <Carousel responsive={responsive} className="items" >
        {listOfItems.map((Item)=>(
                    <NewSectionChild key={Item.id} itemData={Item} />               
              ))}
        </Carousel>;
             

        </div>
        <div className="heading-buttons" >
            <h1>{sectionTitle2}</h1>  

        </div>
        <Carousel responsive={responsive} className="top-res">                           
              {listRes.map((restaurant)=>(
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                    <RestaurantCard resData={restaurant} />
                </Link>
              ))}
              </Carousel>
            
            <h1>{sectionTitle3}</h1>  
        <div className="res-container">                                       
              {listRes2.map((restaurant)=>(
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                    <RestaurantCard resData={restaurant} />
                </Link>
              ))}
            </div>    
        </div>
        
    )
}

export default NewSection