import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header";
import Table from "../../components/Table";

const CategoryContainer = (props) => {
  const className = "CategoryContainer";

  return (
    <>
      <Header />
      <Breadcrumbs category={props.category} />
      <Table category={props.category} />
    </>
  );
};

export default CategoryContainer;
