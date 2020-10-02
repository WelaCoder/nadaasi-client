import React, { useState, useEffect, useRef, Fragment } from 'react'
import acquire1 from '../../../assets/images/earn/acquire1.png'
import acquire2 from '../../../assets/images/earn/acquire2.png'
import acquire3 from '../../../assets/images/earn/acquire3.png'
import acquire4 from '../../../assets/images/earn/acquire4.png'
import { Carousel, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
const Invite = ({ user }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const ref = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const [showModal, setShowModal] = useState(false);
    let code;
    if (user != null) {
        code = user.inviteCode;
    }
    
    return (
        
        <div ref={ref} >
            <div className='d-flex justify-content-center row '  style={{ backgroundColor: '#ffffff' }}>
            {user!=null && <div class=" mb-3 col-md-12 col-lg-3 d-flex justify-content-center align-items-center pt-md-2">
              <div class={"shadow-shop"}>

                <form class="col-md-12 p-0 font-Futura-bold letter-spacing-cart mb-2 ">
                  <div class="row-wrap">

                  <div className = 'pl-3 pr-3 pt-1'>
                      <Link to={'/user'} style={{ color: 'black' }} className='mb-1 lead'>
                        Personal Info
                    </Link>
                    </div>
                    
                    <div className='lead mb-1 pl-3 pr-3 pt-1'>
                      Bonus
                      
                    </div>
                    <div className = 'pl-3 pr-3 pt-1'>
                      <Link to={'/invite'} style={{ color: 'black' }} className='mb-1'>
       <span className='ml-1 pl-1' >- Invite & Earn</span>
                    </Link>
                    </div>
                    <div className = 'pl-3 pr-3 pt-1'>
                      <Link to={'/acquire'} style={{ color: 'black' }} className='mb-1'>
       <span className='ml-1 pl-1' >   - Acquire & Earn</span>
                    </Link>
                    </div>
                    <div className = 'pl-3 pr-3 pt-1'>
                      <Link to={'/bonus'} style={{ color: 'black' }} className='mb-1'>
       <span className='ml-1 pl-1' >- Vouchers & Activities</span>
                    </Link>
                    </div>
                    <div className = 'pl-3 pr-3 pt-1'>
                      <Link to={'/user'} style={{ color: 'black' }} className='mb-1 lead'>
                        Orders
                    </Link>
                    </div>
                    <div className = 'pl-3 pr-3 pt-1'>
                      <Link to={'/merchantreturn'} style={{ color: 'black' }} className='mb-1 lead'>
                        Merchandise Returns
                    </Link>
                    </div>
                    

                    <div class="row mb-3 ">




                    </div>

                  </div>
                </form>
              </div>
            </div>}
                <div className='col-md-12 col-lg-5'>
                    <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
                        <Carousel.Item>
                            <img
                                width={300}
                                height={500}
                                className="d-block w-100"
                                src={acquire1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                width={300}
                                height={500}
                                className="d-block w-100"
                                src={acquire2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                width={300}
                                height={500}
                                className="d-block w-100"
                                src={acquire3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                width={300}
                                height={500}
                                className="d-block w-100"
                                src={acquire4}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className="d-flex row  justify-content-center mt-0 p-0" style={{ paddingBottom: '30px', backgroundColor: '#ffffff' }}>
                <p className="lead text-center mx-3">
                    {/* Copy and Share your personal invite link... */}
                </p>
            </div>
            
                </div>
            </div>
            
        </div >
    )
}
const mapStateToProps = (state) => ({
    user: state.app.user,
});
export default connect(mapStateToProps)(Invite);
