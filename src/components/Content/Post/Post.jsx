import React from "react";
import s from "./Post.module.css";

const Post = () => {
    return(
        <div className={s.info}>
            <img className={s.avatar}
                 src="https://i0.wp.com/theverybesttop10.com/wp-content/uploads/2015/12/Top-10-Four-Equal-Sided-Dog-Square-Grooming-8.jpg?resize=600%2C577"
                 alt=""/>
            <div>
                <h2>Dmitry K.</h2>
                <h3>Date of birth: 2 january</h3>
                <h3>City: Minsk</h3>
                <h3>Education: BSU '11</h3>
                <h4>Web Site: https://it-kamasutra.com</h4>
            </div>
        </div>
    );
}

export default Post;