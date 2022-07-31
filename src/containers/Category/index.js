import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table";

const CategoryContainer = (props) => {
  const className = "CategoryContainer";
  const [responseData, setResponseData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const { id } = useParams();
  const { category } = props;
  const results = responseData?.results;
  const count = responseData?.count;
  const resultsLength = results?.length;
  const maxPages = Math.round(parseInt(count) / resultsLength);
  const fetchData = useCallback(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `https://swapi.dev/api/${category}/?page=${currentPage}`,
    })
      .then((response) => {
        setResponseData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData, currentPage]);

  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <Header />
      <Breadcrumbs category={props.category} />
      {!isLoading ? JSON.stringify(responseData.results) : <p>Loading...</p>}
      {!isLoading && (
        <Pagination
          responseData={responseData}
          currentPage={currentPage}
          maxPages={maxPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}
      <Table category={props.category} />
    </>
  );
};

export default CategoryContainer;
