import React,{useEffect} from "react";
import styled from "styled-components"
import starImg from "../img/ratingStar.svg"
import ratedStar from "../img/ratedStar.svg"
import _ from "lodash";
import { useSelector } from "react-redux";
import { SatelliteSharp } from "@material-ui/icons";

const RatingStar = (props) => {
const {getRateStar, isEdit} = props;

const starNum = _.range(1,6)
const [changeImg, setChangeImg] = React.useState(0);
const [estimateWord, setEstimateWord] = React.useState("")
const [is_estimated, setIsEstimated] = React.useState(false)
const [ratedNum, setRatedNum] = React.useState(0)
console.log(isEdit)

const writtenStar = useSelector(state => state.review.user_comment_info.stars)

console.log(writtenStar)

const setAfterClick = (num) => {
    setIsEstimated(true) // 평가했다는 것을 true로 바꿔줌 
    getRateStar(num)
    setRatedNum(num)
}

const changeStarColor = (number) => {
    setChangeImg(number)
}


//호버할 때 말풍선 글자를 실시간으로 바꿔주기 
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


//첫 입장시 유저가 별점을 매겼는지 확인하고, 해당 별점을 화면에 띄워주기. 댓글이 작성된 것이 확인되면, 유즈 이펙트를 다시 실행. 
useEffect(() => {
    console.log("----레이팅 스타에서 유즈이펙트")

    if(isEdit){
        console.log("이미 작성된 별점이 왜 안나올까?")
        setIsEstimated(true) // 평가했다는 것을 true로 바꿔줌 
        setRatedNum(writtenStar)
    }else{
        setIsEstimated(false)
    }

},[writtenStar])


if(is_estimated){
    return(
        <React.Fragment>
        <PleaseReviewBox>
            {changeImg === 0 ? <PleaseReviewThis margin={"7px"} >내가 남긴 별점 <RatingNum>{ratedNum}.0</RatingNum> </PleaseReviewThis> : 
            <EstimateMessage>{estimateWord}</EstimateMessage>}
        </PleaseReviewBox>
        <StarRatingBox >
            {starNum.map((num,idx)=>{
                return(
            <StarImgDiv  key={idx} nth={changeImg} onClick={()=>{setAfterClick(num)}}  onMouseOver={()=>{changeStarColor(num)}} onMouseOut={()=>{changeStarColor(0); setEstimateWord("")}}>
                <StarImg  key={idx} imgURL={num < ratedNum + 1 ? ratedStar : starImg }></StarImg>
                <BorderSpan background={num === 5 ? "transparent" : "#f8f9fa"}></BorderSpan>
            </StarImgDiv>
            )})}
        </StarRatingBox>
    </React.Fragment>
    )
}



return(
    <React.Fragment>
        <PleaseReviewBox>
            {changeImg === 0 ? <PleaseReviewThis margin={"16px"} >이 책을 평가해주세요!</PleaseReviewThis> : 
            <EstimateMessage>{estimateWord}</EstimateMessage>}
        </PleaseReviewBox>
        <StarRatingBox >
            {starNum.map((num,idx)=>{
                return(
            <StarImgDiv  key={idx} nth={changeImg} onClick={()=>{setAfterClick(num)}}  onMouseOver={()=>{changeStarColor(num)}} onMouseOut={()=>{changeStarColor(0); setEstimateWord("")}}>
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
    background-image:url(${ratedStar});
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
margin-bottom:${(props) => props.margin};
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
background-image:url(${(props) => props.imgURL ? `${props.imgURL}`: starImg});
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

const RatingNum = styled.span`
font-size:36px;
padding-left:8px;
color:#fa722e;
vertical-align: -7%;
line-height: 1em;
font-family: Roboto,sans-serif;
`

export default RatingStar;