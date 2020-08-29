import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentPage, filterProducts } from "../../../actions/appActions";

const Pagination = ({
  currentPage,
  setCurrentPage,
  products,
  filteredProducts,
}) => {
  const [skip, setSkip] = useState(0);

  // useEffect(() => {
  //   if (skip !== 0) {
  //     dispatch(FETCH_PRODUCTS(skip));
  //   }
  // }, [currentPage, dispatch, skip]);
  const [buttons, setButtons] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  useEffect(() => {
    setButtons(
      totalPages.filter((b, i) => i > currentPage - 5 && i < currentPage + 5)
    );
  }, [currentPage, totalPages]);
  useEffect(() => {
    if (products != null && filteredProducts == null) {
      let pages = Number((products.length / 15).toString().split(".")[0]) + 1;
      setTotalPages(
        new Array(
          // pages
          pages
        )
          .fill()
          .map((e, i) => {
            return i + 1;
          })
      );
    } else if (filteredProducts != null) {
      console.log("filtered pagingation");
      let pages =
        Number((filteredProducts.length / 15).toString().split(".")[0]) + 1;
      console.log(pages);
      if (filteredProducts.length == 0) pages = 0;
      setTotalPages(
        new Array(
          // pages
          pages
        )
          .fill()
          .map((e, i) => {
            return i + 1;
          })
      );
    }
    {
    }
  }, [products, filteredProducts]);

  if (products == null) return <></>;
  let pages = Number((products.length / 15).toString().split(".")[0]);
  // let buttons = new Array(
  //   // pages
  //   pages
  // ).fill();
  return (
    <nav>
      {products == null || buttons.length == 0 ? (
        ""
      ) : (
        <ul class="pagination">
          {buttons.map((page, idx) => (
            <li
              key={idx}
              class={`page-item bg-danger  border-black cursor-pointer `}
            >
              <span
                onClick={() => {
                  setSkip(
                    // limit *
                    idx + 2
                  );
                  setCurrentPage(page);
                }}
                id={"paginationLink"}
                class={`page-link ${
                  page === currentPage ? "bg-black text-white" : ""
                }`}
              >
                {page}
              </span>
            </li>
          ))}

          {Number() < currentPage && (
            // pages
            <>
              <li class="page-item cursor-pointer ">
                <span
                  onClick={() => {
                    setCurrentPage(
                      currentPage + 1 <= totalPages
                        ? currentPage + 1
                        : currentPage
                    );
                    setSkip(
                      currentPage
                      // *  limit
                    );
                  }}
                  class="page-link"
                >
                  Next
                </span>
              </li>
              <li class="page-item cursor-pointer ">
                <span
                  onClick={() => {
                    setCurrentPage(
                      currentPage + 3 <= totalPages
                        ? currentPage + 3
                        : currentPage
                    );
                    setSkip(
                      currentPage * 1
                      // limit
                    );
                  }}
                  class="page-link"
                >
                  <i className="fa fa-angle-right"></i>
                  <i className="fa fa-angle-right"></i>
                </span>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};
const mapStateToProps = (state) => ({
  currentPage: state.app.currentPage,
  products: state.app.products,
  filteredProducts: state.app.filteredProducts,
});
export default connect(mapStateToProps, { setCurrentPage })(Pagination);
