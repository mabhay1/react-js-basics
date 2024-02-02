import {useState} from "react"
const About=()=>{
    const [count,setCount]=useState(0)
    return (
        <div>
            <h1>About</h1>
            <h2>This is About Us Page</h2>
            <button onClick={()=>{setCount(count+1)}}>{count}</button>
        </div>
    )

}

export default About