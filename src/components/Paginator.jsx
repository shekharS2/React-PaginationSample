import React from 'react';

import './Paginator.css';

const Paginator = (props) => {

    const pages = [   
        props.currPage - 3,
        props.currPage - 2,
        props.currPage - 1,
        props.currPage,
        props.currPage + 1,
        props.currPage + 2,
        props.currPage + 3,
    ].filter(pageNo => pageNo > 0 && pageNo <= Math.ceil(props.totalPosts / props.postsPerPage));


    return (
            <div className='paginator-container'>
                <button disabled={props.currPage === 1} onClick={() => props.handlePageChangeBtn(1)}>GO TO FIRST</button>

                <button disabled={props.currPage === 1} onClick={() => props.handlePageChangeBtn(props.currPage - 1)}>Prev</button>

                <div>
                    {pages.map((pageNo) => {
                        return <button key={pageNo} disabled={props.currPage === pageNo} onClick={() => props.handleGoToPageBtn(pageNo)}>{pageNo}</button>
                    })}
                </div>

                <button disabled={props.currPage === Math.ceil(props.totalPosts / props.postsPerPage)} onClick={() => props.handlePageChangeBtn(props.currPage + 1)}>Next</button>

                <button disabled={props.currPage === Math.ceil(props.totalPosts / props.postsPerPage)} onClick={() => props.handlePageChangeBtn(Math.ceil(props.totalPosts / props.postsPerPage))}>GO TO LAST</button>
            </div>
    );
};

export default Paginator;