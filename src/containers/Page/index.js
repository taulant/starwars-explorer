import { Outlet, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import Page from "../../components/Page";
import NavigationContainer from "../Navigation";
const PageContainer = (props) => {
  console.log({ props });
  //props.match.params.value
  const className = "PageContainer";
  const { id } = useParams();
  return (
    <div className={className}>
      <Header />
      <Breadcrumbs />
      <NavigationContainer />
      <Outlet />
      <Page title={props.title} id={id}></Page>
    </div>
  );
};

export default PageContainer;
