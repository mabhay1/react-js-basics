import { CDN_URL } from "../utils/constants"
const NewSectionChild = (props) => {
    const {itemData} =props

    return (
        <div style={{margin:"10px", width:"200px"}}>
            <img src={(CDN_URL+itemData.imageId)} width="100%"/>
        </div>
    )
}

export default NewSectionChild