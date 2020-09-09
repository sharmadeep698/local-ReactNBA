import React from "react";
import style from"./Header.css"
import { Link} from 'react-router-dom';
import Nba from "./Images/nba_logo.png"

import SideNavBar from "./SideNav/SideNav.jsx"

const Header = (props) =>{
	
	const logo = ()=>{
		return(
			<Link to="/" className={style.logo} > 
			<img alt="Nba Logo " src ={Nba} />
			</Link>
			)
	}
	return(
		<header className={style.header}> 
		
					<div className={style.headerOpt}>
		{logo()}
<SideNavBar {...props}/>
			</div>

		</header>
		)
}
export default Header ;