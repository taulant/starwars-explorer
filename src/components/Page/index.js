import FilmContainer from "../../containers/Film";
import { getId } from "../../utils";
const Page = (props) => {
  const className = "Page";
  const { entity, category } = props;
  const { name, films } = entity;
  return (
    <div className={className}>
      <h1>{name}</h1>
      <p>category: {category}</p>
      <p>id: {props.id}</p>
      <ul>
        {films &&
          films.map((film) => {
            return <FilmContainer id={getId(film)} />;
          })}
      </ul>
    </div>
  );
};

export default Page;
