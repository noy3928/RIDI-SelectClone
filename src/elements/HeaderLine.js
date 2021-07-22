import React from "react";
import ridiSelect from "../img/ridiSelect.svg"
import ridiBooks from "../img/ridiBook.svg"
import ridiSelectWhite from "../img/ridiSelectWhite.svg"
import ridiBooksWhite from "../img/ridiBookWhite.svg"
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/ConfigStore";


const HeaderLine = (props) => {
    const dispatch = useDispatch();
    const is_login = useSelector((store) => store.user.is_login);
    const {is_detail, bgColor} = props;

    const logOut = () => {
        dispatch(userActions.logOutRemoveCookie());
    }

    if(is_detail){
        return(
        <HeaderBox bgColor={bgColor}>
        <MainHeader>
            <Header1>
              <LogoBox>
                <LogoImg onClick={() => { history.push("/") }} src={ridiSelectWhite} maxWidth="102px" maxHeight="16px" />
                <LogoImg src={ridiBooksWhite} maxWidth="90px" maxHeight="13px" />
              </LogoBox>
              <LoginAndSearchBox>
                {is_login ? <Login color={"hsla(0,0%,100%,.5)"} border={"hsla(0,0%,100%,.5)"} onClick={logOut}>로그아웃</Login>
                  : <Login color={"hsla(0,0%,100%,.5)"} border={"hsla(0,0%,100%,.5)"} onClick={() => { history.push("/login") }}>로그인</Login>
                }
              </LoginAndSearchBox>
            </Header1>
        </MainHeader>
        </HeaderBox>
        )
    }

    return(
      <Header1>
              <LogoBox>
                <LogoImg src={ridiSelect} maxWidth="102px" maxHeight="16px" />
                <LogoImg src={ridiBooks} maxWidth="90px" maxHeight="13px" />
              </LogoBox>
              <LoginAndSearchBox>
                {is_login ? <Login color={"#828990"} border={"#d2d5d9"} onClick={logOut}>로그아웃</Login>
                  : <Login onClick={() => { history.push("/login") }}>로그인</Login>
                }
              </LoginAndSearchBox>
            </Header1>
    )

  }

const HeaderBox = styled.div`
  width:100%;
  height:auto;
  flex-direction: row;
  border-bottom: 1px solid hsla(0,0%,100%,.1);
  display:flex;
  justify-content:center;
  ${(props)=>props.bgColor ?`${props.bgColor};`:""};
`;

const MainHeader = styled.div`
width:880px;
display:flex;
flex-direction: column;
padding: 0px 40px;
box-sizing:border-box;
`

const Header1 = styled.div`
    width:100%;
    height:58px;
    display:flex;
    justify-content:space-between;
`

const LogoBox = styled.div`
display:flex;
    width: 70%;
    height: auto;
    padding: 20px 0px 0px 0px;
`

const LogoImg = styled.img`
    max-width: ${(props) => (props.maxWidth ? `${props.maxWidth};` : "")}
    max-height: ${(props) => (props.maxHeight ? `${props.maxHeight};` : "")}
    width: auto;
    height: auto;
    margin-right:12px;
    :hover{
        opacity:0.6;
    }
`

const LoginAndSearchBox = styled.div`
    width: 30%;
    height: auto;
    padding:20px;
    display:flex;
    justify-content: flex-end;
    align-items:center;
`

const Login = styled.button`
height:28px;
width:auto; 
border:1px solid ${(props)=> props.border};
border-radius:3px;
cursor:pointer;
background:transparent; 
font-size:13px;
font-weight:700;
color:${(props)=> props.color};
`


export default HeaderLine; 