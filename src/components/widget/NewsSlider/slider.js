import React,{useState,useEffect} from "react";
import axios from "axios"
import SliderDemo from "./sliderDemo.jsx"
	import {Url} from "../../../config.js"
const Slider = (props)=>{
const [post,setPost] = useState([])
useEffect(() => {
  axios.get(`${Url}/articles?_start=${props.start}&_end=${props.end}`)
.then(response=> {
	
setPost(response.data)
})
}, []);


return(
<div>

<SliderDemo data={post} type={props.type} settings={props.settings}/>
</div>
	)

}
export default Slider; 