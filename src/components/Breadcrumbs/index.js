import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  const className = "Breadcrumbs";
  const isHome = window.location.pathname === "/";
  return (
    <div className={`${className} mb-4`}>
      <h2>
        {isHome ? (
          ""
        ) : (
          <Link to="/" className="button">
            <span>Home</span>
          </Link>
        )}
        {props.category && props.name ? (
          <>
            <span className="ml-2 mr-2">/</span>
            <Link to={`/${props.category}`} className="button capitalize">
              {props.category}
            </Link>
          </>
        ) : props.category ? (
          <>
            <span className="ml-2 mr-2">/</span>
            <span className="button--inactive capitalize">
              {props.category}
            </span>
          </>
        ) : (
          ""
        )}
        {props.name ? (
          <>
            <span className="ml-2 mr-2">/</span>
            <span className="button-inactive">{props.name}</span>
          </>
        ) : (
          ""
        )}
      </h2>
    </div>
  );
};

export default Breadcrumbs;
