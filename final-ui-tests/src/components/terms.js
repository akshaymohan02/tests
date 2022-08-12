import React, {useState} from "react";

function Terms(){
    const [select,updateselect]=useState('');
    
    const updatey =()=>{
        updateselect("Thanks, good to proceed.");
  
    }
    const updaten =()=>{
        updateselect("Sorry, can't proceed.");
  
    }
   
    
return(
    <div>
        <p>Do you agree with the terms and conditions</p>
        <input type="radio" id="Yes" value="Yes" name="selection" onClick={updatey}/>
         <label htmlFor="Yes">Yes</label>
         <input type="radio" id="No" value="No" name="selection" onClick={updaten}/>
         <label htmlFor="No">No</label><br/>
         <p  placeholder="result">{select}</p>
    </div>       
    
)
}
export default Terms;