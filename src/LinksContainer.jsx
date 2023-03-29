import SocialIcon from "./SocialIcon";
import Container from "./Container";
import { Link } from "react-router-dom";

const LinksContainer = () => {
  return (
    <Container>
      <div className="flex flex-row justify-between items-center py-4">
        <Link to="/">
          <span className="text-2xl font-bold text-off-white">
            maijs // garais
          </span>
        </Link>
        <div className="flex flex-row items-center gap-3 justify-between">
          <SocialIcon name="github" url="https://github.com/mai-soup" />
          <SocialIcon
            name="linkedin"
            url="https://linkedin.com/in/maijs-garais"
          />
          <SocialIcon name="website" url="https://mai-soup.github.io" />
          <SocialIcon
            name="mastodon"
            url="https://social.linux.pizza/@maijs"
            rel="me"
          />
        </div>
      </div>
    </Container>
  );
};

export default LinksContainer;
