import Button from "./Button";

const inputClasses =
  "placeholder:text-light-grey mt-0 block w-full px-0.5 border-0 border-b-2 border-light-grey bg-dark-grey focus:border-light-blue";

const ContactForm = ({
  onNameChange,
  onEmailChange,
  onMessageChange,
  onSubmit,
  enableSubmission,
}) => {
  return (
    <form action="" onSubmit={onSubmit}>
      <label className="block mb-8" htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="NAME"
          className={inputClasses}
          onChange={onNameChange}
        />
      </label>
      <label className="block mb-8" htmlFor="email">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="EMAIL"
          className={inputClasses}
          onChange={onEmailChange}
        />
      </label>
      <label className="block mb-8" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows="2"
          className={inputClasses}
          placeholder="MESSAGE"
          onChange={onMessageChange}
        ></textarea>
      </label>
      <Button className="float-right" disabled={!enableSubmission} btn>
        Send message
      </Button>
    </form>
  );
};

export default ContactForm;
