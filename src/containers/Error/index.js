import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import App from "../App";
const ErrorContainer = () => {
  return (
    <App>
      <Header />
      <h2 className="text-6xl font-bold mb-6">
        These aren't the Droids you're looking for
      </h2>
      <p>The page you are trying to access does not exist.</p>
      <p className="mb-6">Return home to start over.</p>
      <Button classNameAdd="font-bold">
        <Link to="/">Go Back Home</Link>
      </Button>
    </App>
  );
};

export default ErrorContainer;
