import React from 'react';

const Pagination = ({ page, limit, totalEvents, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalEvents / limit); i++) {
    pageNumber.push(i);
  }

  return (
    <div className={'pagination__container'}>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li className="page-item" key={number}>
            <a
              href="#"
              className={page === number ? 'current-page' : 'page'}
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;