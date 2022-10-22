import React from 'react';
import './App.css';
import Header from "../Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "../Main/Main";

function App() {
  return (
    <>
      <Header/>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={""}></Route>
                <Route path={"/russian"} element={""}></Route>
                <Route path={"/intershum"} element={""}></Route>
                <Route path={"/english"} element={""}></Route>
                <Route path={"/community"} element={""}></Route>
                <Route path={"/support"} element={""}></Route>
            </Routes>
        </BrowserRouter>
        <Main/>
    </>
  );
}
export default App;
