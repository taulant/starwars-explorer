import { useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const Breadcrumbs = (props) => {
  const { category, name } = props;
  const className = "Breadcrumbs";
  const isHome = window.location.pathname === "/";
  const breadcrumbsData = useMemo(() => [
    {
      name: "Home",
      to: "/",
      inactive: isHome,
    },
    {
      name: category,
      to: `/${category}`,
      inactive: category && !name,
    },
    {
      name: name,
      to: null,
      inactive: category && name,
    },
  ]);
  return (
    <div className={`${className} mb-4`}>
      {!isHome &&
        breadcrumbsData.map((breadcrumb, i) => {
          if (breadcrumb.name) {
            return (
              <>
                {i !== 0 && <span className="ml-2 mr-2">/</span>}
                <Link to={`${breadcrumb.to}`}>
                  <Button
                    classNameAdd="capitalize"
                    inactive={breadcrumb.inactive}
                  >
                    {breadcrumb.name}
                  </Button>
                </Link>
              </>
            );
          }
        })}
    </div>
  );
};

export default Breadcrumbs;
