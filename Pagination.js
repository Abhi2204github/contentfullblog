import React from 'react';



const PaginationComponent= ({postsPerPage, totalPosts}) => {
    const pageNumbers = [];

    for(i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
    return
    <nav>
        <ul className='pagination'>
            {pageNumbers.}
        </ul>
    </nav>

}

export default PaginationComponent;

// continue at pageNumbers.