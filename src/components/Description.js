import React from "react";
import styled from "styled-components";
import Color from "../shared/Color";

const Description = (props) => {

  return (
    <DescWrapper>
      <IntroWrapper>
        <BookIntroTitle>책 소개</BookIntroTitle>
        <BookIntroText>
          한국 소설에 가장 강렬하게 새겨질 이름, 조각(爪角)
          지금껏 우리가 기다려온 새로운 여성 서사의 탄생
          한국 소설에 가장 강렬하게 새겨질 새로운 여성 서사를 탄생시킨 구병모 작가의 『파과』가 재출간되었다. 40여 년간 날카롭고 냉혹하게 청부 살인을 업으로 삼아온 60대 여성 킬러 ‘조각(爪角)’. 몸도 기억도 예전 같지 않게 삐걱거리기 시작하면서 이제는 퇴물 취급을 받는다. 노화와 쇠잔의 과정을 겪으며 조각은 새삼스레 ‘타인’의 눈 속에 둥지를 튼 공허를 발견하게 된다. 소멸의 한 지점을 향해 부지런히 허물어지고 있는 모든 것, 깨지고 상하고 뒤틀린 살아 있는 모든 것에 대해 연민을 느끼며, 조각의 마음속에 어느새 지키고 싶은 것들이 하나둘 생겨나기 시작한다.
        </BookIntroText>
      </IntroWrapper>
    </DescWrapper>
  );
}

export default Description;

const DescWrapper = styled.div`
  width: 100%;
`;

const IntroWrapper = styled.section`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  padding: 30px 0;
  width: 800px;
  border-bottom: 1.5px solid ${Color.borderGray};
`;

const BookIntroTitle = styled.h2`
  display: flex;
  align-self: flex-start;
  margin: 0px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4em;
`;

const BookIntroText = styled.p`
  overflow: hidden;
  color: ${Color.darkGray};
  font-size: 17px;
  line-height: 1.7em;
  margin: 20px 0px 0px 0px;
`;

