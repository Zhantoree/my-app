import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Footer from "./Footer";

const App = () => {
  return (

    <div className="wrapper">
        <Header />
        <div className="main">
            <Nav />
            <Content />
        </div>
        <Footer />
    </div>
  );
}






export default App;
