import Container from "./Container";
import LinksContainer from "./LinksContainer";

const Footer = () => {
  return (
    <div className="w-full bg-dark-grey pt-8" id="contact">
      <Container>
        <h2>Contact me</h2>
        <LinksContainer />
      </Container>
    </div>
  );
};

export default Footer;
