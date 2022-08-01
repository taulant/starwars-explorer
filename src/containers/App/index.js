const App = (props) => {
  const className = "App";

  return (
    <div className={`${className} m-6 md:ml-32 md:mr-32 xl:mr-64 xl:ml-64`}>
      {props.children}
    </div>
  );
};

export default App;
