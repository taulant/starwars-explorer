import { Link } from "react-router-dom";

const TableRow = (props) => {
  const className = "TableRow";
  const { category, id, entity } = props;
  const { name, birth_year, population, cost_in_credits } = entity;
  return (
    <div className={`${className} grid grid-cols-3 py-3 border-b-2`} key={id}>
      <p>
        <span className="mr-8 font-bold">{name}</span>
      </p>
      {birth_year && <span>Birth Year: {birth_year}</span>}
      {population && <span>Population: {population}</span>}
      {cost_in_credits && <span>Cost In Credits: {cost_in_credits}</span>}

      <span className="flex justify-end">
        <Link
          className="button px-2 py-0 flex items-center"
          to={`/${category}/${id}`}
        >
          Read more
        </Link>
      </span>
    </div>
  );
};

export default TableRow;
