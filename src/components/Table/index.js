import { getId } from "../../utils";
import TableRow from "../TableRow";
const Table = (props) => {
  const className = "Table";
  const { list, category } = props;

  return (
    <div className={`${className} mb-4 border-t-2`}>
      {list &&
        list.map((item) => (
          <TableRow
            key={getId(item.url)}
            id={getId(item.url)}
            category={category}
            entity={item}
          />
        ))}
    </div>
  );
};

export default Table;
