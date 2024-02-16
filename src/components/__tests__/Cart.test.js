import RestaurantMenu from "../RestaurantMenu"
import { act } from "react-dom/test-utils"
import { render,screen,fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import MOCK_RES_MENU from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_RES_MENU)
        }
    }) 
})

it("Should load restaurant menu component",async()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/> 
                <Cart/>
            </Provider>
        </BrowserRouter>

        ))
    const accordianHeader = screen.getByText("Whopper (6)") 
    fireEvent.click(accordianHeader)   

    // whether accordian header "Whooper" is expanded with 6 items or not
    expect(screen.getAllByTestId("foodItems").length).toBe(6)

    const addItemsBtns=screen.getAllByRole("button",{name:"Add +"})
     // check whther cart - 0 items is updated in header before clicking Add+ button in res menu
    expect(screen.getByText("Cart - 0 items")).toBeInTheDocument()
    fireEvent.click(addItemsBtns[0])
    
    // check whther cart - 1 items is updated in header after clicking Add+ button in res menu
    expect(screen.getByText("Cart - 1 items")).toBeInTheDocument()

    fireEvent.click(addItemsBtns[1])

    // check whther cart - 2 items is updated in header after adding one more different item in res menu
    expect(screen.getByText("Cart - 2 items")).toBeInTheDocument()

    // check whther Cart component is updated with 2 items
    expect(screen.getAllByTestId("cartItems").length).toBe(2)

    const clearCartBtn = screen.getByText("Clear Cart")
    fireEvent.click(clearCartBtn)

    expect(screen.queryByTestId("cartItems")).not.toBeInTheDocument()
    expect(screen.getByText("Cart - 0 items")).toBeInTheDocument()
    expect(screen.getByText("Your Cart is empty"))


})