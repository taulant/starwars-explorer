import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const FilmContainer = (props) => {
  let [responseData, setResponseData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const className = "FilmContainer";
  const { category, id } = props;

  const fetchData = useCallback(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `https://swapi.dev/api/films/${id}/`,
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
    <p className={className}>
      {!isLoading ? responseData.title : "Loading..."}
    </p>
  );
};

export default FilmContainer;
