import { Link } from "react-router-dom";

const Navigation = (props) => {
  if (props.navigation) {
    return (
      <nav>
        <ul className="pt-5">
          {props.navigation.map((item) => (
            <li
              key={item}
              className="hover:underline text-6xl capitalize font-bold pb-2"
            >
              <Link to={`/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  } else {
    return <></>;
  }
};

export default Navigation;
