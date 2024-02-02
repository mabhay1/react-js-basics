import NewSectionChild from "./NewSectionChild"
import RestaurantCard from "./RestaurantCard"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const NewSection = () => {

    const [listOfItems,setListOfItems] = useState([])
    const [sectionTitle,setSectionTitle] = useState("")
    const [prev,setPrev] = useState(0)
    const [next,setNext] = useState(6)
    const [prev1,setPrev1] = useState(0)
    const [next1,setNext1] = useState(4)


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
         <div className="heading-buttons" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <h1>{sectionTitle}</h1>    
            <div className="next-prev-buttons">
         
            <button className="btn-prev" onClick={
                ()=>{
                        console.log("prev called")
                        if((prev+1)>1)
                        {
                            setPrev(prev-1)
                            setNext(next-1)
                        }
                    }
            }>
                {"prev"}
            </button>
            <button className="btn-next" onClick={()=>{
            console.log("next called")
            if((next+1)<=listOfItems.length){
            setNext(next+1)
            setPrev(prev+1)
            }
            }}>{"next"}</button>
            </div> 
        </div>   
    

             
            <div style={{
                display:"flex",
        }}>                                   
              {listOfItems.slice(prev,next).map((Item)=>(
                    <NewSectionChild key={Item.id} itemData={Item} />               
              ))}

            </div>
        </div>
        <div className="heading-buttons" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <h1>{sectionTitle2}</h1>  
            <div className="next-prev-buttons">
         
         <button className="btn-prev" onClick={
             ()=>{
                     console.log("prev1 called")
                     if((prev1+1)>1)
                     {
                         setPrev1(prev1-1)
                         setNext1(next1-1)
                     }
                 }
         }>
             {"prev1"}
         </button>
         <button className="btn-next" onClick={()=>{
         console.log("next1 called")
         if((next1+1)<=listRes.length){
         setNext1(next1+1)
         setPrev1(prev1+1)
         }
         }}>{"next1"}</button>
         </div> 
        </div>
        
        <div style={{display:"flex",gap:"20px"}}>                                       
              {listRes.slice(prev1,next1).map((restaurant)=>(
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                    <RestaurantCard resData={restaurant} />
                </Link>
              ))}
            </div>
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