import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { connect } from "react-redux";
import { setFilters } from "../../../actions/appActions";
import DressTypeFilter from "./filters/DressTypeFilter";
import RangeFilter from "./filters/RangeFilter";
import FilterSizes from "./filters/DressSizeFilter";
import FindYourOwnStyle from "./filters/FindYourOwnStyle";
const Filters = ({ loadingProducts, filters, setFilters }) => {
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
 
  return (
    <div className="filters">
      <div className='mb-3'>
        <FindYourOwnStyle />
      </div>
      <DressTypeFilter />
      <FilterSizes />
      <RangeFilter />
    </div>
  );
};

Filters.Colors = ({ colors }) => (
  <div className="filters__item">
    <div className="filters__colors">
      {colors.map((color) => (
        <span
          key={color}
          style={{
            backgroundColor: color,
          }}
          className="filters__color"
        />
      ))}
    </div>
  </div>
);

Filters.ProductSort = () => (
  <div className="filters__item filters__item--sort">
    <p>Display</p>
    <div className="filters__sort">
      <p>Sort By</p>
    </div>
  </div>
);

Filters.propTypes = {
  children: PropTypes.node.isRequired,
};

Filters.Colors.defaultProps = {
  colors: ["red", "green", "blue"],
};

Filters.Colors.propTypes = {
  colors: PropTypes.instanceOf(Array),
};
const mapStateToProps = (state) => ({
  filters: state.app.filters,
  loadingProducts: state.app.loadingProducts,
});
export default connect(mapStateToProps, { setFilters })(Filters);
