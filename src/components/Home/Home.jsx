import React from "react";
import Slider from "../widget/NewsSlider/slider.js"
import NewsList from "../widget/NewsList/NewsList.jsx"
import VideoList from "../widget/VideoList/VideoList.jsx"
const Home = ()=> {
	return(<div>
				<Slider type={"featured"}
					start={0}
					end={3}
					settings={{
			                    dots:false,
			                }}/>
				<NewsList type={"card"} start={0} amount={3}   />
				<VideoList start={0} amount={3} type={"card"} Title={true}/>
		</div>)
	
}

export default Home;