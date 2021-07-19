import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Navigation } from 'swiper/core';
import CategoryModal from "./CategoryModal";
import SortButton from "./SortButton"


  SwiperCore.use([Navigation]);

const CategorySwiper = () => {
return(
<Swiper
                // navigation={true}
            spaceBetween={0}
            slidesPerView={9}
            slidesPerGroup={5}
            style={{width:"100%", borderBottom:"1px solid #dbdbdb"}}
            >
        {/* 나중에는 카테고리 map으로 싸서 출력하기 지금은 테스트 */}
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            <SwiperSlide><Category>소설 전체</Category></SwiperSlide>
            
    </Swiper>
    )
    }

    const Category = styled.button`
    height:45px;
    width:auto;
    border:none;
    background:transparent;
    transition: 0.1s ease-in-out;
    : hover {
        background:#f6f6f6;
    }
`

export default CategorySwiper;