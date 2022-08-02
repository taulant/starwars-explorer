import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import Page from "../../components/Page";
import { SWAPI } from "../../utils/constants";
import App from "../App";
const PageContainer = (props) => {
  let [responseData, setResponseData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const className = "PageContainer";
  const { id } = useParams();
  const { category } = props;
  const navigate = useNavigate();
  const fetchData = useCallback(() => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: `${SWAPI.URL}/${category}/${id}/`,
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
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <App>
      <Header />
      <Breadcrumbs category={category} id={id} name={responseData.name} />
      {!isLoading ? (
        <Page
          title={props.title}
          id={id}
          category={category}
          entity={responseData}
        ></Page>
      ) : (
        <p>Loading...</p>
      )}
    </App>
  );
};

export default PageContainer;
