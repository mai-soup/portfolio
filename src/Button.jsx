const Button = ({ children, href }) => {
  return (
    <a
      href={href || "#"}
      className="py-2 border-b-2 border-light-red uppercase hover:text-off-white hover:border-light-blue transition-colors"
    >
      {children}
    </a>
  );
};

export default Button;
