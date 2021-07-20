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
    console.log(totalPageNum)
    let nextPageNum = Math.ceil(totalPageNum/10)
    const [checkPageNum, setCheckPageNum] = useState(1);
    const [startPage, setStartPage] = useState(1);
    


    //page number로 책 로드하기. 
    const getBooksByPage = (pageNumber) => {
        dispatch(bookActions.loadBookAPI(pageNumber))
        setcurrentPage(pageNumber)
    }


    const clickNextButton = () => {
        setCheckPageNum(checkPageNum +1) 
        setStartPage(startPage + 10)
    }

    const clickPrevButton = () => {
        setCheckPageNum(checkPageNum -1)
        setStartPage(startPage - 10)
    }

    useEffect(()=>{
        dispatch(bookActions.getPageNumAPI())
    },[])


    if(nextPageNum == 0){
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
        </PaginationWrapper>
        )
    }

    if(nextPageNum !== checkPageNum){
        const pages = _.range(startPage, startPage+10)
        console.log("---startpage", startPage)
        console.log(currentPage)
        return(
        <PaginationWrapper>
            {checkPageNum > 1 ? <PrevButton onClick={()=>{clickPrevButton(); getBooksByPage(startPage-10)}}><PrevIcon src={PrevImg}/></PrevButton>: ""}
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
            <LastPageButton>마지막</LastPageButton>
        </PaginationWrapper>)

    }

    if(nextPageNum == checkPageNum){
        const belowTen = (totalPageNum % 10) 
        const pages = _.range(startPage, startPage + belowTen)
        return(
        <PaginationWrapper>
            <FirstPageButton>처음</FirstPageButton>
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