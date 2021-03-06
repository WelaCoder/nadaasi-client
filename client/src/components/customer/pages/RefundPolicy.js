import React from "react";
import { useEffect } from "react";
import "./RefundPolicy.css";
const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <section id="main">
        <header style={{ paddingTop: "50px" }} class="page-header">
          <h1 class="tt-innerpagetitle my-font-futura">Refund policy</h1>
        </header>

        <section
          style={{ marginTop: "50px", marginBottom: "100px" }}
          id=""
          class="page-content page-cms page-cms-8 my-font-futura color-black"
        >
          <h1 className="my-font-futura">Refund policy</h1>
          <p className="my-font-futura ">
            You have a 14-day right to return or exchange a product according to
            Finnish consumer protection legislation. You have the right to
            return the order if:
          </p>
          <ol style={{ marginLeft: "50px" }}>
            <li className="my-font-futura">
              The order has been cancelled according to the Terms & Conditions
              by notifying NADAASI within 14 days of receiving the product, and
            </li>
            <li className="my-font-futura">
              The product has not been used, and
            </li>
            <li className="my-font-futura">
              The product is in the condition that you received it and all the
              parts (e.g. removable belts and hang tags) of the item(s) are
              included in the package, and
            </li>
            <li className="my-font-futura">
              The item has been repackaged into its original package or an
              equivalent
            </li>
          </ol>
          <p className="my-font-futura">
            The product must be returned immediately after cancellation. When
            returning products, you will be responsible for potential damages
            and losses. The webshop returns are free of charge for customers in
            Finland. For customers abroad, we will refund return costs if the
            product we have sent you is incorrect or faulty.
          </p>
          <p className="my-font-futura">
            After we have received the returned item(s) and all the criteria
            (1-4) listed above are fulfilled, we will send you the new item or
            give you a refund. We will issue a refund following your method of
            payment. Refund times depend on the payment method you have
            selected. This can vary greatly between different payment methods.
          </p>
          <p className="my-font-futura">
            Before sending any returns, please contact us by email:
            info@nadaasi.com
          </p>
        </section>
      </section>
    </div>
  );
};
export default RefundPolicy;
