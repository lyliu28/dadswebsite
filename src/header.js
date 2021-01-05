import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import insta_logo from "./instagram_logo.png";
import tuchong_logo from "./tuchong_logo.png"
import mail from "./email_icon.png"
import Burger from "./Components/Burger"

const Top = styled.div`
    display: flex;
    @media only screen and (max-width: 500px) {
        flex-direction: column;
        margin-right: 0;
    }
    align-items: center;
    margin-top: 2%;
    margin-bottom: 5%;
`


const RightSide = styled.div`
    display: flex;
    @media only screen and (max-width: 830px) {
        flex-direction: column;
        margin-right: 0;
    }
    width:70%;
    justify-content: flex-end;
    align-items:center;
    margin: 1px;
`

const LeftSide = styled.div`
    display: flex;
    width:30%;
    @media only screen and (max-width: 830px) {
        width: 100%;
    }
    justify-content: flex-start;
    align-items:center;
    margin: 1px;
`
/*
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
*/

const StyledLink = styled(Link)`
  margin-left: 24%;
  font-size: 30px;
  color:grey;
  font-family: 'Varta', sans-serif;
  text-decoration: none;
  @media only screen and (max-width: 830px) {
      font-size: 25px;
      margin-top: 25px;
      margin-left: 8%;
  }
`


const StyledLink2 = styled(Link)`
  margin-left: 1%;
  font-size: 20px;
  color:grey;
  font-family: 'Varta', sans-serif;
  text-decoration: none;
  @media only screen and (max-width: 830px) {
      font-size: 17px;
      margin-top: 25px;
  }
`

const Header = () => {
    const [selected, setSelected] = useState("")
    const [width, setWidth]   = useState(window.innerWidth);
    const [open, setOpen] = useState(false);
    const updateDimensions = () => {
      setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return <Top>
        <LeftSide>
          <StyledLink to="/" onClick={() => setSelected("/")}>Dawei Liu</StyledLink>
          <StyledLink2 to="/" onClick={() => setSelected("/")}> 金山大卫</StyledLink2>
        </LeftSide>

        {open &&
          <RightSide>

                <Link to="/landscape" onClick={() => {setSelected("/landscape"); setOpen(false);}} className={selected === "/landscape"? "item_underlined" : "item"}>
                  Landscape
                </Link>
                <Link to="/wildlife" onClick={() => {setSelected("/wildlife"); setOpen(false);}} className={selected === "/wildlife"? "item_underlined" : "item"}>Wildlife</Link>
                <Link to="/workshops" onClick={() => {setSelected("/workshops"); setOpen(false);}} className={selected === "/workshops"? "item_underlined" : "item"}>Workshops</Link>
                <Link to="/purchase" onClick={() => {setSelected("/purchase"); setOpen(false);}} className={selected === "/purchase"? "item_underlined" : "item"}>Purchase</Link>
                <Link to="/contact" onClick={() => {setSelected("/contact"); setOpen(false);}} className={selected === "/contact"? "item_underlined" : "item"}>Contact</Link>
                <Link to="/about" onClick={() => {setSelected("/about"); setOpen(false);}} className={selected === "/about"? "item_underlined" : "item"}>About</Link>
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
          </RightSide>}

        {width <= 830?
        <Burger open={open} setOpen={setOpen} /> :
          <RightSide>

          <Link to="/landscape" onClick={() => setSelected("/landscape")} className={selected === "/landscape"? "item_underlined" : "item"}>Landscape</Link>
          <Link to="/wildlife" onClick={() => setSelected("/wildlife")} className={selected === "/wildlife"? "item_underlined" : "item"}>Wildlife</Link>
          <Link to="/workshops" onClick={() => setSelected("/workshops")} className={selected === "/workshops"? "item_underlined" : "item"}>Workshops</Link>
          <Link to="/purchase" onClick={() => setSelected("/purchase")} className={selected === "/purchase"? "item_underlined" : "item"}>Purchase</Link>
          <Link to="/contact" onClick={() => setSelected("/contact")} className={selected === "/contact"? "item_underlined" : "item"}>Contact</Link>
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
        </RightSide>
      }
    </Top>
}

export default Header
