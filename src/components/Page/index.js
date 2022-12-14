import FilmContainer from "../../containers/Film";
import { getId } from "../../utils";
const Page = (props) => {
  const className = "Page";
  const { entity, category } = props;
  const { name, films } = entity;
  // TODO: Add more details to the page
  return (
    <div className={className}>
      <h2 className="text-6xl font-bold mb-4">{name}</h2>
      {films && (
        <>
          <h3 className="font-bold text-xl">Seen in the following films</h3>
          <ul>
            {films.map((film, i) => {
              return <FilmContainer id={getId(film)} key={i} />;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Page;
