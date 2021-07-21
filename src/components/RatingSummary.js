import React from "react";
import styled from "styled-components";
import startImg from "../img/ratingStar.svg"
import graphStar from "../img/graphStar.svg"


const RatingSummary = () => {
    return(
        <SummaryBox>
            <AverageRatingTitle>구매자 별점</AverageRatingTitle>
            <AverageRatingScore>4.6</AverageRatingScore>
            <StarRatingBox>
                <StarImg src={startImg} />
                <StarImg src={startImg} />
                <StarImg src={startImg} />
                <StarImg src={startImg} />
                <StarImg src={startImg} />
            </StarRatingBox>
            <RatingBarGraphListBox>
                <RatingBarGraphList>
                    <GraphStarImg src={graphStar}/>5 
                        <RatingBar>
                            <HightLightBar width={"70%"}></HightLightBar>
                        </RatingBar>
                </RatingBarGraphList>
                <RatingBarGraphList>
                    <GraphStarImg src={graphStar}/>4 
                        <RatingBar>
                            <HightLightBar width={"20%"}></HightLightBar>
                        </RatingBar>
                </RatingBarGraphList>
                <RatingBarGraphList>
                    <GraphStarImg src={graphStar}/>3 
                        <RatingBar>
                            <HightLightBar width={"10%"}></HightLightBar>
                        </RatingBar>
                </RatingBarGraphList>
                <RatingBarGraphList>
                    <GraphStarImg src={graphStar}/>2 
                        <RatingBar>
                            <HightLightBar width={"4%"}></HightLightBar>
                        </RatingBar>
                </RatingBarGraphList>
                <RatingBarGraphList>
                    <GraphStarImg src={graphStar}/>1 
                        <RatingBar>
                            <HightLightBar width={"8%"}></HightLightBar>
                        </RatingBar>
                </RatingBarGraphList>
            </RatingBarGraphListBox>
            <ParticipantCount>76명이 평가함</ParticipantCount>
        </SummaryBox>
    )
}

const SummaryBox = styled.div`
width:120px;
height:100%;
diplay:flex;
flex-direction: column;
justify-content:center;
margin:7px 14px 0px 0px;
padding:0px 5px;
`

const AverageRatingTitle = styled.div`
    font-size:12px;
    color:#828990;
    display:flex;
    justify-content:center;
`

const AverageRatingScore = styled.div`
    font-size:34px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: -.03em;
    display:flex;
    justify-content:center;
    margin:7px 0px -7px 0px;
    padding:0px;
`

const StarRatingBox = styled.div`
display:flex;
justify-content:center;
margin:10px 0px 15px 0px;
`

const StarImg = styled.img`
width:auto;
height:auto;
max-width:16px;
max-height:16px;
`

const RatingBarGraphListBox = styled.div`
height:auto;
display:flex;
flex-direction:column;
align-items:center;
`

const RatingBarGraphList =styled.div`
display:flex;
width:100%;
align-items:center;
justify-center:space-between;
font-size:12px;
font-family: 'Roboto', sans-serif;
color:#828990;
margin-top:4px;
:first-child{
    margin-top:0px;
}
`

const GraphStarImg = styled.img`
width:auto;
height:auto;
max-width:8px;
max-height:8px;
margin-right:3px;
`

const RatingBar = styled.div`
background: #e8edf3;
box-shadow: inset 0 1px 1px 0 rgb(0 0 0 / 10%);
width: 72px;
height: 8px;
margin-left:5px;
`

const HightLightBar = styled.div`
background: linear-gradient(180deg, #9daab5, #718392);
height: 8px;
width:${(props) => props.width};
`

const ParticipantCount = styled.div`
border-top:1px solid #e5e5e5;
padding:8px 3px;
margin-top:6px;
font-size:12px;
color:#9faabc;
display:flex;
justify-content:center;
`


export default RatingSummary;