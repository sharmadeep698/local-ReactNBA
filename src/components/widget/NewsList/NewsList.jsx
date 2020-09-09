import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import styles from "./style.css"
	import {CSSTransition, TransitionGroup } from "react-transition-group";
	import {Url} from "../../../config.js"
	import CardListData from "../CardListData/CardListData.jsx"
const NewsList = (props) =>{
	const [item,SetItem] = useState([])
const [start,SetStart] = useState(props.start)
const [end,SetEnd] = useState(props.amount)

const [loadData,setLoadData] = useState([])

useEffect(() => {
	if (loadData.length === 0 ){
		 axios.get(`${Url}/teams`)
		 	.then(response=>{
		 		setLoadData(response)
		 	})
	}

     axios.get(`${Url}/articles?_start=${start}&_end=${end}`)
.then(response=> {
	return ( SetItem((previous)=>{
		return([...previous,...response.data])
		}))
})
	
   
  },[start,end]);
let templete = null ; 
	switch(props.type){
			case("card"):
				templete = item.map((data,i)=>{
						  return(   
						<CSSTransition
                        classNames={{
                            enter:styles.newsList_wrapper,
                            enterActive:styles.newsList_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
				
					  	<div>
                            <div className={styles.newslist_item}>
                                <Link to={`/articles/${data.id}`}>
                                    <CardListData ListData={loadData.data} ListID={data.id} date={data.date}/>
                                    <h2>{data.title}</h2>
                                </Link>
                                
                                
                            
                            </div>
                        </div> 
                       
					      </CSSTransition>

				)
				})
				break;
		default:
		templete=null 		
	}
	const UpdateData = ()=>{
		SetStart(end)
		SetEnd(end+3)
		

	}
	return(
<div>
  <TransitionGroup
                    component="div"
                    className="list"
                >
                  {templete}
                </TransitionGroup>

	<div onClick={()=>UpdateData()}>

	<button type="button" class="btn btn-primary  btn-block">load More </button>
	</div>
</div>
		)

}
export default NewsList
