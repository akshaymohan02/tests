import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Terms from './terms'

it('Test for Terms,test if selection gives the right output',()=>{
    render(<Terms/>);
    const yes = screen.getByDisplayValue('Yes');
    const no = screen.getByDisplayValue('No');
    const res = screen.getByPlaceholderText("result");
    userEvent.click(no);  
    expect(res).toContainHTML("Sorry, can't proceed.");
    userEvent.click(yes);
    expect(res).toContainHTML("Thanks, good to proceed.")


})