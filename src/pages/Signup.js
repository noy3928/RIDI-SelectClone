import React, { useState } from "react";
import styled from "styled-components";
import Color from "../shared/Color";
import { Input, LogoImage, Button } from "../shared/Styles";
import logo from "../shared/ridibooks_logo.png";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/ConfigStore";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwd_check, setPwdCheck] = useState('');

  const onChnageId = (e) => {
    setId(e.target.value);
  }
  const onChangePwd = (e) => {
    setPwd(e.target.value);
  }
  const onChangePwdCheck = (e) => {
    setPwdCheck(e.target.value);
  }

  const signup = () => {
    if (
      id === '' ||
      pwd === '' ||
      pwd_check === ''
    ) {
      window.alert("회원정보를 모두 입력하세요");
      return;
    }

    if (pwd !== pwd_check) {
      window.alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (id === pwd) {
      window.alert("아이디와 비밀번호를 다르게 설정해주세요");
      return;
    }

    let pwdRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    if (!pwdRegExp.test(pwd)) {
      window.alert("비밀번호는 영문 대소문자와 숫자, 특수문자를 포함해주세요");
      return;
    }

    dispatch(userActions.signupAPI(id, pwd, pwd_check));
  }

  return (
    <Wrapper>
      <ImageWrapper>
        <LogoImage
          src={logo} />
      </ImageWrapper>
      <LoginWrapper >
        <FoamWrapper>
          <Input
            value={id}
            _onChange={onChnageId}
            border="1px solid {Color.borderLigthGray}"
            borderRadius="5px 5px 5px 5px"
            type="text"
            margin="0px 0px 10px 0px"
            placeholder={"아이디"}
          />
          <InputGroup>
            <Input
              value={pwd}
              _onChange={onChangePwd}
              border="1px solid {Color.borderLigthGray}"
              borderRadius="5px 5px 0px 0px"
              type="password"
              placeholder={"비밀번호"}
            />
            <Input
              value={pwd_check}
              _onChange={onChangePwdCheck}
              border="1px solid {Color.borderLigthGray}"
              borderRadius="0px 0px 5px 5px"
              type="password"
              placeholder={"비밀번호 확인"}
            />
          </InputGroup>
          <ButtonBox>
            <Button
              _onClick={history.goBack}
              color={Color.white}
              borderColor={Color.borderBlue}
              bgColor={Color.basicBlue}
              margin="0px 8px 0px 0px">
              뒤로가기
            </Button>
            <Button
              _onClick={signup}
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
