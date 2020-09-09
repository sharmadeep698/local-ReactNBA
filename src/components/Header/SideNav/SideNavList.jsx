import React from "react";
import {Link} from "react-router-dom";
import items from "./List.jsx"
 
const SideNavList = () =>{
    
    return (items.map((element,i)=>{
       
        return(
            <li key={i}>
             <Link to ={element.link} ClassName={element.type} > {element.text} </Link>
             </li>
            )
    }))
         
}

export default  SideNavList ; 