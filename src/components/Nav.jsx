import React from "react";
import s from './Nav.module.css';

const Nav = () => {
    return(
        <nav>
            <div className={s.item}><a href="#"></a>Profile</div>
            <div className={s.item}><a href="#"></a>Messages</div>
            <div className={s.item}><a href="#"></a>News</div>
            <div className={s.item}><a href="#"></a>Music</div>
            <div className={s.item}><a href="#"></a><br/></div>
            <div className={s.item}><a href="#"></a>Settings</div>

        </nav>
    );
}
export default Nav;