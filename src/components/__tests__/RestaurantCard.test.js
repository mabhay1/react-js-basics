import { render,screen } from "@testing-library/react"
import RestaurantCard, { withDiscountLabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

const RestaurantCardDiscountLabel=withDiscountLabel(RestaurantCard)

it("Should render RestaurantCard component with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Burger King")

    expect(name).toBeInTheDocument()
})

it("Should render ReataurantCard component with promoted label",()=>{
    render(<RestaurantCardDiscountLabel resData={MOCK_DATA}/>)
    
    const withDiscountLabel=screen.getByTestId("discountLabel")
    
    expect(withDiscountLabel).toBeInTheDocument()
})