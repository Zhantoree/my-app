import React from "react";
import s from './Content.module.css';

const Content = () => {
    return(
        <div className={s.content}>
            <img className={s.background_image}
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nIVi5tIOdZXyrCWcc5M76F6QlfLR_VrEIQ&usqp=CAU"
                 alt=""/>
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