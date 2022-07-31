const Page = (props) => {
  const className = "Page";
  const { entity, category } = props;
  const { name } = entity;
  return (
    <>
      <div className={className}>
        <h1>{name}</h1>
        <p>category: {category}</p>
        <p>id: {props.id}</p>
      </div>
    </>
  );
};

export default Page;
