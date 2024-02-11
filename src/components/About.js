
import UserContext from "../utils/UserContext"
import { useContext } from "react"
const About=()=>{
    const data=useContext(UserContext)
    return (
        <div>
            <h1>About</h1>
            <h2>This is About Us Page</h2>
            <div className=" border border-solid">
                UserContext using UserContext.Consumer
         <UserContext.Consumer>
                {({loggedInUser})=><h1 className=" text-3xl">{loggedInUser}</h1>}
            </UserContext.Consumer>
            </div>
            <div className=" border border-solid">UserContext using useContext hook <h1 className=" text-3xl">{data.loggedInUser}</h1></div>
        </div>
    )

}

export default About