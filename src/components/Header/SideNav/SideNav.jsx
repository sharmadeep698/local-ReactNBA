import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import SideNavList from "./SideNavList.jsx"
const SideNavBar = (props) => {
  const [showNav, setShowNav] = useState();
 
  return (
    <div>
      <MenuIcon onClick={() => setShowNav(true)}  style={{padding: "5px"}}/>
      <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} 
      navStyle={{
      	background:"#242424",
      	maxWidth:"220px"
      }}
      title="Pages"
      titleStyle={{
      		background:"#242424",
      }} 
           itemStyle={{ backgroundColor: '#242424' }}
        itemHoverStyle={{ backgroundColor: '#242424' }}
     
     
      > 
      <SideNavList/>
      </SideNav>
    </div>
  );
};


export default SideNavBar ; 