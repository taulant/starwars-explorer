import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import Page from "../../components/Page";

const PageContainer = (props) => {
  let [responseData, setResponseData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const className = "PageContainer";
  const { id } = useParams();
  const { category } = props;

  const fetchData = useCallback(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `https://swapi.dev/api/${category}/${id}/`,
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
    <div className={className}>
      <Header />
      <Breadcrumbs category={category} id={id} name={responseData.name} />
      {!isLoading ? JSON.stringify(responseData) : <p>Loading...</p>}
      <Page title={props.title} id={id} category={category}></Page>
    </div>
  );
};

export default PageContainer;
