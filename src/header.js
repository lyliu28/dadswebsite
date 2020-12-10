import React, { useState } from 'react';
import styled from 'styled-components'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import insta_logo from "./instagram_logo.png";
import tuchong_logo from "./tuchong_logo.png"
import mail from "./email_icon.png"

const Top = styled.div`
    display: flex;
    @media only screen and (max-width: 500px) {
        flex-direction: column;
        margin-right: 0;
    }
    align-items: center;
    margin-right: 9%;
`
const Name = styled.h1`
    margin-left: 13.5%;
    font-size: 34px;
    color:grey;
    font-family: 'Varta', sans-serif;
    @media only screen and (max-width: 500px) {
        font-size: 20px;
        margin-left: 0
    }
`
const ChineseName = styled.h1`
    font-size: 23px;
    color:grey;
    font-family: 'Varta', sans-serif;
    @media only screen and (max-width: 500px) {
        font-size: 18px;
    }
`

const Header = () => {
    const [selected, setSelected] = useState("")
    return <Top>
        <Name>DAWEI LIU</Name>
        <ChineseName> (金山大卫）</ChineseName>
        <Link to="/" onClick={() => setSelected("/")} className={selected === "/"? "item_underlined" : "item"}>Photography</Link>
        <Link to="/about" onClick={() => setSelected("/about")} className={selected === "/about"? "item_underlined" : "item"}>About</Link>
        <div className="social">
            <a  target="_blank" href="https://tuchong.com/16561503/">
            <img src={tuchong_logo} style ={{width:28, margin: "10px"}}/>
            </a>
            <a  target="_blank" href="https://www.instagram.com/dawei_rgb/">
            <img src={insta_logo} style={{width:22, margin: "12px"}} />
            </a>
            <a href="mailto:aidyl889@gmail.com">
            <img src={mail} style = {{width:22, margin: "12px"}}/>
            </a>
        </div>
    </Top> 
}

export default Header