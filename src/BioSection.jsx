import Button from "./Button";

const BioSection = () => {
  return (
    <div className="py-8 text-center md:text-left">
      <h1 className="mb-8">
        Hi there!
        <br />I am{" "}
        <span className="underline decoration-light-red">Maijs Garais</span>.
      </h1>
      <p className="mb-8 md:w-1/2">
        A frontend developer with experience in native Android development,
        using my technical knowledge to create seamless experiences across
        platforms. Latvian, based in Northern England.
      </p>
      <Button btn scrollTo="#contact">
        Contact Me
      </Button>
    </div>
  );
};

export default BioSection;
