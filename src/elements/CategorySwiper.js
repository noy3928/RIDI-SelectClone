import React, { useEffect } from "react";
import styled from "styled-components";

//스와이퍼 라이브러리
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

import {swiperCategoryList} from "../shared/CategoryList"
import {actionCreators as bookActions} from "../redux/modules/book"
import { useDispatch, useSelector } from "react-redux";

const CategorySwiper = () => {
    const dispatch = useDispatch();
    const _categoryNum = useSelector(state => state.book.category)
    const _CategoryList = swiperCategoryList(_categoryNum)
    const [categoryNum, setCategoryNum] = React.useState(100);

    //카테고리 번호에 따라서 전체 카테고리 번호를 바꿔주기. 이 값은 슬라이드에서 map을 돌릴때 사용된다. 
    useEffect(()=>{
        if(_categoryNum === 100){
            setCategoryNum(100)
        }else if(_categoryNum === 200){
            setCategoryNum(200)
        }else if(_categoryNum === 300){
            setCategoryNum(300)
        }
    },[_categoryNum])

    //슬라이드의 width값을 auto로 만들어주기.
    useEffect(() => {
        const swiper = document.querySelectorAll('.swiper-slide')
        _CategoryList.map((l,idx) => (
        swiper[idx].style.setProperty("width", "auto", "important")
        ))
    })

    //카테고리 버튼을 누를 때마다, 실행될 함수들. 
    const changeCategoryNum = (num) => {
        dispatch(bookActions.getCategoryNum(num))
        dispatch(bookActions.loadBookAPI())
        dispatch(bookActions.getPageNumAPI())
    }
 
return(
    <Swiper
            spaceBetween={10}
            slidesPerView={9}
            slidesPerGroup={5}
            style={{width:"100%", borderBottom:"1px solid #dbdbdb"}}
            >
            {_CategoryList.map((name,idx) => {
                return(
                    <SwiperSlide className="swiper-slide" key={idx} ><Category onClick={() => {
                        changeCategoryNum(categoryNum + idx)
                    }}>{name}</Category></SwiperSlide>
                )
            })}
    </Swiper>
    )
    }

    const Category = styled.div`
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14.5px;
    color:#828990;
    width:auto;
    padding:0px 2px;
    border:none;
    background:transparent;
    transition: 0.1s ease-in-out;
    cursor:pointer;
    : hover {
        background:#f6f6f6;
    }
`

export default CategorySwiper;