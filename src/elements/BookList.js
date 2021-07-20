import React, {useEffect} from "react";
import styled from "styled-components";
import {history} from "../redux/ConfigStore"
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as bookActions} from "../redux/modules/book"




const BookList = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(bookActions.loadBookAPI())
    },[])
    const book_list = useSelector((state) => state.book.book_list);
    console.log(book_list)

    return(
    <MainContainer>
        {book_list.map((l, idx) => {
            return(
                <ThumnailBox key={l.id}>   
                    <ThumnailImg src={l.imgUrl} onClick={()=>{history.push(`/bookdetail/${l.id}`)}} />
                    <BookTitle onClick={()=>{history.push(`/bookdetail/${l.id}`)}}>{l.bookname}</BookTitle>
            </ThumnailBox>
            )
        })}
    </MainContainer>);
}


const MainContainer = styled.div`
width:800px;
margin:0px auto;
height:auto;
display:grid;
grid-template-rows: 1fr 1fr 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
grid-row-gap: 20px;
padding:16px 0px 60px 0px;
`

const ThumnailBox = styled.div`
width:auto;
height:auto;
`

const ThumnailImg = styled.img`
width:auto;
max-width:120px;
height:auto;
cursor:pointer;
`

const BookTitle = styled.div`
font-size:13px;
font-weight:400;
margin:10px 0px 0px;
font-family: "NotoSansRegular";
color:#6f7478;
cursor:pointer;
`

export default BookList;

