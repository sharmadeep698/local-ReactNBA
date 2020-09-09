import React from "react"; 
import {Link } from "react-router-dom"
	
	import styles from "./style.css"
import Slider   from "react-slick";
const SliderDemo = (props) =>{
	let template = null ; 
	  const settings = {
		
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      ...props.settings
		    };
		    	switch (props.type){
		    			case ("featured"):
		    				template = props.data.map((item,i)=>{
		    				return(
  								<div key={i}>
                       <div className={styles.featured_item}>
                            <div className={styles.featured_image}
                                style={{
                                    background:`url(../images/articles/${item.image})`
                                }}></div>
                            <Link to={`/articles/${item.id}`}>
                                <div className={styles.featured_caption}>
                                    {item.title}
                                </div>
                            </Link>
                       </div>
                    </div>
		    					)
		    				})
		    			break;
		    	default:
		    	template=null 

		    	}
	return(
		<Slider   {...settings}>
			{
				template
				// // console.log(props.data)
				// props.data.map(item=>{
				// 	console.log(item)
				// })
			}
		</Slider>
		)

}
export default SliderDemo ; 