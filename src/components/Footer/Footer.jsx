import React from "react";
import {date} from "../../config.js"
import styles from "./Footer.css"
import {Link} from "react-router-dom"
import logo from "../Header/Images/nba_logo.png"
const Footer = () => (
        <div className={styles.footer}>
            <Link to="/" className={styles.logo}>
                <img alt="nba logo" src={logo}/>
            </Link>
            <div className={styles.right}>
                @NBA {date} All rights reserved.
            </div>
        </div>
)


export default Footer ;