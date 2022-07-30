const Page = (props) => {
  const className = "Page";

  return (
    <>
      <div className={className}>
        <h1>{props.title}</h1>
        <p>category: {props.category}</p>
        <p>id: {props.id}</p>
      </div>
    </>
  );
};

export default Page;
