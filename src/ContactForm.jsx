import Button from "./Button";
import { useForm } from "react-hook-form";

const inputClasses =
  "placeholder:text-light-grey mt-0 block w-full px-0.5 border-0 border-b-2 border-light-grey bg-dark-grey focus:border-light-blue";

const ErrorParagraph = ({ children }) => {
  return (
    <p role="alert" className="text-light-red">
      {children}
    </p>
  );
};

const ContactForm = ({ onSubmit, submitState }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <label className="block mb-8" htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="NAME"
          autoComplete="off"
          className={inputClasses}
          {...register("name", { required: true })}
        />
        {errors.name && <ErrorParagraph>First name is required</ErrorParagraph>}
      </label>
      <label className="block mb-8" htmlFor="email">
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="EMAIL"
          className={inputClasses}
          {...register("email", {
            required: true,
            pattern: /[^@\s]+@[^@\s]+\.[^@\s]+/,
          })}
        />
        {errors.email && (
          <ErrorParagraph>Please enter a valid email address.</ErrorParagraph>
        )}
      </label>
      <label className="block mb-8" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows="2"
          className={inputClasses}
          placeholder="MESSAGE"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && <ErrorParagraph>Message is required</ErrorParagraph>}
      </label>
      <Button className="float-right" btn>
        {!submitState
          ? "Send message"
          : submitState === 1
          ? "Sending"
          : "Sent!"}
      </Button>
    </form>
  );
};

export default ContactForm;
