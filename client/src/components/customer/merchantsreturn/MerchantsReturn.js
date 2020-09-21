import React from "react";
import { ContactCardsList } from "../contact/contact-card-list";
import MerchantsReturnForm from "./MerchartReturnForm"
import { ContactInfo } from "./ContactInfo";
import { MerchartReturnBanner } from "./MerchantReturnBanner";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

const MerchartsReturn = () => {
  useEffect(() => {

    window.scrollTo(0, 0);

  }, [])

  return (
    <div className="bg-white">
      <MerchartReturnBanner heading="Merchants Return" subheading="Working Service 24/7" />
      <Container>
        <div className="col-md-9 mx-auto mt-10 mb-2">
          <div className="row contact-row">
            <div className="col-md-6 shadow-contact mb-3-sm">
              <ContactInfo />
            </div>
            <div className=" ml-2 contact px-0 col">
              <MerchantsReturnForm />
            </div>
          </div>
          <ContactCardsList />
        </div>
      </Container>
    </div>
  )
};

export default MerchartsReturn;
