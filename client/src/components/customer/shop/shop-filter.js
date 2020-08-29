import React from "react";
import Filter from "../../../assets/images/Shop/icons/display.png";
import menu from "../../../assets/images/home/icons/menu.svg";
import Select from "react-select";
import { connect } from "react-redux";
import { sortProducts } from "../../../actions/appActions";
const ShopFilter = ({
  sortProducts,
  products,
  filteredProducts,
  filters,
  currentPage,
}) => {
  const sortOptions = [
    {
      label: "Highest To Lowest",
      value: "HL",
    },
    {
      label: "Lowest To Highest",
      value: "LH",
    },
  ];

  const onChangeSort = (option) => {
    sortProducts(option.value);
  };
  var sorted = [];
  if (products !== null && filters.sort != null) {
    var sorted =
      filteredProducts == null
        ? filters.sort == "HL"
          ? products.sort((a, b) => Number(b.price) - Number(a.price))
          : products.sort((a, b) => Number(a.price) - Number(b.price))
        : filters.sort == "HL"
        ? filteredProducts.sort((a, b) => Number(b.price) - Number(a.price))
        : filteredProducts.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (products !== null && filters.sort == null) {
    sorted = filteredProducts == null ? products : filteredProducts;
  }
  let productsToShow = sorted.filter((product, index) => {
    if (index < 15 * currentPage && index >= 15 * (currentPage - 1)) {
      return product;
    }
  });

  return (
    <div className="col-md-12 bg-white mb-2 py-2  shadow-shop">
      <div className="row align-items-center">
        <div className="col-md-7">
          <div className="row">
            <div className="ml-2 ml-2-mb">
              {/* <img className="d-none-mb px-1" src={Filter} alt="" />
              <img className="ml-2 ml-2-mb" width="23px" src={menu} alt="" /> */}
            </div>
            <div className="col">
              <span className="font-Futura-bold ml-4">
                {
                  // products?.length
                  1 > 0 ? (
                    <>
                      Showing{" "}
                      {
                        // skip
                        productsToShow && productsToShow.length
                      }
                      -
                      {
                        productsToShow && products.length //  count
                      }{" "}
                      of{" "}
                      {
                        // count
                      }{" "}
                      results
                    </>
                  ) : (
                    <>
                      Showing{" "}
                      {
                        // skip
                      }
                      -
                      {
                        // count
                      }{" "}
                      of{" "}
                      {
                        // count
                      }{" "}
                      results
                    </>
                  )
                }
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="row align-items-center font-Futura-bold">
            <span className="ml-3">Sort By :</span>
            <div className="form-group col-md-7 col mb-0 p-1">
              <Select options={sortOptions} onChange={onChangeSort} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: state.app.products,
  filteredProducts: state.app.filteredProducts,
  filters: state.app.filters,
  currentPage: state.app.currentPage,
});
export default connect(mapStateToProps, { sortProducts })(ShopFilter);
