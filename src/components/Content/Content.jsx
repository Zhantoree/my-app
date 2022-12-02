import React from "react";
import s from './Content.module.css';
import Post from "./Post/Post";

const Content = () => {
    return(
        <div className={s.content}>
            <img className={s.background_image}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nIVi5tIOdZXyrCWcc5M76F6QlfLR_VrEIQ&usqp=CAU"
                 alt=""/>
            <Post name={"Vasya Pupkin"} birth={"09.05.1995"} city={"Las Vegas"} avatar={"https://cdn-icons-png.flaticon.com/512/147/147133.png"}/>
            <Post name={"Dmitry Pulya"} birth={"07.04.1998"} city={"NewYork"} avatar={"https://www.w3schools.com/w3images/avatar2.png"}/>

            <div className={s.comments}>
                <h3>My posts</h3>
                <h4>Your news...</h4>
                <button>Send</button>
                <div className={s.comments_question}><div className={s.round}></div>
                    <h3>Hey, why nobody love me?</h3>
                </div>

            </div>




        </div>
    );
}

export default Content;