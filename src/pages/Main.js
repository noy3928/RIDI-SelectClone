import React from "react";
import SortBox from "../components/SortBox";
import BookList from "../elements/BookList";
import Footer from "../components/Footer";
import Header from "../components/Header"
import PaginationButton from "../elements/PaginationButton";
import Test from "../components/Test";

const Main = () => {
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