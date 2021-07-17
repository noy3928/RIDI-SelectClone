import React from "react";
import styled from "styled-components";
import Color from "../shared/Color";
import { Input, LogoImage, Button } from "../shared/Styles";
import logo from "../shared/ridibooks_logo.png";

const Signup = (props) => {

  return (
    <Wrapper>
      <ImageWrapper>
        <LogoImage
          src={logo} />
      </ImageWrapper>
      <LoginWrapper >
        <FoamWrapper>
          <Input
            border="1px solid {Color.borderLigthGray}"
            borderRadius="5px 5px 5px 5px"
            type="text"
            margin="0px 0px 10px 0px"
            placeholder={"아이디"}
          />
          <InputGroup>
            <Input
              border="1px solid {Color.borderLigthGray}"
              borderRadius="5px 5px 0px 0px"
              type="password"
              placeholder={"비밀번호"}
            />
            <Input
              border="1px solid {Color.borderLigthGray}"
              borderRadius="0px 0px 5px 5px"
              type="password"
              placeholder={"비밀번호 확인"}
            />
          </InputGroup>
          <ButtonBox>
            <Button
              BasicBtn
              color={Color.white}
              borderColor={Color.borderBlue}
              bgColor={Color.basicBlue}
              margin="0px 8px 0px 0px">
              뒤로가기
            </Button>
            <Button
              BasicBtn
              color={Color.basicGray}
              borderColor={Color.borderLightGray}
              bgColor="#fff">
              회원가입
            </Button>
          </ButtonBox>
        </FoamWrapper>
      </ LoginWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Color.lightBlue};
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

const ButtonBox = styled.div`
  display: flex;
  width: 100%;
`;

const InputGroup = styled.div`
  border-radius: 5px;
  margin-bottom: 10px;
`;

export default Signup;
