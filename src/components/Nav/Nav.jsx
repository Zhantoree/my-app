import React from "react";
import s from './Nav.module.css';

const Nav = () => {
    return(
        <nav>
            <a href="/content"><div className={`${s.item} ${s.active}`}>Profile</div></a>
            <a href="/dialogs"><div className={s.item}>Messages</div></a>
            <a href="/news"><div className={s.item}>News</div></a>
            <a href="/music"><div className={s.item}>Music</div></a>
            <a href="/settings"><div className={s.item}>Settings</div></a>

        </nav>
    );
}
export default Nav;