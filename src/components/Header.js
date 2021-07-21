import React from "react";
import ridiSelect from "../img/ridiSelect.png"
import ridiBooks from "../img/ridiBooks.png"
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/ConfigStore";

const Header = () => {
  const dispatch = useDispatch();
  const is_login = useSelector((store) => store.user.is_login);

  const logOut = () => {
    dispatch(userActions.logOutRemoveCookie());
  }

  return (
    <React.Fragment>
      <HeaderBox>
        <MainHeader>
          <Header1>
            <LogoBox>
              <LogoImg src={ridiSelect} maxWidth="102px" maxHeight="16px" />
              <LogoImg src={ridiBooks} maxWidth="90px" maxHeight="13px" />
            </LogoBox>
            <LoginAndSearchBox>
              {is_login ? <Login onClick={logOut}>로그아웃</Login>
                : <Login onClick={() => { history.push("/login") }}>로그인</Login>
              }
            </LoginAndSearchBox>
          </Header1>
          <Header2>
            <Category borderBottom><CategoryText>도서</CategoryText></Category>
            <Category><CategoryText>아티클</CategoryText></Category>
          </Header2>
        </MainHeader>
      </HeaderBox>

      <MenuListBox>
        <MenuList>
          <Menu>홈</Menu>
          <Menu>최신 업데이트</Menu>
          <Menu>카테고리</Menu>
          <Menu>마이 셀렉트</Menu>
        </MenuList>
      </MenuListBox>
    </React.Fragment>
  );
}

const HeaderBox = styled.div`
    width:100%;
    height:100px;
    flex-direction: row;
    border-bottom: 1px solid #dbdbdb;
    display:flex;
    justify-content:center;
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

const Header2 = styled.div`
    width:100%;
    height:42px;
    display:flex;
    justify-content: flex-start;
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
`

const LoginAndSearchBox = styled.div`
    width: 30%;
    height: auto;
    padding:20px;
    display:flex;
    justify-content: flex-end;
`

const Login = styled.button`
height:28px;
width:auto; 
border:1px solid #d1d5d9;
border-radius:3px;
cursor:pointer;
background:transparent; 
font-size:13px;
font-weight:700;
color:#828990;
`

const Category = styled.a`
width: auto;
height: auto;
border-bottom:${(props) => (props.borderBottom ? `2px solid #828990;` : "")};
padding: 6px 4px 12px;
margin-right:15px;
color:#9fa7ac;
text-decoration:none;
cursor:pointer;
:first-child{
  color:#222b3a;
}
`

const CategoryText = styled.p`
    margin: 0px;
    font-family: "NotoSans";
    font-size: 16px;
    font-weight: 500;
`

const MenuListBox = styled.div`
box-shadow: 0 1px 1px 0 rgb(0 0 0 / 15%);
height:47px;
width:100%;
display:flex;
justify-content:center;
box-sizing:border-box;
align-items:center;

`

const MenuList = styled.ul`
list-style:none;
width:880px;
display:flex;
justify-content:flex-start;
margin:0px;
padding:0px 40px;
height:20px;
box-sizing:border-box;
`

const Menu = styled.li`
    font-family: "NotoSansRegular";
    margin:0px 25px 0px 0px;
    padding:0px;
    height:20px;
    font-size:14.5px;
    :nth-child(3){
      font-family: "NotoSansBold";
    }

`

export default Header;

{/* <Grid width="auto" height="auto" flex_direction="column">
<Grid height="58px" maxWidth="880px" margin="0 auto" justify_contents="space-between"  >
    <Grid height="auto" padding="0px 0px 0px 40px" width="auto">
        <Image maxHeight="16px" maxWidth="102px" width="auto" height="auto" src={ridiSelect}></Image>
        <Image maxHeight="16px" maxWidth="90px" width="auto" height="auto" src={ridiBooks}></Image>
    </Grid>
    <Grid height="auto" padding="0px 0px 0px 40px" width="auto">
        <Button   > 로그인</Button>
    </Grid>
</Grid>
<Grid height="58px" maxWidth="880px" padding="0px 0px 0px 40px" margin="0 auto">
    <A borderBottom><Text type="contents">도서</Text></A>
    <A><Text type="contents">아티클</Text></A>
</Grid>
</Grid> */}