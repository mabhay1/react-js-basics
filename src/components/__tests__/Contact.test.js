import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

// test and it both are same

describe("Contact Us Page test case",()=>{

    // beforeAll(()=>{
    //     console.log("before all")
    // })
    // beforeEach(()=>{
    //     console.log("before Each")
    // })
    // afterAll(()=>{
    //     console.log("after all")
    // })
    // afterEach(()=>{
    //     console.log("after each")
    // })

    test("Should load contact component",()=>{

        render(<Contact/>)
    
        const heading = screen.getByRole("heading")
    
        // Assertion
        expect(heading).toBeInTheDocument()
    
    })
    
    test("Should load button inside Contact component",()=>{
    
        render(<Contact/>)
    
        // const button = screen.getByRole("button")
        const button = screen.getByText("Submit")
    
        expect(button).toBeInTheDocument()
    })
    
    it("Should load input name inside Contact component",()=>{
    
        render(<Contact/>)
    
        const inputName = screen.getByPlaceholderText("name")
    
        expect(inputName).toBeInTheDocument()
    
    })
    
    it("Should load 2 input boxes on Contact component",()=>{
    
        render(<Contact/>)
    
        const inputBoxes = screen.getAllByRole("textbox")
    
        expect(inputBoxes.length).toBe(2)
        // expect(inputBoxes.length).not.toBe(3)
    
    })

})

