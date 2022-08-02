import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryContainer from "./containers/Category";
import ErrorContainer from "./containers/Error";
import HomeContainer from "./containers/Home";
import PageContainer from "./containers/Page";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { SWAPI } from "./utils/constants";
const root = ReactDOM.createRoot(document.getElementById("root"));
// TODO: Instead of hardcoding the Routes you can just make an object and map through it.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route
          path={SWAPI.CATEGORY.PEOPLE}
          element={<CategoryContainer category={SWAPI.CATEGORY.PEOPLE} />}
        ></Route>
        <Route
          path={`${SWAPI.CATEGORY.PEOPLE}/:id`}
          element={<PageContainer category={SWAPI.CATEGORY.PEOPLE} />}
        />
        <Route
          path={SWAPI.CATEGORY.STARSHIPS}
          element={<CategoryContainer category={SWAPI.CATEGORY.STARSHIPS} />}
        />
        <Route
          path={`${SWAPI.CATEGORY.STARSHIPS}/:id`}
          element={<PageContainer category={SWAPI.CATEGORY.STARSHIPS} />}
        />
        <Route
          path={SWAPI.CATEGORY.PLANETS}
          element={<CategoryContainer category={SWAPI.CATEGORY.PLANETS} />}
        />
        <Route
          path={`${SWAPI.CATEGORY.PLANETS}/:id`}
          element={<PageContainer category={SWAPI.CATEGORY.PLANETS} />}
        />
        <Route path="/*" element={<ErrorContainer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
