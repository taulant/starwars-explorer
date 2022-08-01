import { useMemo } from "react";
import Navigation from "../../components/Navigation";
import { SWAPI } from "../../utils/constants";

const NavigationContainer = (props) => {
  const className = "NavigationContainer";
  const navigationMenu = useMemo(() => {
    return [
      SWAPI.CATEGORY.PEOPLE,
      SWAPI.CATEGORY.STARSHIPS,
      SWAPI.CATEGORY.PLANETS,
    ];
  }, []);

  return (
    <div className={className}>
      <Navigation navigation={navigationMenu} />
    </div>
  );
};

export default NavigationContainer;
