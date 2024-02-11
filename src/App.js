import React, { lazy,Suspense, useEffect, useState } from "react"
import ReactDOM  from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import Accordion from "./components/Accordian"
import UserContext from "./utils/UserContext"

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy loading
// on demand loading
// dynamic import

const Grocery=lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
    const [userName, setUserName]=useState()

    // Authentication
    useEffect(()=>{
        const data={
            name:"Abhay"
        }

        setUserName(data.name)
    },[])

    return (
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>

    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path:"/accordian",
                element: <Accordion/>
            }
        ],
        errorElement: <Error/>
    }

]
)

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)