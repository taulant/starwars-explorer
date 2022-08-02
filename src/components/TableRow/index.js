import { Link } from "react-router-dom";
import Button from "../Button";

const TableRow = (props) => {
  const className = "TableRow";
  const { category, id, entity } = props;
  const { name, birth_year, population, cost_in_credits } = entity;
  return (
    <div className={`${className} grid grid-cols-3 py-3 border-b-2`} key={id}>
      <span className="flex items-center mr-8 md:text-2xl">{name}</span>
      {birth_year && (
        <span className="flex items-center">Birth Year: {birth_year}</span>
      )}
      {population && (
        <span className="flex items-center">Population: {population}</span>
      )}
      {cost_in_credits && (
        <span className="flex items-center">
          Cost:{" "}
          {cost_in_credits != "unknown" ? (
            <>
              <span className="text-xl ml-2 mr-1">&#9797;</span>
              {cost_in_credits}
            </>
          ) : (
            cost_in_credits
          )}
        </span>
      )}

      <span className="flex justify-end">
        <Link to={`/${category}/${id}`}>
          <Button classNameAdd="px-2 py-1">Read more</Button>
        </Link>
      </span>
    </div>
  );
};

export default TableRow;
