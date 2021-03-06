import React from "react";
import { useEffect } from "react";
import "./Policy.css";

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container my-font-futura">
      <section
        style={{ marginTop: "50px", marginBottom: "60px" }}
        id=""
        class="my-font-futura"
      >
        <h1>Privacy Policy</h1>
        <p>
          NADAASI is committed to respecting your privacy. NADAASI is the sole
          owner of the information collected on www.nadaasi.fi. The information
          is used entirely and only by us, except in cases where we use third
          party agents to perform certain functions for us, such as credit card
          processing, delivering packages and fulfilling orders. In those cases,
          we provide only the information necessary for the performance of those
          specific functions. NADAASI reserves the right to transfer the
          information You provided to the authorities in the case of
          infringement of laws and violation of good practice.
        </p>
        <p></p>
        <h2>FORCE MAJEURE</h2>
        <p>
          If NADAASI fails to comply with these Terms & Conditions because of
          unusual adverse circumstances outside of its control due to force
          majeure such as strikes, civil unrest, war or natural catastrophes,
          then NADAASI cannot be held responsible.
        </p>
        <p></p>
        <h2>LAW &amp; JURISDICTION</h2>
        <p>
          The laws of the Republic of Finland will be applied to all disputes
          related to the NADAASI webshop or to these Terms & Conditions. Any
          contractual disputes are primarily settled through negotiations, or if
          not possible, at the Helsinki District Court, Finland.
        </p>
        <p></p>
        <h2>CONTACT</h2>
        <p>
          We hope you enjoy shopping at Nadaasi. Please do not hesitate to
          contact us if you have any questions
        </p>
      </section>
    </div>
  );
};
export default Policy;
