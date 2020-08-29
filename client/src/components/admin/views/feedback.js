import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container } from "reactstrap";
// import { useIsAdmin } from "../hooks/useIsAdmin";
import { Loader } from "../spinner";
// import { setAuthorizationToken } from "../helpers/utils";
import NotFound from "../NotFound";
import Header from "../header";
import FeedbackList from "../feedback/feedbackList";

export const stringTruncate = (str, length) => {
  const dots = str.length > length ? "..." : "";
  return `${str.substring(0, length)}${dots}`;
};

export const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useIsAdmin();

  useEffect(() => {
    // setAuthorizationToken();
    axios
      .get("/feedback")
      .then((res) => {
        setFeedback(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container className="mt-4" fluid>
      <div className="col-md-12">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="row">
            <div className="col-md-10 container ">
              <Header heading="User Feedback" item={feedback} />
              <>
                {feedback.length > 0 ? (
                  <FeedbackList feedbacks={feedback} />
                ) : (
                  <NotFound message="No Feedback Added from the users." />
                )}
              </>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};
