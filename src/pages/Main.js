import React from "react";
import styled from "styled-components";
import SortBox from "../components/SortBox";
import BookList from "../elements/BookList";
import Footer from "../components/Footer";

const Main = () => {
    return(
        <React.Fragment>
            <SortBox/>
            <BookList/>
            <Footer/>
        </React.Fragment>
    )
}

export default Main;