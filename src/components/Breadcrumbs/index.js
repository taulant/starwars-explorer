import { Link } from "react-router-dom";
import Button from "../Button";

const Breadcrumbs = (props) => {
  const className = "Breadcrumbs";
  const isHome = window.location.pathname === "/";
  return (
    <div className={`${className} mb-4`}>
      <h2>
        {isHome ? (
          ""
        ) : (
          <Button>
            <Link to="/">
              <span>Home</span>
            </Link>
          </Button>
        )}
        {props.category && props.name ? (
          <>
            <span className="ml-2 mr-2">/</span>
            <Button classNameAdd="capitalize">
              <Link to={`/${props.category}`}>{props.category}</Link>
            </Button>
          </>
        ) : props.category ? (
          <>
            <span className="ml-2 mr-2">/</span>
            <Button inactive classNameAdd="capitalize">
              {props.category}
            </Button>
          </>
        ) : (
          ""
        )}
        {props.name ? (
          <>
            <span className="ml-2 mr-2">/</span>
            <Button inactive classNameAdd="capitalize">
              {props.name}
            </Button>
          </>
        ) : (
          ""
        )}
      </h2>
    </div>
  );
};

export default Breadcrumbs;
