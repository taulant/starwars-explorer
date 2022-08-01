import classNames from "classnames";
import { range } from "../../utils";

const Pagination = (props) => {
  const {
    currentPage,
    maxPages,
    prevPage,
    nextPage,
    responseData,
    selectPage,
  } = props;
  const className = "Pagination";
  return (
    <div className={`${className} flex flex-row justify-between items-center`}>
      <button
        onClick={() => prevPage()}
        className={classNames({
          button: currentPage > 1,
          "button--inactive": currentPage == 1,
        })}
      >
        Prev. Page
      </button>
      <div>
        {responseData && (
          <>
            {range(maxPages).map((item) => (
              <button
                onClick={() => selectPage(item + 1)}
                className={classNames({
                  "button ml-1 mr-1 px-2 py-0": item + 1 !== currentPage,
                  "button--inactive": item + 1 === currentPage,
                })}
              >
                {item + 1}
              </button>
            ))}
          </>
        )}
      </div>
      <button
        onClick={() => nextPage()}
        className={classNames({
          button: currentPage < maxPages,
          "button--inactive": currentPage === maxPages,
        })}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
