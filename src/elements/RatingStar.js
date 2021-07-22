import React,{useEffect} from "react";
import styled from "styled-components"
import startImg from "../img/ratingStar.svg"
import testImg from "../img/Close.svg"
import _ from "lodash";

const RatingStar = (props) => {
const starNum = _.range(1,6)
const [changeImg, setChangeImg] = React.useState(0);
const [estimateWord, setEstimateWord] = React.useState("")
const [is_estimated, setIsEstimated] = React.useState(false)

const setAfterClick = () => {
    setIsEstimated(true) // 평가했다는 것을 true로 바꿔줌 
    
}

const {getRateStar} = props;

const changeStarColor = (number) => {
    setChangeImg(number)
}

useEffect(()=> {
    if(changeImg===1){
        setEstimateWord("별로에요")
    }else if(changeImg===2){
        setEstimateWord("그저 그래요")
    }else if(changeImg===3){
        setEstimateWord("보통이에요")
    }else if(changeImg===4){
        setEstimateWord("좋아요")
    }else if(changeImg===5){
        setEstimateWord("최고에요")
    }
},[changeImg])

return(
    <React.Fragment>
        <PleaseReviewBox>
            {changeImg === 0 ? <PleaseReviewThis >이 책을 평가해주세요!</PleaseReviewThis> : 
            <EstimateMessage>{estimateWord}</EstimateMessage>}
        </PleaseReviewBox>
        <StarRatingBox >
            {starNum.map((num,idx)=>{
                return(
            <StarImgDiv key={idx} nth={changeImg} onClick={()=>{getRateStar(num)}}  onMouseOver={()=>{changeStarColor(num)}} onMouseOut={()=>{changeStarColor(0); setEstimateWord("")}}>
                <StarImg  key={idx}></StarImg>
                <BorderSpan background={num === 5 ? "transparent" : "#f8f9fa"}></BorderSpan>
            </StarImgDiv>
            )})}
        </StarRatingBox>
    </React.Fragment>
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
:nth-child(-n+${(props)=>props.nth}) > div{
    background-image:url(${testImg});
}

`

const PleaseReviewBox = styled.div`
height:auto;
width:100%;
display:flex;
justify-content:center;
`

const PleaseReviewThis = styled.p`
color: #a0a7ac;
font-size:18px;
font-family: "NotoSansBold";
`

const BorderSpan = styled.span`
position:absolute;
background:${(props) => props.background ? `${props.background};`:""};
top:10%;
right:0;
width:2px;
height:38px;
`

const StarImg = styled.div`
background-image:url(${(props) => props.imgURL ? `${props.imgURL};`: startImg});
background-repeat: no-repeat;
width:45px;
height:45px;
filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.1));
`

const EstimateMessage = styled.div` 
    position:relative; 
    width:110px; 
    height:30px;
    color:white;
    background:#448adf; 
    border-radius: 3px;
    display:flex;
    font-size:14px;
    justify-content:center;
    align-items:center;
    margin-bottom:13px;
    font-family: "NotoSansBold";
    :after { 
    border-top:0px solid transparent; 
    border-left: 5px solid transparent; 
    border-right: 5px solid transparent; 
    border-bottom: 5px solid #448adf;
    content:""; 
    position:absolute;
    bottom:-5px;
    left:50px;
    transform:rotate(180deg);  
   }
`

export default RatingStar;