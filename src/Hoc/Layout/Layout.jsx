import React,{ useState } from "react"
import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import "./Layout.css";

function Layout (props){
	const [Nav,SetNav] = useState(false)
		const Tab = (action) =>{
			SetNav(action)
		}
		return(
		<div>
			<Header 
			onOpen={()=>Tab(true)}
			Nav = {Nav}
			onClose={()=>{
				Tab(false)
			}}	
				/>
			{props.children}
			<Footer />
		</div>)
}
export default Layout ; 