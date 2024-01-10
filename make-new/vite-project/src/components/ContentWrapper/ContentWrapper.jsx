export const ContentWrapper = ({ title, children }) => {
  document.title = title;

  return (
    <>
      <h1>{title}</h1>
      <p>{children}</p>
    </>
  );
};
