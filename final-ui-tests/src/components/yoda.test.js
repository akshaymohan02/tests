import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Yoda from "./yoda";

it('Test for Yoda,test if it spins when button is clicked',()=>{
    render(<Yoda/>);
    const bt = screen.getByRole('button');
    const img = screen.getByAltText("Yoda img to rotate");
    userEvent.click(bt);  
    expect(img).toHaveStyle("transform: rotate(12deg)")

})