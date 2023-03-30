import { Link } from "react-router-dom";

const ProjectNav = () => {
  return (
    <div className="w-full flex flex-row justify-start items-center">
      <Link to="/" className="py-2">
        <div className="flex flex-row justify-start items-center group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="1.414"
            className="fill-off-white group-hover:fill-light-red transition-all"
          >
            <path
              fillRule="nonzero"
              d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
            />
          </svg>
          <span className="border-b-2 border-light-grey uppercase text-off-white group-hover:border-light-red transition-colors">
            GO BACK
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectNav;
