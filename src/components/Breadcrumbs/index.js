import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  const className = "Breadcrumbs";
  const isHome = window.location.pathname === "/";
  return (
    <div className={className}>
      <h2>
        {isHome ? "" : <Link to="/">Home</Link>}
        {props.category && props.name ? (
          <>
            /<Link to={`/${props.category}`}>{props.category}</Link>
          </>
        ) : props.category ? (
          `/${props.category}`
        ) : (
          ""
        )}
        {props.name ? `/${props.name}` : ""}
      </h2>
    </div>
  );
};

export default Breadcrumbs;
