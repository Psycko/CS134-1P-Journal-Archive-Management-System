import React from 'react'
import { useState } from "react"

const Pagination = ({ postsPerPage, setPostsPerPage, totalPosts, paginate, sortType, setSortType }) => {
    const [postPerPage, setPostPerPage] = useState(postsPerPage)

    const pageNumbers = [];

    const change = (event) => {
        if (event.target.value === "") {

        } else {
            setPostsPerPage(event.target.value)
        }
    }
    const posts = (event) => {
        setPostsPerPage = event.target.value
    }

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul class="pagination">
                <button onClick={() => setSortType(sortType * -1)}>Sorting</button>
                <input type='number' onChange={change} />
                {pageNumbers.map(number => (
                    <li key={number} class="page-item">
                        <a onClick={() => paginate(number)} href="##" class='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

{/* <nav>
            <ul class="tw-flex">
                {pageNumbers.map(number => (
                    <li key={number} class="tw-flex tw-flex-row">
                        <a onClick={() => paginate(number)} href="##" class="">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav> */}

export default Pagination
