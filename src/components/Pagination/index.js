import { range } from "../../utils";
import Button from "../Button";

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
      <Button onClick={() => prevPage()} inactive={currentPage == 1}>
        Prev. Page
      </Button>
      <div>
        {responseData && (
          <>
            {range(maxPages).map((item) => (
              <Button
                handleOnClick={() => {
                  selectPage(item + 1);
                }}
                inactive={item + 1 === currentPage}
                classNameAdd="ml-1 mr-1 px-2 py-0"
              >
                {item + 1}
              </Button>
            ))}
          </>
        )}
      </div>
      <Button onClick={() => nextPage()} inactive={currentPage === maxPages}>
        Next Page
      </Button>
    </div>
  );
};

export default Pagination;
