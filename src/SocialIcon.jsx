import paths from "./assets/iconPaths";

const SocialIcon = ({ name, url, rel }) => {
  return (
    <a href={url} rel={rel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="#E8EDDF"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="1.414"
      >
        <path fillRule="nonzero" d={paths[name] || ""} />
      </svg>
    </a>
  );
};

export default SocialIcon;
