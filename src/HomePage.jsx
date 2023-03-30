import BioSection from "./BioSection";
import Container from "./Container";
import ProjectsSection from "./ProjectsSection";
import TechSection from "./TechSection";
import LinksContainer from "./LinksContainer";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <LinksContainer />
      <Container className="grow">
        <BioSection />
        <TechSection />
        <ProjectsSection />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
