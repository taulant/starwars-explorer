import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  const className = "Breadcrumbs";

  return (
    <div className={className}>
      <h2>
        <Link to="/">Home</Link> / {props.category}
      </h2>
    </div>
  );
};

export default Breadcrumbs;
