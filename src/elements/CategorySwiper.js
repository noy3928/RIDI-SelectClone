import React, { useEffect } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Navigation } from 'swiper/core';

import {CategoryList} from "../shared/CategoryList"
import {actionCreators} from "../redux/modules/book"
import { useSelector, useDispatch } from "react-redux";


  SwiperCore.use([Navigation]);

const CategorySwiper = () => {
    const dispatch = useDispatch();
    const _CategoryList = CategoryList.fiction

    useEffect(() => {
        const swiper = document.querySelectorAll('.swiper-slide')
        _CategoryList.map((l,idx) => {
        swiper[idx].style.setProperty("width", "auto", "important");
        })
    })

    const changeCategoryNum = (num) => {
        dispatch(actionCreators.getCategoryNum(num))
        dispatch(actionCreators.loadBookAPI())
    }
 
return(
    <Swiper
            // navigation={true}
            spaceBetween={10}
            slidesPerView={9}
            slidesPerGroup={5}
            style={{width:"100%", borderBottom:"1px solid #dbdbdb"}}
            >
            {_CategoryList.map((name,idx) => {
                return(
                    <SwiperSlide className="swiper-slide" key={idx} ><Category onClick={() => {
                        changeCategoryNum(100 + idx)
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