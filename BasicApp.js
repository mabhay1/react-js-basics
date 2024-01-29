import React, { Component } from "react"
import ReactDOM  from "react-dom/client"

// React.createElement => Object => HTMLElement(render)
// const heading= React.createElement("h1",{id:"heading"},"React Basics")

// JSX(transpile before it reaches js engine) - parcel babel
// JSX=> React.createElement => Object => HTMLElement(render)
// React Element
const heading=(
    <h1 className="head" tabIndex="1">
    heading with react element
    {7}
    </h1>
    )

const Title=() =>(
    <h1 className="head" tabIndex="1">
    heading with jsx
    </h1>
    )    

    
// React Functional Component 

// const HeadingComponent=()=>{
//     return <h1 className="heading">Namaste React Functional Component</h1>
// }
a=[1,2,3]
a.map((value)=><Title/>)
const num=100;
const HeadingComponent=()=>(
    <div id="container">
        {/* {heading}
        {100+7}
        <h1>{num}</h1> */}
        
        <Title/>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>   
)


const root=ReactDOM.createRoot(document.getElementById("root"))
// render react element
// root.render(heading)

// render react functional component
root.render(<HeadingComponent/>)
