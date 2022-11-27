import React from "react";
import s from './Nav.module.css';

const Nav = () => {
    return(
        <nav>
            <div className={`${s.item} ${s.active}`}><a href="src/components/Nav/Nav#">Profile</a></div>
            <div className={s.item}><a href="src/components/Nav/Nav#">Messages</a></div>
            <div className={s.item}><a href="src/components/Nav/Nav#">News</a></div>
            <div className={s.item}><a href="src/components/Nav/Nav#">Music</a></div>
            <div className={s.item}><a href="src/components/Nav/Nav#">Settings</a></div>

        </nav>
    );
}
export default Nav;