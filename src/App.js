import logo from './logo.svg';
import React from "react";
import s from "./App.module.css";
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Footer from "./Footer";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (

        <div className={s.wrapper}>
            <Header/>
            <div className={s.main}>
                <Nav/>
                <div className={s.pages}>
                    {/*<Content/>*/}
                    <Dialogs />
                </div>

            </div>
            <Footer/>
        </div>
    );
}


export default App;
