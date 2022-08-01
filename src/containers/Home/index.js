import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import App from "../App";
import NavigationContainer from "../Navigation";
const HomeContainer = () => {
  return (
    <App>
      <Header />
      <Breadcrumbs />
      <NavigationContainer />
    </App>
  );
};

export default HomeContainer;
