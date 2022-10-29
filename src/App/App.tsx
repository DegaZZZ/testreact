import React from 'react';
import './App.css';
import Header from "../Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "../Main/Main";
import Mel from "../Mel/Mel";

enum Links{
    DEFAULT = "https://vk.com/video_ext.php?oid=-211941733&id=456239177&hash=320cbbbc09eb7482",
    RUSSIAN = "https://vk.com/video_ext.php?oid=-211941733&id=456239177&hash=320cbbbc09eb7482",
    INTER = "https://vk.com/video_ext.php?oid=-211941733&id=456239178&hash=fdd4cc8757face86",
    ENGLISH = "https://vk.com/video_ext.php?oid=-211941733&id=456239179&hash=a3e3f73e33a58ff3",
    COMMUNITY = "https://vk.com/video_ext.php?oid=-211941733&id=456239179&hash=a3e3f73e33a58ff3",
    SUPPORT = "https://www.donationalerts.com/r/f1tv_free"
}

function App() {
  return (
    <>
      <Header/>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Main link={Links.DEFAULT} title={"2022 Japan Grand Prix"}/>}></Route>
                <Route path={"/russian"} element={<Main link={Links.RUSSIAN} title={"2022 Japan Grand Prix"}/>}></Route>
                <Route path={"/intershum"} element={<Main link={Links.INTER} title={"2022 Japan Grand Prix"}/>}></Route>
                <Route path={"/english"} element={<Main link={Links.ENGLISH} title={"2022 Japan Grand Prix"}/>}></Route>
                <Route path={"/melharucos"} element={<Mel link={Links.COMMUNITY} title={"2022 Japan Grand Prix"}/>} ></Route>
                <Route path={"/support"} element={<Main link={Links.SUPPORT} title={"Support Us"}/>} ></Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
