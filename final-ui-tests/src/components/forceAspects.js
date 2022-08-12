import React, {useState} from "react";

function Force(){
    const [select,updateselect]=useState([]);
    const [checked ,updatechecked]=useState([0,0,0]);
    
    
    
    const update =(val,index)=>{
       
        if(checked[index]===0){
            let newArr = [...select];
        newArr[index]=val
        updateselect(newArr);
        let newArr2 = [...checked];
        newArr2[index]=1 
        updatechecked(newArr2) }
        else
        {
            const newArr = select.filter((t) => t !== val);
            updateselect(newArr);
            let newArr2 = [...checked];
        newArr2[index]=0
        updatechecked(newArr2)

        }      
    }
    
   
    
return(
    <div>
        <p>Currently Working On Following Aspects of The Force</p>
        <input type="checkbox" value="Control" onChange={()=>update("Control",0)} />
         <label htmlFor="Yes">Control</label>
        <input type="checkbox" value="Sense" onChange={()=>update("Sense",1)} />
         <label htmlFor="Yes">Sense</label>
         <input type="checkbox" value="Alter" onChange={()=>update("Alter",2)} />
         <label htmlFor="No">Alter</label><br/>
         <p  placeholder="result">You Selected: {select}</p>
    </div>       
    
)
}
export default Force;