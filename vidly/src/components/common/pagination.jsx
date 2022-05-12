import React from "react";

import _ from "lodash"; // lodash, underscore'un optimize edilmiş hali
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize); // bölüm sonucunu tam sayıya yuvarlar

  //   console.log(currentPage);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1); //1, 2, ... pagesCount da dahil olmak üzere bir dizi oluşturur.

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {/* <li key={previous} className="page-item">
            <a className="page-link" onClick={props.onPageChange}>
              Previous
            </a>
          </li> */}

          {/* map metodu kullanıldığı için "key" lazım. Elle yazılsa sorun olmuyor */}
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}

          {/* <li key={next} className="page-item">
            <a className="page-link" onClick={props.onPageChange}>
              Next
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

// metot yanlış yazılırsa (proptypes ya da PropTypes gibi) çalışmayacaktır !!!
//.propTypes olmalı. Tüm veri tipleri için reactjs.org'dan "type checking" olarak
// araştırınız...
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
