import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return(
        <div className={s.info}>
            <img className={s.avatar}
                 src={props.avatar}
                 alt=""/>
            <div>
                <h2>{props.name}</h2>
                <h3>{props.birth}</h3>
                <h3>{props.city}</h3>
            </div>
        </div>
    );
}

export default Post;