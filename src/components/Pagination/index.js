import classNames from "classnames";

const Pagination = (props) => {
  const className = "Pagination";
  // TODO: Add page selection
  return (
    <div className={`${className} flex flex-row justify-between items-center`}>
      <button
        onClick={() => props.prevPage()}
        className={classNames({
          button: props.currentPage > 1,
          "button--inactive": props.currentPage == 1,
        })}
      >
        Prev. Page
      </button>
      <h3>
        {props.responseData && (
          <>
            {props.currentPage} / {props.maxPages}
          </>
        )}
      </h3>
      <button
        onClick={() => props.nextPage()}
        className={classNames({
          button: props.currentPage < props.maxPages,
          "button--inactive": props.currentPage === props.maxPages,
        })}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
