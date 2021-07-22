import React from "react";
import styled from "styled-components";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import Color from '../shared/Color';


const Footer = () => {

  return (
    <FooterBox>
      <FooterWrapper>

        <FooterCommonList>
          <Element>뷰어다운로드 </Element>
          <Element>이용방법</Element>
          <Element>이용권등록</Element>
          <Element>FAQ</Element>
        </FooterCommonList>

        <IconBox>
          <Icon>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </Icon>
        </IconBox>

        <RidiInfoBox>
          <RidiInfo>서울시 강남구 역삼동 702-28 어반벤치빌딩 10층(테헤란로 325)</RidiInfo>
          <RidiInfo>리디 (주)대표 배기식사업자등록번호 120-87-27435</RidiInfo>
          <RidiInfo>통신판매업신고 제 2009-서울강남 35-02139호</RidiInfo>
        </RidiInfoBox>

        <RidiSiteInfo>
          <RidiInfo>종료 예정 도서</RidiInfo>
          <RidiInfo>이용약관</RidiInfo>
          <RidiInfo>개인 정보 처리 방침</RidiInfo>
          <RidiInfo>청소년 보호 정책</RidiInfo>
        </RidiSiteInfo>

        <CopyRight>© RIDI Corp.</CopyRight>

      </FooterWrapper>
    </FooterBox>
  );
}



const FooterBox = styled.div`
  height:287px;
  width:100%;
  background:#fcfcfd;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:287px;
`;

const IconBox = styled.div`
  margin-top: 20px;
`;

const FooterCommonList = styled.ul`
  list-style: none;
  margin:0px;
  padding:0px;
  display:flex;
  width: 100%;
  justify-content: center;
`;

const RidiInfoBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px 0px;
`;

const Element = styled.li`
  color: ${Color.basicGray};
  margin-right: 12px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01em;
`;

const RidiInfo = styled.li`
  color: ${Color.basicGray};
  font-size: 11px;
  list-style: none;
  line-height: 17px;
  margin-right: 9px;
  margin-bottom: 3px;
`;

const RidiSiteInfo = styled.div`
  display: flex;  
  margin-top: 20px;
`;

const CopyRight = styled.span`
  color: ${Color.basicGray};
  margin-top: 18px;
  font-size: 14px;
`;

const Icon = styled.div`
  color: ${Color.basicGray};
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

export default Footer;