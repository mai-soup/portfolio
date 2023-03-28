import Container from "./Container";
import ProjectNav from "./ProjectNav";

const ProjectDetailsPage = ({ title, projectContents }) => {
  return (
    <Container className="grow">
      <ProjectNav />
      <h1 className="text-center">{title}</h1>
      {projectContents}
    </Container>
  );
};

export default ProjectDetailsPage;
