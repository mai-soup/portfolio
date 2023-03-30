const Button = ({
  children,
  href,
  btn = false,
  disabled = false,
  newtab = false,
  scrollTo,
}) => {
  const scrollToElem = () => {
    document.querySelector(scrollTo).scrollIntoView();
  };

  return btn ? (
    <button
      className="py-2 border-b-2 border-light-red uppercase hover:text-off-white hover:border-dark-red transition-colors disabled:border-light-grey disabled:opacity-50"
      disabled={disabled}
      onClick={scrollTo ? scrollToElem : null}
    >
      {children}
    </button>
  ) : (
    <a
      href={href || "#"}
      target={newtab ? "_blank" : ""}
      className="py-2 border-b-2 border-light-red uppercase hover:text-off-white hover:border-dark-red transition-colors"
    >
      {children}
    </a>
  );
};

export default Button;
