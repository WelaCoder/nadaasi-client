import React, { useCallback, useState } from "react";

import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { SketchPicker } from "react-color";
import { useDropzone } from "react-dropzone";
import Toggle from "react-toggle";
import axios from "axios";
import { OPTIONS } from "../../config/selectConfig";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { addProduct } from "../../actions/appActions";
const ProductForm = ({ addProduct, addingProduct }) => {
  const [images, setImages] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [currentColor, setcurrentColor] = useState("#ffffff");
  const [inStock, setInStock] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setdata] = useState({
    images: [],
    name: "",
    price: "",
    dressType: "",
    dressSize: [],
    bodyType: [],
    dressColor: [],
    fabric: "",
    closure: "",
    length: "",
    neckLine: "",
    waistLine: "",
    details: "",
    modelHeightSize: "",
    inStock: true,
  });

  const [placeholder, setPlaceHolder] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const placeholderArray = [];
    setImages(acceptedFiles);

    acceptedFiles.map((file) =>
      placeholderArray.push(URL.createObjectURL(file))
    );

    setPlaceHolder(placeholderArray);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSubmit = async () => {
    // e.preventDefault();
    if (
      data.price == "" ||
      data.length == "" ||
      data.neckLine == "" ||
      data.waistLine == "" ||
      data.details == "" ||
      data.modelHeightSize == "" ||
      data.name == "" ||
      data.dressType == "" ||
      data.fabric == "" ||
      data.closure == "" ||
      data.dressSize.length < 1 ||
      data.dressColor.length < 1 ||
      images.length < 1 ||
      data.bodyType.length < 1
    ) {
      toast.error("Please enter all fields for the dress.");
      return;
    }
    setIsLoading(true);
    const product = new FormData();
    images.map((file) => product.append("images", file));
    product.append("price", data.price);
    product.append("name", data.name);
    product.append("rating", "5");
    product.append("size", data.dressSize);
    product.append("color", data.dressColor);
    product.append("dressType", data.dressType);
    product.append("inStock", data.inStock);
    product.append("details", data.details);
    product.append("fabric", data.fabric);
    product.append("closure", data.closure);
    product.append("length", data.length);
    product.append("neckline", data.neckLine);
    product.append("waistline", data.waistLine);
    product.append("modelHeightSize", data.modelHeightSize);
    product.append("bodyType", data.bodyType);

    console.log("submitted");
    console.log(data);
    let success = await addProduct(product);
    setIsLoading(false);
    if (success) toast.success("Successfully added new product");
  };
  const onChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-between">
          <h3 className="mb-0 font-weight-bold text-info">Upload Product</h3>
          <div className="d-flex justify-content-end align-items-center">
            <span className="mr-2">In Stock</span>
            <Toggle
              id="123"
              defaultChecked={inStock}
              onChange={(e) => {
                setdata({
                  ...data,
                  inStock: e.target.checked,
                });
              }}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <div className="bg-white my-3 d-flex justify-content-center border shadow-sm py-5 mb-2">
                <span className="text-info font-weight-bold">
                  Drop the files here ...
                </span>
              </div>
            ) : (
              <div className="bg-white my-3 d-flex justify-content-center border shadow-sm py-5 mb-2">
                <span className="text-info font-weight-bold">
                  Drag n Drop Image Here Or Click to Select..
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-12">
          <div className="d-flex mb-3 wrap">
            {placeholder.map((img) => (
              <img
                className="img-thumbnail h-300px mr-3 mb-2"
                src={img}
                alt={img}
              />
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChange}
              // ref={register}
              required
              className="form-control"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="price"
              value={data.price}
              onChange={onChange}
              required
              // ref={register}
              placeholder="Price"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <Select
              defaultValue={"casual"}
              placeholder="Select Dress Type.."
              name="dressType"
              onChange={(e) => {
                setdata({
                  ...data,
                  dressType: e.value.toString(),
                });
              }}
              options={OPTIONS.dressTypeOptions}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <Select
              defaultValue={[]}
              isMulti
              placeholder="Select Dress Size.."
              name="colors"
              // innerRef={register}
              options={OPTIONS.dressSizeOptions}
              onChange={(values) => {
                values !== null &&
                  setdata({
                    ...data,
                    // dressColor: "value",
                    dressSize: values.map((value) => value.value),
                  });
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <Select
              defaultValue={[]}
              isMulti
              placeholder="Select Body Type.."
              name="bodyType"
              // innerRef={register}
              options={OPTIONS.bodyTypeOptions}
              onChange={(values) => {
                values !== null &&
                  setdata({
                    ...data,
                    // dressColor: "value",
                    bodyType: values.map((value) => value.value),
                  });
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div className="row">
              <div className="col-5">
                <a
                  id={"addColorBtn"}
                  href={"#!"}
                  className="btn btn-light"
                  onClick={() => {
                    setShowPicker(!showPicker);
                    if (showPicker) {
                      setdata({
                        ...data,
                        dressColor: [...data.dressColor, currentColor],
                      });
                    }
                  }}
                >
                  Add Color
                </a>
              </div>
              <div className="col-7">
                <div className="d-block">
                  <div
                    className="row"
                    style={{
                      // height: "27px",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      // padding: "20px",
                      // width: "30px",
                    }}
                  >
                    {data.dressColor.map((color) => (
                      <div
                        className="col-lg-2 col-md-2 p-0"
                        onClick={() => {
                          setdata({
                            ...data,
                            dressColor: data.dressColor.filter(
                              (value) => value != color
                            ),
                          });
                        }}
                      >
                        <div
                          className={"my-2  "}
                          style={{
                            height: "27px",
                            color: "blue",
                            borderRadius: "7px",
                            // width: "30px",
                            marginLeft: "5px",
                            marginRight: "5px",
                            backgroundColor: color,
                            border:
                              color == "#ffffff" ? "1px solid #f1f1f1" : "",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {showPicker && (
              <SketchPicker
                color={currentColor}
                onChangeComplete={(val) => {
                  console.log(val);

                  setcurrentColor(val.hex);
                }}
              />
            )}
          </div>
          {/* <div className="form-group">
            <CreatableSelect
              isMulti
              placeholder="Select Dress Color.."
              options={OPTIONS.dressColorOptions}
              onChange={(values) => {
                values !== null &&
                  setDressColor(values.map(({ value }) => value));
              }}
            />
          </div> */}
        </div>
        <div className="col-md-12">
          <div className="d-flex justify-content-between">
            <h4 className="font-weight-bold text-info">Product Details</h4>
            <span className="tag ">Optional</span>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <input
                  name="closure"
                  // ref={register}
                  value={data.closure}
                  onChange={onChange}
                  required
                  type="text"
                  className="form-control"
                  placeholder="Enter Closure"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input
                  name="fabric"
                  value={data.fabric}
                  onChange={onChange}
                  required
                  // ref={register}
                  type="text"
                  className="form-control"
                  placeholder="Enter Fabric"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input
                  name="length"
                  value={data.length}
                  onChange={onChange}
                  required
                  // ref={register}
                  type="text"
                  className="form-control"
                  placeholder="Enter Length"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="neckLine"
                  value={data.neckline}
                  onChange={onChange}
                  required
                  // ref={register}
                  type="text"
                  className="form-control"
                  placeholder="Enter Neckline"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="waistLine"
                  // ref={register}
                  value={data.waistline}
                  onChange={onChange}
                  required
                  type="text"
                  className="form-control"
                  placeholder="Enter Waistline"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="details"
                  // ref={register}
                  value={data.details}
                  onChange={onChange}
                  required
                  type="text"
                  className="form-control"
                  placeholder="Enter Details"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="modelHeightSize"
                  value={data.modelHeightSize}
                  onChange={onChange}
                  required
                  // ref={register}
                  type="text"
                  className="form-control"
                  placeholder="Enter Model Height And Size"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 ">
          <a
            href={"#!"}
            type="submit"
            onClick={onSubmit}
            className="btn btn-block btn-dark mb-2"
            disabled={addingProduct}
          >
            <span
              className={
                addingProduct ? "mr-2 spinner-border spinner-border-sm" : ""
              }
              role="status"
              aria-hidden="true"
            ></span>
            {addingProduct ? "Uploading..." : "Upload"}
          </a>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  addingProduct: state.app.addingProduct,
});
export default connect(mapStateToProps, { addProduct })(ProductForm);
