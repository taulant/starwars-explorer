import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import { SWAPI } from "../../utils/constants";
import App from "../App";
const CategoryContainer = (props) => {
  const className = "CategoryContainer";
  const [responseData, setResponseData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const { id } = useParams();
  const { category } = props;
  const results = responseData?.results;
  const count = responseData?.count;
  const maxPages = Math.ceil(parseInt(count) / SWAPI.PAGINATION_LENGTH);
  const navigate = useNavigate();
  const fetchData = useCallback(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `${SWAPI.URL}/${category}/?page=${currentPage}`,
    })
      .then((response) => {
        setResponseData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        navigate("/error");
      });
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData, currentPage]);

  const nextPage = useCallback(() => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [results]);
  const prevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [results]);
  const selectPage = useCallback(
    (selectedPage) => {
      if (selectedPage <= maxPages) {
        setCurrentPage(selectedPage);
      }
    },
    [results]
  );
  return (
    <App>
      <Header />
      <Breadcrumbs category={props.category} />
      <h2 className="text-6xl font-bold capitalize mb-4">{category}</h2>
      {!isLoading ? (
        <Table category={props.category} list={responseData.results} />
      ) : (
        <p>Loading...</p>
      )}
      {!isLoading && (
        <Pagination
          responseData={responseData}
          currentPage={currentPage}
          maxPages={maxPages}
          prevPage={prevPage}
          nextPage={nextPage}
          selectPage={selectPage}
        />
      )}
    </App>
  );
};

export default CategoryContainer;
