import React from "react";
import styled from "styled-components";
import HeaderLine from "../elements/HeaderLine";


const Header = () => {

  return (
    <React.Fragment>
      <HeaderBox>
        <MainHeader>
          <HeaderLine/>
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

const Header2 = styled.div`
    width:100%;
    height:42px;
    display:flex;
    justify-content: flex-start;
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

