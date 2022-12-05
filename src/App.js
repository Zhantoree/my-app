import logo from './logo.svg';
import React from "react";
import s from "./App.module.css";
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Footer from "./Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header/>
                <div className={s.main}>
                    <Nav/>

                        <div className={s.pages}>
                            <Routes>
                                <Route path={"/content"} element={<Content/>}></Route>
                                <Route path={"/dialogs"} element={<Dialogs/>}></Route>
                                <Route path={"/news"} element={<News/>}></Route>
                                <Route path={"/music"} element={<Music/>}></Route>
                                <Route path={"/settings"} element={<Settings/>}></Route>
                            </Routes>
                        </div>


                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;
