import React from "react";
import {useState} from "react";
// const Color=()=>{
//     return (
//         <div>
//             <AddColor />
//         </div>
//     )
// }

const AddColor=()=>{
    // const color="yellow";
    const [color, setColor]=useState("Yellow");
    // const colorList=["orange","lightpink","lightgreen"];
    const [colorList,setcolorList]= useState(["orange","lightpink","lightgreen"]);

    const styles={
        fontSize:"25px",
        backgroundColor:color,
    };
    return (
        <div>
        <div className="add-Color">
            <input onChange={(Event)=>setColor(Event.target.value)}
             style={styles} 
             type="text" 
             value={color}
             />
             <button onClick ={()=>setcolorList([...colorList,color])}>Add Color</button>
         </div>
         {
             colorList.map((clr)=>(
                <ColorBox color={clr}/>
             ))
         }
        </div>
    )
}
export default AddColor;

export function ColorBox({color}){
    const styles = {
        backgroundColor: color,
        height:"25px",
        width:"250px",
        marginTop:"10px"
    }
    return (
        <div style={styles}>

        </div>
    )
}
