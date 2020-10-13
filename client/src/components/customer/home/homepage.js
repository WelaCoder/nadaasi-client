import React from "react";
import { Modal } from 'react-bootstrap'

import Carousel from "./Carousel";
import SectionCards from "./SectionCards";
import SectionNewsletter from "./SectionNewsletter";
import SectionSocial from "./SectionSocial";
import SectionTestimonial from "./SectionTestimonial";
// import SectionTextile from '../components/SectionTextile';

import CottonIcon from "../../../assets/images/home/icons/cotton.svg";
import PaintBrushIcon from "../../../assets/images/home/icons/paint-brush.svg";
import TShirtIcon from "../../../assets/images/home/icons/dress.svg";
// import ShipIcon from '../../../assets/images/home/icons/ship.svg';
// import MoneyIcon from '../../../assets/images/home/icons/money-back.svg';
// import HoursIcon from '../../../assets/images/home/icons/24-hours.svg';

import ItemOne from "../../../assets/images/home/n1.jpg";
import ItemTwo from "../../../assets/images/home/n2.jpg";
import ItemThree from "../../../assets/images/home/n3.jpg";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const sectionQualityData = {
  title: "We Provide",
  subtitle: "better qualities",
  items: [
    { id: 0, icon: TShirtIcon, desc: "Customization" },
    { id: 1, icon: PaintBrushIcon, desc: "Natural Fabric" },
  ],
};

// const sectionServicesData = {
//   title: 'Our Services',
//   subtitle: 'better qualities',
//   items: [
//     { id: 0, icon: ShipIcon, desc: 'Free Shipping Worldwide' },
//     { id: 1, icon: MoneyIcon, desc: 'Money Back Guarantee' },
//     { id: 2, icon: HoursIcon, desc: '24/7 Customer Support' },
//   ],
// };

const items = [ItemOne, ItemTwo, ItemThree];

const HomePage = () => {
  let params = useParams();
  useEffect(() => {
    console.log(params.email);
    if (params.email) {
      setShowModal(true);
    }
  }, [])
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Carousel
        items={items}
        title="SIMPLE FABRIC WEDDING DRESSES"
        subtitle="Beautiful fabrics last, synthetics don't."
        button="Shop Now"
      />
      {/* <SectionTextile /> */}
      <SectionCards
        items={sectionQualityData.items}
        title={sectionQualityData.title}
        subtitle={sectionQualityData.subtitle}
      />
      <SectionNewsletter />
      {/* <SectionCards
      items={sectionServicesData.items}
      title={sectionServicesData.title}
      subtitle={sectionServicesData.subtitle}
    /> */}
      <SectionSocial />
      <SectionTestimonial />
      <Modal className='d-flex justify-content-center align-items-center' show={showModal} onHide={() => setShowModal(false)}>
        <div style={{ backgroundColor: "white" }}>
          <div class="modal-header">
            <div class="modal-title h4">Account Deleted</div>
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
            <div className='d-flex justify-content-center '>

              <p className="lead text-center">
                The acount for {params.email} has been deleted successfully...
                                    </p>


            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
};

export default HomePage;
