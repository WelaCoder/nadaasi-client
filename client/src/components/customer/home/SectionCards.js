import React from "react";
import PropTypes from "prop-types";
import { Card, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SectionCards = ({ title, subtitle, items }) => {
  let history = useHistory();
  return (
    <div className="section">
      <div className="section--cards">
        <Container>
          <div className="section__text-box my-font-futura">
            <h1>{title}</h1>
            {/* <h3>{subtitle}</h3> */}
          </div>

          <div className="row">
            {items.map(({ id, icon, desc }, index) =>
              index == 0 ? (
                <div
                  key={id}
                  className="col-md-6 col-sm-12 mb-2 p-0 pointer"
                  onClick={() => {
                    history.push("/shop/?showFilter=true");
                  }}
                >
                  <Card className="section__card">
                    <div>
                      <Card.Img src={icon} className="section__image" />
                    </div>
                    <Card.Body>
                      <p
                        className="lead text-center mb-0"
                        style={{ color: "black" }}
                      >
                        {desc}
                      </p>
                      <p
                        className="lead text-center mb-0"
                        style={{ color: "black" }}
                      >
                        "Get a dress that fits and suits you"
                      </p>
                    </Card.Body>
                  </Card>
                </div>
              ) : (
                <div
                  key={id}
                  className="col-md-6 col-sm-12 mb-2 p-0 pointer"
                  onClick={() => {
                    history.push("/about/?naturalFabric=true");
                  }}
                >
                  <Card className="section__card">
                    <div>
                      <Card.Img src={icon} className="section__image" />
                    </div>
                    <Card.Body>
                      <p
                        className="lead text-center mb-0"
                        style={{ color: "black" }}
                      >
                        {desc}
                      </p>
                      <p
                        className="lead text-center mb-0"
                        style={{ color: "black" }}
                      >
                        "All our fabrics are picked/sourced thoughtfully"
                      </p>
                    </Card.Body>
                  </Card>
                </div>
              )
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

SectionCards.defaultProps = {
  title: "",
  subtitle: "",
  items: [],
};

SectionCards.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  items: PropTypes.instanceOf(Array),
};

export default SectionCards;
