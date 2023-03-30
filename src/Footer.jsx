import axios from "axios";
import { useState } from "react";
import ContactForm from "./ContactForm";
import Container from "./Container";
import LinksContainer from "./LinksContainer";

const ENDPOINT =
  "https://public.herotofu.com/v1/8434d380-c94e-11ed-9775-bbd70e6110ab";

const Footer = () => {
  const [submitState, setSubmitState] = useState(0);

  const handleSubmission = ({ name, email, message }) => {
    setSubmitState(1);
    console.log({ name, email, message });

    axios
      .post(ENDPOINT, {
        name,
        email,
        message,
      })
      .then(() => {
        setSubmitState(2);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="w-full bg-dark-grey pt-8" id="contact">
      <Container>
        <div className="flex flex-col text-center md:text-left md:flex-row justify-between md:gap-9">
          <div className="pb-8 md:basis-1/2">
            <h2 className="pb-4">Contact me</h2>
            <p>
              Got a project I might be interested in? Looking for an addition to
              your team? Fill out the form and I'll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="pb-8 basis-1/2">
            <ContactForm
              onSubmit={handleSubmission}
              submitState={submitState}
            />
          </div>
        </div>
      </Container>
      <LinksContainer />
    </div>
  );
};

export default Footer;
