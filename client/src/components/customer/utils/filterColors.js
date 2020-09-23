import React, { useState } from "react";
import { connect } from "react-redux";
import { setChoosenProduct } from "../../../actions/appActions";
import { SketchPicker } from "react-color";
const FilterColors = ({
  currentProduct,
  choosenProduct,
  setChoosenProduct,
}) => {
  const FilterColor = ({ color }) => {
    const isActive =
      choosenProduct?.color === color ? "border border-primary" : "";
    return (
      <span
        className={`filters__color ml-2 cursor-pointer  ${isActive}`}
        onClick={() => {
          setChoosenProduct({ color });
          // dispatch(setColor(color));
        }}
        style={{ backgroundColor: color }}
      ></span>
    );
  };
  const [showPicker, setShowPicker] = useState(false);
  const [currentColor, setcurrentColor] = useState(null);

  var colors = currentProduct?.dressColor;
  if (currentColor) {
    colors = [...colors, currentColor];
  }
  return (
    <div className=" font-Futura-light ">
      <div className="filters w-100 d-flex justify-content-between align-items-center">
        <h6 className="mb-0 font-Futura-light">COLOR</h6>

        <div className="filters__item d-flex  shadow-shop ">
          {colors?.map((color) => (
            <FilterColor key={color} color={color} />
          ))}
        </div>
      </div>
      <a
        id={"addColorBtn"}
        href={"#!"}
        className="btn btn-light"
        onClick={() => {
          setShowPicker(!showPicker);
          if (showPicker) {
            // setdata({
            //   ...data,
            //   dressColor: [...data.dressColor, currentColor],
            // });
          }
        }}
      >
        Custom Color
                </a>

      {showPicker && (
        <SketchPicker
          color={currentColor || '#ffffff'}
          onChangeComplete={(val) => {
            console.log(val);
            setChoosenProduct({ color: val.hex });
            setcurrentColor(val.hex);
          }}
        />
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentProduct: state.app.currentProduct,
  choosenProduct: state.app.choosenProduct,
});
export default connect(mapStateToProps, { setChoosenProduct })(FilterColors);
