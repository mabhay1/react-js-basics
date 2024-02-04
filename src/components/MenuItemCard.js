import { CDN_URL } from "../utils/constants";
import nonVegIcon from "../images/nonVegIcon.png"
import vegIcon from "../images/vegIcon.png"
const MenuItemCard=(props)=>{
    const {itemData}=props
    let VegNonVegImage=""
    if(itemData.card.info.itemAttribute.vegClassifier==="NONVEG"){
        VegNonVegImage=nonVegIcon
    }
    else{
        VegNonVegImage=vegIcon
    }
    return(
    <div className="itemInfo">
        <div className="itemDetails">
            <img src={VegNonVegImage}></img>
            <div>{itemData.card.info.itemAttribute.vegClassifier}</div>
            <div>{itemData.card.info.name}</div>
            <div style={{display:"flex", gap:"2px"}}>
                <div className="rupeeIcon"><i className="fa fa-rupee"></i></div>
                <div className="itemPrice">{(itemData.card.info.price||itemData.card.info.defaultPrice)/100}</div>
            </div>
        </div>
        <div className="itemImage">
            <img src={CDN_URL+itemData.card.info.imageId} width="100%"></img>
        </div>
    
</div>
    )
}
export default MenuItemCard