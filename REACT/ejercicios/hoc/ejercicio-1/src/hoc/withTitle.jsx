const withTitle = (WrappedComponent) => {
  return ({ title, ...props }) => (
    <div>
      <h1>{title}</h1>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withTitle;
