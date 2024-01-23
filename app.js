import React from "react"
import ReactDOM  from "react-dom/client"

let parent = document.getElementById("rootJS")
let heading = document.createElement("h1")
heading.innerHTML = "hello world from javascript"
parent.appendChild(heading)


let headingReact = React.createElement("h1", { id: "app1" }, "this is heading")
let complexElement = React.createElement("div",{},
[
    React.createElement(
    "div",
    { id: "parent1" },
    [React.createElement("h1",{},"this is child h1"),React.createElement("p",{},"this child p")]
    ),
    React.createElement(
        "div",
        { id: "parent2" },
        [React.createElement("h1",{},"this is child2 h1"),React.createElement("p",{},"this child2 p")]
        )
    ]    
)
let root = ReactDOM.createRoot(document.getElementById("rootReact"))

root.render(complexElement)
