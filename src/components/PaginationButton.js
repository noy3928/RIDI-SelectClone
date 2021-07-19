import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import _ from "lodash"


const PaginationButton = () => {
    const [currentPage, setcurrentPage] = useState(1)

    const book_list = useSelector((state) => state.book.book_list)

    const pageCount = book_list? Math.ceil(book_list.length / 24) : 0;
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1)
    const pagination = (pageNum) => {
        setcurrentPage(pageNum);
        const startIndex = (pageNum - 1) * 24;
        const paginatedPost = _(book_list).slice(startIndex).take(book_list).value();
    }

    return(
    <nav className="d-flex justify-content-center">
            <ul className="pagination">
                {pages.map((page) => (
                    <li className={page === currentPage ? "page-item active" : "page-item"}> <p className="page-link" onClick={()=>pagination(page)}>{page}</p></li>
                ))}
                
            </ul>
        </nav>);
}

export default PaginationButton;
