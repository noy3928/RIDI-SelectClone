import React from "react";
import styled from "styled-components"
import startImg from "../img/ratingStar.svg"

const RatingStar = () => {
return(
    <StarRatingBox>
        <StarImgDiv>
            <StarImg src={startImg}/>
            <BorderSpan></BorderSpan>
        </StarImgDiv>
        <StarImgDiv>
            <StarImg src={startImg}/>
            <BorderSpan></BorderSpan>
        </StarImgDiv>
        <StarImgDiv>
            <StarImg src={startImg}/>
            <BorderSpan></BorderSpan>
        </StarImgDiv>
        <StarImgDiv>
            <StarImg src={startImg}/>
            <BorderSpan></BorderSpan>
        </StarImgDiv>
        <StarImgDiv>
            <StarImg src={startImg}/>
        </StarImgDiv>
    </StarRatingBox>
)

}

const StarRatingBox = styled.div`
height:auto;
width:100%;
display:flex;
justify-content:center;
`

const StarImgDiv = styled.div`
width:64px;
height:auto;
padding-left:10px;
position:relative;
`

const BorderSpan = styled.span`
position:absolute;
background:#f8f9fa;
top:10%;
right:0;
width:2px;
height:38px;
`


const StarImg = styled.img`
width:auto;
height:auto;
max-width:45px;
max-height:45px;
filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.1));
`


export default RatingStar;