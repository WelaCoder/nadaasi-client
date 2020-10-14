import React, { useState } from "react";
import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
import { useHistory ,useLocation} from 'react-router-dom'
import { setBodyType, setFilters } from "../../../../actions/appActions";
const FindYourOwnStyle = ({ loadingProducts, setFilters, setBodyType, filters, user , }) => {
  const isLoading = false;
  const [showModal, setShowModal] = useState(false);
  const [ownStyle, setOwnStyle] = useState({
    bust: null,
    waist: null,
    highHip: null,
    hip: null,
  });
  let location = useLocation();
  let showFilter = Boolean(new URLSearchParams(location.search).get('showFilter'));
  const [process, setProcess] = useState(true);
  useEffect(()=>{
    console.log('userEffect called');
    if(!process) return;
    setProcess(false);
    if (showFilter) {
      if (user && user.bodyType!=null && user.bodyType!='') {
        setBodyType(user.bodyType);
      }else{
        setShowModal(true);
        console.log(showModal);
      }
    }
  },[]);
  const onChange = (e) => {
    setOwnStyle({
      ...ownStyle,
      [e.target.name]: Number(e.target.value),
    });
  };
  let history = useHistory();
  const [result, setResult] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();

    const { bust, hip, highHip, waist } = ownStyle;
    console.log(bust - hip);
    console.log(bust - waist);
    if (
      bust - hip <= 1 &&
      hip - bust < 3.6 &&
      (bust - waist >= 9 || hip - waist >= 10)
    ) {

      console.log("hourglass");
      setResult('Hourglass');
    } else if (bust - hip >= 3.6 && bust - waist < 9) {
      setResult('Apple');
      console.log("apple");
    } else if (hip - bust > 2 && hip - waist >= 7 && highHip / waist >= 1.193) {
      console.log("pear");
      setResult('Pear');

    } else if (
      hip - bust < 3.6 &&
      bust - hip < 3.6 &&
      bust - waist < 9 &&
      hip - waist < 10
    ) {
      console.log("banana");
      setResult('Banana');

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
            {filters.bodyType == null ? <div
              id={"findStyleBtn"}
              class="shadow-shop cursor-pointer mt-3 mb-0 py-2 text-center text-uppercase  font-Futura-bold "
              onClick={() => setShowModal(true)}
            >
              <div>Find your own style </div>
            </div> : <div
              id={"findStyleBtn"}
              class="shadow-shop cursor-pointer mt-3 mb-0 py-2 text-center text-uppercase  font-Futura-bold "
              onClick={() => {
                setFilters({ bodyType: null });
                localStorage.removeItem('filter');

              }}
            >
                <div>Clear Body Type Filter </div>
              </div>}

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
                  {result != '' ? <>
                    <p className='lead text-center'>
                      Your body type is {result}
                    </p>
                    <button class="mt-3 btn btn-dark btn-block" onClick={() => {
                      if (user) {
                        setBodyType(result);
                        setFilters({ bodyType: result.toLowerCase() });

                      } else {
                        localStorage.setItem('bodyType', result);
                        localStorage.setItem('filter', true);
                        history.push('/user/sign-in')
                      }
                      setShowModal(false);
                      setResult('');
                    }}>
                      {user == null ? 'Login to Save Body Type and Filter Dresses' : 'Save Body Type'}


                    </button>
                  </> : <form class="" onSubmit={onSubmit}>
                      <div class="col-sm-12">
                        <div class="d-flex align-items-center justify-content-center row">
                          <div class="col-md-3">Bust</div>
                          <div class="col-md-9">
                            <div class="mt-2 mb-0 form-group">
                              <input
                                name="bust"

                                // value={ownStyle.bust}
                                onChange={onChange}
                                placeholder="Enter Bust Size"
                                type="text"
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
                                // value={ownStyle.waist}
                                onChange={onChange}

                                required
                                placeholder="Enter Waist Size"
                                type="text"
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
                                // value={ownStyle.highHip}

                                required
                                onChange={onChange}
                                placeholder="Enter High-hip Size"
                                type="text"
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
                                // value={ownStyle.hip}

                                required
                                onChange={onChange}
                                placeholder="Enter Hip Size"
                                type="text"
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
                    </form>}
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
  filters: state.app.filters,
  user: state.app.user,
});
export default connect(mapStateToProps, { setFilters, setBodyType })(FindYourOwnStyle);
