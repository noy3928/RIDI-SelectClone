import React from "react";
import styled from "styled-components";


const BookList = () => {
    return(<MainContainer>
        {/* 우선테스트로 이렇게 다 그리고 데이터 불러올때는 map으로 */}
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>

        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>

        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>

        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
        <ThumnailBox>   
            <ThumnailImg src={"https://img.ridicdn.net/cover/862001394/small?dpi=xhdpi"}/>
            <BookTitle>팅커벨 죽이기</BookTitle>
        </ThumnailBox>
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
`

const BookTitle = styled.div`
font-size:13px;
font-weight:400;
margin:10px 0px 0px;
font-family: "NotoSansRegular";
color:#6f7478;
`

export default BookList;

