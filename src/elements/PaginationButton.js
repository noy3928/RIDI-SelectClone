import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as bookActions} from "../redux/modules/book"
import styled from 'styled-components';
import _ from "lodash";

import NextImg from "../img/NextButton.png"
import PrevImg from "../img/prevButton.png"



const PaginationButton = () => {
    const dispatch = useDispatch();
    const [currentPage, setcurrentPage] = useState(1)
    const totalPageNum = useSelector((state) => state.book.pageNum)
    const lastSlideNum = Math.ceil(totalPageNum/10) // 전체 슬라이드의 갯수를 구하기 
    const [currentSlideNum, setCurrentSlideNum] = useState(1); //현재 슬라이드의 번호를 구하기
    const [startPage, setStartPage] = useState(1); //해당 슬라이드의 첫번째 페이지를 구하기 
    

   //화면이 로드되면 책을 불러오기 
   useEffect(()=>{
        dispatch(bookActions.getPageNumAPI())
    },[])

    //page number로 책 로드하기. 
    const getBooksByPage = (pageNumber) => {
        dispatch(bookActions.loadBookAPI(pageNumber))
        setcurrentPage(pageNumber)
    }

    //첫번째 페이지로 이동하는 함수 
    const moveToFirstPage = ()=> {
        dispatch(bookActions.loadBookAPI(1))
        setcurrentPage(1)
        setCurrentSlideNum(1)
        setStartPage(1)
    }

    //마지막 페이지로 이동하는 함수 
    const moveToLastPage = () => {
        dispatch(bookActions.loadBookAPI(totalPageNum))
        setcurrentPage(totalPageNum)
        setCurrentSlideNum(lastSlideNum)
        setStartPage((lastSlideNum-1)*10 + 1)
    }

    //다음 슬라이드로 이동하는 함수
    const clickNextButton = () => {
        setCurrentSlideNum(currentSlideNum +1) 
        setStartPage(startPage + 10)
    }

    //이전 슬라이드로 이동하는 함수 
    const clickPrevButton = () => {
        setCurrentSlideNum(currentSlideNum -1)
        setStartPage(startPage - 10)
    }

 
    //페이지 전체 슬라이드가 10를 넘지 않을 경우 
    if(lastSlideNum == 0){
        const belowTen = (totalPageNum % 10) + 1 
        const pages = _.range(startPage, belowTen)
        return(
        <PaginationWrapper>
            <PaginationBox>
                {pages.map((page, idx)=>{
                    return(<PageButton key={idx} className={page === currentPage ? "active" : null} onClick={()=>{
                        getBooksByPage(page)
                    }}>{page}</PageButton>)
                })}
            </PaginationBox>
            <LastPageButton onClick={()=>{
                moveToLastPage()
            }}>마지막</LastPageButton>
        </PaginationWrapper>
        )
    }

    //페이지 전체 슬라이드가 10개가 넘지만, 
    if(lastSlideNum !== currentSlideNum){
        const pages = _.range(startPage, startPage+10)
        return(
        <PaginationWrapper>
            {currentSlideNum > 1 ? <FirstPageButton onClick={()=>{
                moveToFirstPage()
            }}>처음</FirstPageButton> : ""}
            {currentSlideNum > 1 ? <PrevButton onClick={()=>{clickPrevButton(); getBooksByPage(startPage-10)}}><PrevIcon src={PrevImg}/></PrevButton>: ""}
            <PaginationBox>
                {pages.map((page, idx)=>{
                    return(<PageButton key={idx} className={page === currentPage ? "active" : null} onClick={()=>{
                        getBooksByPage(page)
                    }}>{page}</PageButton>)
                })}
            </PaginationBox>
            <NextButton onClick={()=>{clickNextButton(); getBooksByPage(startPage + 10)}}>
               <NextIcon src={NextImg}/>
            </NextButton>
            <LastPageButton onClick={()=>{
                moveToLastPage()
            }}>마지막</LastPageButton>
        </PaginationWrapper>)

    }

    if(lastSlideNum == currentSlideNum){
        const belowTen = (totalPageNum % 10) 
        const pages = _.range(startPage, startPage + belowTen)

        return(
        <PaginationWrapper>
            <FirstPageButton onClick={()=>{
                moveToFirstPage()
            }}>처음</FirstPageButton>
            <PrevButton onClick={()=>{clickPrevButton(); getBooksByPage(startPage-10)}}><PrevIcon src={PrevImg}/></PrevButton>
            <PaginationBox>
                {pages.map((page, idx)=>{
                    return(<PageButton key={idx} className={page === currentPage ? "active" : null} onClick={()=>{
                        getBooksByPage(page)
                    }}>{page}</PageButton>)
                })}
            </PaginationBox>
        </PaginationWrapper>)

    }
}

const PaginationWrapper = styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    padding:0px 0px 60px 0px;
`

const PaginationBox = styled.div`
    width:auto;
    height:32px;
    border: 1px solid #d2d5d9;
    border-radius:4px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#828990;
    font-size:13px;
    font-family: 'Roboto', sans-serif;
    margin: 0px 6px;
    
`

const PageButton = styled.div`
    width:42px;
    cursor:pointer;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-right: 1px solid #d2d5d9;
    :hover{
       background: #e7e7eb;
    }
    :last-child {
        border:none;
    }
`

const NextButton = styled.div`
border: 1px solid #d2d5d9;
height:32px;
width:42px;
border-radius:4px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
margin:0px 6px 0px 0px;
:hover{
    background: #e7e7eb;
 }
`
const NextIcon = styled.img`
width:auto;
height:auto;
max-width:40px;
max-height:40px;
`

const PrevButton = styled.div`
margin:0px 0px 0px 6px;
border: 1px solid #d2d5d9;
height:32px;
width:42px;
border-radius:4px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
:hover{
    background: #e7e7eb;
 }
`

const PrevIcon = styled.img`
width:auto;
height:auto;
max-width:40px;
max-height:40px;
`

const LastPageButton = styled.div`
border: 1px solid #d2d5d9;
height:32px;
width:54px;
border-radius:4px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
:hover{
    background: #e7e7eb;
 }
 font-family: 'Roboto', sans-serif;
 font-size:13px;
 color:#808991;
`

const FirstPageButton = styled.div`
border: 1px solid #d2d5d9;
height:32px;
width:42px;
border-radius:4px;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
:hover{
    background: #e7e7eb;
 }
 font-family: 'Roboto', sans-serif;
 font-size:13px;
 color:#808991;
`

//#448adf

export default PaginationButton;




{/* <nav className="d-flex justify-content-center">
            <ul className="pagination">
                {pages.map((page,idx) => (
                    <li className={page === currentPage ? "page-item active" : "page-item"} key={idx} onClick={()=>{
                        getBooksByPage(page)
                    }}> <p className="page-link">{page}</p></li>
                ))}
            </ul>
        </nav>) */}