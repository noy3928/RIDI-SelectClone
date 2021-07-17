import React from "react";
import styled from "styled-components";
import Color from "../shared/Color";
import { Input, LogoImage, Button } from "../shared/Styles";
import logo from "../shared/ridibooks_logo.png";

const Login = (props) => {

  return (
    <Wrapper>
      <ImageWrapper>
        <LogoImage
          src={logo} />
      </ImageWrapper>
      <LoginWrapper>

        <FoamWrapper>
          <Input
            borderRadius="5px 5px 0px 0px"
            type="text"
            placeholder={"아이디"}
          />
          <Input
            borderRadius="0px 0px 5px 5px"
            type="password"
            placeholder={"비밀번호"}
            margin="0px 0px 10px 0px"
          />
          <Button
            BasicBtn
            width="100%"
            color={Color.white}
            borderColor={Color.borderBlue}
            bgColor={Color.basicBlue}
            margin="0px 0px 10px 0px">
            로그인
          </Button>
          <Button
            BasicBtn
            width="100%"
            color={Color.basicGray}
            borderColor={Color.borderLightGray}
            bgColor="#fff">
            회원가입
          </Button>
        </FoamWrapper>
      </ LoginWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
width: 100vw;
height: 100vh;
background-color: ${Color.lightBlue} ;
`;

const LoginWrapper = styled.div`
padding: 60px 0 70px;
`;

const ImageWrapper = styled.div`
justify-content: center;
display: flex;
padding: 15px;
border-bottom: 1px solid ${Color.borderLightGray};
`;

const FoamWrapper = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px auto;
padding: 24px 10px;
width: 360px;
`;

export default Login;
