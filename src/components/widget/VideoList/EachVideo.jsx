import React from "react";
import {Link} from "react-router-dom";
	import styles from "./style.css"
	import CardListData from "../CardListData/CardListData.jsx"
const EachVideo =(props)=>{
	console.log(props)
	  return props.data.map( (item,i) => (
        <Link to={`/videos/${item.id}`} key={i}>
            <div className={styles.videoListItem_wrapper}>
                <div className={styles.left}
                    style={{
                        background:`url(/images/videos/${item.image})`
                    }}
                >
                    <div></div>
                </div>
                <div className={styles.right}>
                 
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    ))
}
export default EachVideo; 