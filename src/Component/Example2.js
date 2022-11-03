import { useState } from "react";
import { Example1 } from "./Example1";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";

export function Example2(){
    const [change,setChange] = useState(true);
    const groupOfNames=[
        {
            name:"Aruna",
            work:"Web Developer",
        },
        {
            name:"Aaru",
            work:"Banker",
        },
        {
            name:"Fairy",
            work:"Musician",
        }
    ]
    const navigate= useNavigate();
    const [count, setCount]= useState(0);
    return(
        <div>
            <button onClick={()=>{
                  setChange(!change)
            }}>Click Me !</button>
         { change ?   <h1>Hello</h1> : <h2>Everyone</h2> }
         {groupOfNames.map((allName, index)=> <Example1 key={index} name={allName.name} work={allName.work}/>)}

        <button onClick={()=>{
            setCount(count + 1)
         }}>Count {count}</button>
         <IconButton 
         onClick={()=>navigate("/colors")}
         color="primary"
         >
      <InfoIcon />
</IconButton>
        </div>
    )
}