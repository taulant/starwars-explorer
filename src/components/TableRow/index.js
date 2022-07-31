import { Link } from "react-router-dom";

const TableRow = (props) => {
  const className = "TableRow";
  const { category, id, entity } = props;
  const { name } = entity;
  return (
    <div className={className} key={id}>
      <p>{name}</p>
      <Link to={`/${category}/${id}`}>Read more about {name}</Link>
    </div>
  );
};

export default TableRow;
