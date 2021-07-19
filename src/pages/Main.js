import React, { useEffect } from "react";
import styled from "styled-components";
import SortBox from "../components/SortBox";
import BookList from "../elements/BookList";
import Footer from "../components/Footer";
import Header from "../components/Header"
import { useSelector, useDispatch } from "react-redux";
import PaginationButton from "../components/PaginationButton";

const Main = () => {
    const dispatch = useDispatch();


    return(
        <React.Fragment>
            <Header />
            <SortBox/>
            <BookList/>
            <PaginationButton/>
            <Footer/>
        </React.Fragment>
    )
}

export default Main;