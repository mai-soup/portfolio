const Container = ({ className, children }) => {
  return <div className={`w-5/6 mx-auto ${className}`}>{children}</div>;
};

export default Container;
