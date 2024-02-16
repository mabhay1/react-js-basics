import { render,screen,fireEvent } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Body from "../Body"
import MOCK_DATA_LIST from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA_LIST)
        }
    })
})

it("Should render Body component with search button",async()=>{

    await act(async()=>render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))


    const searchBtn=screen.getByRole("button",{name:"Search"})

    
    // search button in document or not
    expect(searchBtn).toBeInTheDocument()
})

it("Should have 20 cards in reslist before search", async()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))

    const cardsBeforeSearch= screen.getAllByTestId("resCard")
    
    expect(cardsBeforeSearch.length).toBe(20)
})

it("Should search reslist for burger text input",async()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))


    const InputBox=screen.getByTestId("searchInput")
    const searchBtn=screen.getByRole("button",{name:"Search"})

    fireEvent.change(InputBox,{target:{value:"pizza"}})
    fireEvent.click(searchBtn)

    const cardsAfterSearch= screen.getAllByTestId("resCard")

    expect(cardsAfterSearch.length).toBe(4)
})

it("Should filter top Restaurants",async()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>))

    const filterBtn =screen.getByRole("button",{name:"Top Rated Restaurant"})    

    fireEvent.click(filterBtn)

    const cardsAfterFilter = screen.getAllByTestId("resCard")

    expect(cardsAfterFilter.length).toBe(9)
})