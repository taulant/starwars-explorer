import Navigation from "../../components/Navigation";

const NavigationContainer = (props) => {
  const className = "NavigationContainer";
  const navigationMenu = ["people", "starships", "planets"];

  return (
    <div className={className}>
      <Navigation navigation={navigationMenu} />
    </div>
  );
};

export default NavigationContainer;
