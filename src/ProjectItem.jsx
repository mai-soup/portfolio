import Button from "./Button";

const ProjectItem = ({ project, className }) => {
  return (
    <div
      className={`flex-1 basis-full md:basis-1/2 shrink mb-16 ${className}`}
      key={project.title}
    >
      <div className="w-full relative">
        <img className="w-full" src={project.imgLarge} />
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-75 transition-all duration-300 flex flex-col justify-center items-center gap-3 opacity-0 hover:opacity-100">
          <Button>View project</Button>
          <Button>View code</Button>
        </div>
      </div>
      <h3 className="heading-m uppercase my-5">{project.title}</h3>
      <p className="body-text text-light-grey mt-2">
        {project.technologies.join(", ")}
      </p>
    </div>
  );
};

export default ProjectItem;
