import Navigation from "../../components/Navigation";

const NavigationContainer = (props) => {
  const className = "NavigationContainer";
  const navigationMenu = ["characters", "starships", "planets"];

  return (
    <div className={className}>
      <Navigation navigation={navigationMenu} />
    </div>
  );
};

export default NavigationContainer;
