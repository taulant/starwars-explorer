import { Link } from "react-router-dom";
const Table = (props) => {
  const className = "Table";
  const id = 1;
  return (
    <>
      <div className={className}>
        <h1>{props.category}</h1>
        <Link to={`/${props.category}/${id}`}>Entity Link Example</Link>
      </div>
    </>
  );
};

export default Table;
