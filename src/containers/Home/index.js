import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import NavigationContainer from "../Navigation";

const HomeContainer = () => {
  const className = "HomeContainer";
  return (
    <div className={className}>
      <Header />
      <Breadcrumbs />
      <NavigationContainer />
    </div>
  );
};

export default HomeContainer;
