import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as bookActions} from "../redux/modules/book"
import _ from "lodash";


const PaginationButton = () => {
    const dispatch = useDispatch();
    const [currentPage, setcurrentPage] = useState(1)

    const book_list = useSelector((state) => state.book.book_list)

    const pageCount = book_list? Math.ceil(book_list.length / 24) : 0;

    if(pageCount === 1) return null;
    const pages = _.range(1, 11)
    const pagination = (pageNum) => {
        setcurrentPage(pageNum);
        const startIndex = (pageNum - 1) * 24;
        const paginatedPost = _(book_list).slice(startIndex).take(book_list).value();
    }
    
    //page number로 책 로드하기. 
    const getBooksByPage = (pageNumber) => {
        dispatch(bookActions.loadBookAPI(pageNumber))
    }

    return(
    <nav className="d-flex justify-content-center">
            <ul className="pagination">
                {pages.map((page,idx) => (
                    <li className={page === currentPage ? "page-item active" : "page-item"} key={idx}> <p className="page-link">{page}</p></li>
                ))}
            </ul>
        </nav>);
}

export default PaginationButton;
