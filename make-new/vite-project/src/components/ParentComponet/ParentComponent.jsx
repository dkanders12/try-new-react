export const ParentComponent = (props) => {
  return (
    <>
      <h1>Parent Component</h1>
      <p>Dette er indholdet af det overordnede komponent.</p>
      {/* Her vil child components blive vist*/}
      <div>{props.children}</div>
    </>
  );
};
