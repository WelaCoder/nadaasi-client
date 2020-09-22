import React, { useState, useRef, useEffect } from 'react'
import acquire1 from '../../../assets/images/earn/acquire1.png'
import acquire2 from '../../../assets/images/earn/acquire2.png'
import acquire3 from '../../../assets/images/earn/acquire3.png'
import acquire4 from '../../../assets/images/earn/acquire4.png'
import { Carousel } from 'react-bootstrap'
import { connect } from 'react-redux'
const Acquire = ({ user }) => {
    const [index, setIndex] = useState(0);
    const ref = useRef(null);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div ref={ref}>
            <div className='d-flex justify-content-center' style={{ backgroundColor: '#ffffff' }}>
                <div className='col-5'>
                    <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
                        <Carousel.Item>
                            <img
                                width={100}
                                height={500}
                                className="d-block w-100"
                                src={acquire1}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                width={100}
                                height={500}
                                className="d-block w-100"
                                src={acquire2}
                                alt="Second slide"
                            />


                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                width={100}
                                height={500}
                                className="d-block w-100"
                                src={acquire3}
                                alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                width={100}
                                height={500}
                                className="d-block w-100"
                                src={acquire4}
                                alt="Third slide"
                            />

                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            {/* <div className="d-flex row  justify-content-center" style={{ paddingBottom: '30px', backgroundColor: '#ffffff' }}>
                <div className="col-4">
                    <input
                        // readOnly={true}
                        value={user != null ? user.inviteCode : ''}
                        type="text"
                        class="form-control coupon-input font-Futura-light letter-spacing-cart shadow-shop"
                        placeholder="COUPON CODE"
                        onChange={(e) => {
                            console.log(e.target.value);
                        }}
                    />
                </div>
            </div> */}
        </div>
    )
}
const mapStateToProps = (state) => ({
    user: state.app.user,
});
export default connect(mapStateToProps)(Acquire);
