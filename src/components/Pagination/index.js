const Pagination = (props) => {
  const className = "Pagination";
  // TODO: Add page selection
  return (
    <div className={`${className} flex flex-row justify-between items-center`}>
      <button onClick={() => props.prevPage()} className="button">
        Prev. Page
      </button>
      <h3>
        {props.responseData && (
          <>
            {props.currentPage} / {props.maxPages}
          </>
        )}
      </h3>
      <button onClick={() => props.nextPage()} className="button">
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
