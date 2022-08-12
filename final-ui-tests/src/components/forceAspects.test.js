import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Force from './forceAspects'

it('Test for Force,test if selected boxes are displayed',()=>{
    render(<Force/>);
    const con = screen.getByDisplayValue('Control');
    const sen = screen.getByDisplayValue('Sense');
    const al = screen.getByDisplayValue('Alter');
    const res = screen.getByPlaceholderText("result");
    userEvent.click(con);  
    expect(res).toContainHTML("Control");
    userEvent.click(sen);
    expect(res).toContainHTML("Sense")
    userEvent.click(al);
    expect(res).toContainHTML("Alter")
    //checking for delete 
    userEvent.click(con);  
    expect(res).toHaveTextContent("SenseAlter");
    userEvent.click(al);
    expect(res).toHaveTextContent("Sense");

})