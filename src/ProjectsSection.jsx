import projects from "./assets/projects";
import Button from "./Button";
import ProjectItem from "./ProjectItem";

const ProjectsSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <h2 className="heading-xl">Projects</h2>
        <Button btn scrollTo="#contact">
          Contact me
        </Button>
      </div>
      <div className="flex flex-row text-center md:text-left items-center flex-wrap">
        {projects.map((project, i) => (
          <ProjectItem
            project={project}
            className={i % 2 == 0 ? "pr-2" : "pl-2"}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
