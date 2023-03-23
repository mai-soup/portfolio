const Button = ({ children, href, btn = false, disabled = false }) => {
  return btn ? (
    <button
      className="py-2 border-b-2 border-light-red uppercase hover:text-off-white hover:border-light-blue transition-colors disabled:border-light-grey disabled:opacity-50"
      disabled={disabled}
    >
      {children}
    </button>
  ) : (
    <a
      href={href || "#"}
      className="py-2 border-b-2 border-light-red uppercase hover:text-off-white hover:border-light-blue transition-colors"
    >
      {children}
    </a>
  );
};

export default Button;
