import Button from "./Button";
import { Link } from "react-router-dom";

const ProjectItem = ({ project, className }) => {
  return (
    <div
      className={`flex-1 basis-full md:basis-1/2 shrink mb-16 ${className}`}
      key={project.title}
    >
      <div className="w-full relative">
        <img className="w-full" src={project.imgLarge} />
        {/* overlay, only shown on md and above */}
        <div className="hidden absolute top-0 left-0 h-full w-full bg-black bg-opacity-75 transition-all duration-300 md:flex flex-col justify-center items-center gap-3 opacity-0 hover:opacity-100">
          <Link to="/projects">
            <Button btn>Read more</Button>
          </Link>
        </div>
      </div>
      <h3 className="heading-m uppercase my-5">{project.title}</h3>
      <p className="body-text text-light-grey mt-2">
        {project.technologies.join(", ")}
      </p>
      {/* standalone buttons, shown on sizes smaller than md */}
      <div className="flex md:hidden flex-row justify-evenly py-4">
        <Link to="/projects/personal-website/">
          <Button btn>Read more</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
