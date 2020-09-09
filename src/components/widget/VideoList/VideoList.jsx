import React,{useEffect,useState} from "react"
import axios from "axios";	

	import {Url} from "../../../config.js";
	import EachVideo from "./EachVideo.jsx";
	import styles from "./style.css"

const VideoList =(props) =>{
	const [start,SetStart] = useState(props.start)
	const [end,SetEnd] = useState(props.amount)
	const [itemArr,SetItemArr] = useState([])
	const [TeamArr,setTeamArr] = useState([])
useEffect(() => {
	if (TeamArr.length === 0 ){
		 axios.get(`${Url}/teams?_start=0&_end=3`)
		 	.then(response=>{
		 		setTeamArr(response.data)
		 	})
	}

     axios.get(`${Url}/videos?_start=${start}&_end=${end}`)
.then(response=> {

	return ( SetItemArr((previous)=>{
		return([...previous,...response.data])
		}))
})
	
   
  },[start,end]);
let Template = null;
	
		switch(props.type){
				case("card"):
					Template = <EachVideo data={itemArr} team={TeamArr} />				
				break;
		default:
		Template=null;
		}
const DisplayTitle = ()=>{
	return(   <h3><strong>NBA</strong> Videos</h3>)
}
return (
	<div className={styles.videoList_wrapper}>
	{props.Title ? DisplayTitle() : null }
	{Template}
	<button type="button" class="btn btn-primary  btn-block"> More Video </button>
	</div>
	)
}

export default VideoList;