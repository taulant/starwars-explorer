import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { SWAPI } from "../../utils/constants";

const FilmContainer = (props) => {
  let [responseData, setResponseData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const className = "FilmContainer";
  const { category, id } = props;

  const fetchData = useCallback(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `${SWAPI.URL}/${SWAPI.CATEGORY.FILMS}/${id}/`,
    })
      .then((response) => {
        setResponseData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <li className={className}>
      {!isLoading ? responseData.title : "Loading..."}
    </li>
  );
};

export default FilmContainer;
