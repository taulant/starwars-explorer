import { Link } from "react-router-dom";

const Navigation = (props) => {
  if (props.navigation) {
    return (
      <nav>
        <ul>
          {props.navigation.map((item) => (
            <li key={item}>
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
