import React from "react";
import { ContactCardsList } from "../contact/contact-card-list";
import MerchantsReturnForm from "./MerchartReturnForm"
import { ContactInfo } from "./ContactInfo";
import { MerchartReturnBanner } from "./MerchantReturnBanner";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MerchartsReturn = () => {
  useEffect(() => {

    window.scrollTo(0, 0);

  }, [])

  return (
    <div className="bg-white p-3">
     
      <Container>
        <div className="col-md-9 mx-auto mt-10 mb-2">
          <div className="row contact-row">
            <div className="col-md-6  mb-3-sm d-flex justify-content-center align-items-center">
            <div class=" mb-3 d-flex justify-content-center align-items-center">
            
              <div class={"shadow-shop p-3"}>

                <form class="col-md-12 font-Futura-bold letter-spacing-cart mb-2 ">
                  <div class="row-wrap">

                  <div>
                      <Link to={'/user'} style={{ color: 'black' }} className='mb-1 lead'>
                        Personal Info
                    </Link>
                    </div>
                    
                    <div className='lead mb-1'>
                      Bonus
                      
                    </div>
                    <div>
                      <Link to={'/invite'} style={{ color: 'black' }} className='mb-1'>
       <span className='ml-1 pl-1' >- Invite & Earn</span>
                    </Link>
                    </div>
                    <div>
                      <Link to={'/acquire'} style={{ color: 'black' }} className='mb-1'>
       <span className='ml-1 pl-1' >   - Acquire & Earn</span>
                    </Link>
                    </div>
                    <div>
                      <Link to={'/bonus'} style={{ color: 'black' }} className='mb-1'>
       <span className='ml-1 pl-1' >- Vouchers & Activities</span>
                    </Link>
                    </div>
                    <div>
                      <Link to={'/orders'} style={{ color: 'black' }} className='mb-1 lead'>
                        Orders
                    </Link>
                    </div>
                    <div>
                      <Link to={'/merchantreturn'} style={{ color: 'black', fontSize:'1.5rem' }} className='mb-1 lead'>
                        Merchandise Returns
                    </Link>
                    </div>
                    

                    <div class="row mb-3 ">




                    </div>

                  </div>
                </form>
              </div>
            
            </div>
            </div>
            <div className=" ml-2 contact px-0 col">
              <MerchantsReturnForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
};

export default MerchartsReturn;
