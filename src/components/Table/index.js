import TableRow from "../TableRow";
const Table = (props) => {
  const className = "Table";
  const { list, category } = props;
  const getId = (url) => {
    const urlArray = url.split("/");
    const id = urlArray[urlArray.length - 2];
    return id;
  };

  return (
    <div className={className}>
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
