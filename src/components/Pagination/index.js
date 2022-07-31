const Pagination = (props) => {
  const className = "Pagination";
  return (
    <div>
      <h3>
        {props.responseData && (
          <>
            {props.currentPage} / {props.maxPages}
          </>
        )}
      </h3>
      <button onClick={() => props.prevPage()}>Previous Page</button>
      <button onClick={() => props.nextPage()}>Next Page</button>
    </div>
  );
};

export default Pagination;
