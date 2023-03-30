import Container from "./Container";
import LinksContainer from "./LinksContainer";
import ProjectNav from "./ProjectNav";
import Footer from "./Footer";

const ProjectDetailsPage = ({ title, projectContents }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <LinksContainer />
      <Container className="grow text-center flex flex-col items-center pb-8 md:w-1/2 md:text-left">
        <ProjectNav />
        <h1 className="pb-4 md:pb-8">{title}</h1>
        {projectContents}
        <ProjectNav />
      </Container>
      <Footer />
    </>
  );
};

export default ProjectDetailsPage;
