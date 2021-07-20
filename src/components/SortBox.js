import React from "react";
import styled from "styled-components";
import 'swiper/swiper.scss';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, { Navigation } from 'swiper/core';
import CategoryModal from "../elements/CategoryModal";
import SortButton from "../elements/SortButton"
import CategorySwiper from "../elements/CategorySwiper"


  SwiperCore.use([Navigation]);


const SortBox = () => {

    return(
        <React.Fragment>
            <MainSortBox>
                <CategoryModal/>
                <CategorySwiper/>
                <SortButton/>
            </MainSortBox>
        </React.Fragment>
    );
}

const MainSortBox = styled.div`
width:800px;
height:186px;
margin: 0px auto;
padding: 40px 0px 0px;
`


export default SortBox;

