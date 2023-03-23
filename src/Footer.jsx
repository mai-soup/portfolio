import axios from "axios";
import { useState } from "react";
import ContactForm from "./ContactForm";
import Container from "./Container";
import LinksContainer from "./LinksContainer";

const ENDPOINT =
  "https://public.herotofu.com/v1/8434d380-c94e-11ed-9775-bbd70e6110ab";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submissionEnabled, setSubmissionEnabled] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  const handleNameChange = e => {
    setName(e.target.value);
    checkSubmissionAllowed();
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
    checkSubmissionAllowed();
  };
  const handleMessageChange = e => {
    setMessage(e.target.value);
    checkSubmissionAllowed();
  };

  const checkSubmissionAllowed = () => {
    setSubmissionEnabled(!!(name && email && message));
  };

  const handleSubmission = e => {
    e.preventDefault();
    setSubmissionEnabled(false);
    setSubmitting(true);

    axios
      .post(ENDPOINT, {
        name,
        email,
        message,
      })
      .then(response => {
        console.log(response);
      })
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setSubmitting(false);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="w-full bg-dark-grey pt-8" id="contact">
      <Container>
        <h2>Contact me</h2>
        <p className="py-4">
          This form does not work just yet, but soon will. Apologies for any
          inconvenience! Feel free to contact me on social networks, though.
        </p>
        <ContactForm
          enableSubmission={submissionEnabled}
          onNameChange={handleNameChange}
          onEmailChange={handleEmailChange}
          onMessageChange={handleMessageChange}
          onSubmit={handleSubmission}
          isSubmitting={isSubmitting}
        />
        <LinksContainer />
      </Container>
    </div>
  );
};

export default Footer;
