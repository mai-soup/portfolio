import BioSection from "./BioSection";
import Container from "./Container";
import ProjectsSection from "./ProjectsSection";
import TechSection from "./TechSection";

const HomePage = () => {
  return (
    <Container className="grow">
      <BioSection />
      <TechSection />
      <ProjectsSection />
    </Container>
  );
};

export default HomePage;
