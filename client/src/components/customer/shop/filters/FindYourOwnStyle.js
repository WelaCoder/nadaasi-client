import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
import { setFilters } from "../../../../actions/appActions";
const FindYourOwnStyle = ({ loadingProducts, setFilters }) => {
  const isLoading = false;
  const [showModal, setShowModal] = useState(false);
  const [ownStyle, setOwnStyle] = useState({
    bust: null,
    waist: null,
    highHip: null,
    hip: null,
  });
  const onChange = (e) => {
    setOwnStyle({
      ...ownStyle,
      [e.target.name]: Number(e.target.value),
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    const { bust, hip, highHip, waist } = ownStyle;
    console.log(bust - hip);
    console.log(bust - waist);
    if (
      bust - hip <= 1 &&
      hip - bust < 3.6 &&
      (bust - waist >= 9 || hip - waist >= 10)
    ) {
      setFilters({ bodyType: "hourglass" });
      console.log("hourglass");
    } else if (bust - hip >= 3.6 && bust - waist < 9) {
      setFilters({ bodyType: "apple" });
      console.log("apple");
    } else if (hip - bust > 2 && hip - waist >= 7 && highHip / waist >= 1.193) {
      setFilters({ bodyType: "pear" });
      console.log("pear");
    } else if (
      hip - bust < 3.6 &&
      bust - hip < 3.6 &&
      bust - waist < 9 &&
      hip - waist < 10
    ) {
      setFilters({ bodyType: "banana" });
      console.log("banana");
    }
    console.log(ownStyle);
  };
  return (
    <>
      {loadingProducts ? (
        <>
          <Skeleton count={1} />
          <div className="mt-3 mb-3">
            <Skeleton count={1} height="60px" />
          </div>
        </>
      ) : (
        <>
          <div
            id={"findStyleBtn"}
            class="shadow-shop cursor-pointer mt-3 mb-0 py-2 text-center text-uppercase  font-Futura-bold "
            onClick={() => setShowModal(true)}
          >
            <div>Find your own style </div>
          </div>

          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <div style={{ backgroundColor: "white" }}>
              <div class="modal-header">
                <div class="modal-title h4">Find Your Style</div>
                <button
                  type="button"
                  class="close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">×</span>
                  <span class="sr-only">Close</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="" onSubmit={onSubmit}>
                  <div class="col-sm-12">
                    <div class="d-flex align-items-center justify-content-center row">
                      <div class="col-md-3">Bust</div>
                      <div class="col-md-9">
                        <div class="mt-2 mb-0 form-group">
                          <input
                            name="bust"
                            min={0}
                            value={ownStyle.bust}
                            onChange={onChange}
                            placeholder="Enter Bust Size"
                            type="number"
                            required
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center row">
                      <div class="col-md-3">Waist</div>
                      <div class="col-md-9">
                        <div class="mt-2 mb-0 form-group">
                          <input
                            name="waist"
                            value={ownStyle.waist}
                            onChange={onChange}
                            min={0}
                            required
                            placeholder="Enter Waist Size"
                            type="number"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center row">
                      <div class="col-md-3">High-Hip</div>
                      <div class="col-md-9">
                        <div class="mt-2 mb-0 form-group">
                          <input
                            name="highHip"
                            value={ownStyle.highHip}
                            min={0}
                            required
                            onChange={onChange}
                            placeholder="Enter High-hip Size"
                            type="number"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center row">
                      <div class="col-md-3">Hip</div>
                      <div class="col-md-9">
                        <div class="mt-2 mb-0 form-group">
                          <input
                            name="hip"
                            value={ownStyle.hip}
                            min={0}
                            required
                            onChange={onChange}
                            placeholder="Enter Hip Size"
                            type="number"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <button type="submit" class="mt-3 btn btn-dark btn-block">
                        Find Your Style
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  loadingProducts: state.app.loadingProducts,
});
export default connect(mapStateToProps, { setFilters })(FindYourOwnStyle);
