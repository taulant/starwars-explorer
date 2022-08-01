import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CategoryContainer from "./containers/Category";
import HomeContainer from "./containers/Home";
import PageContainer from "./containers/Page";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
// TODO: Instead of hardcoding the Routes you can just make an object and map through it.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route
          path="people"
          element={<CategoryContainer category="people" />}
        ></Route>
        <Route
          path={`people/:id`}
          element={<PageContainer category="people" />}
        />
        <Route
          path="starships"
          element={<CategoryContainer category="starships" />}
        />
        <Route
          path={`starships/:id`}
          element={<PageContainer category="starships" />}
        />
        <Route
          path="planets"
          element={<CategoryContainer category="planets" />}
        />
        <Route
          path={`planets/:id`}
          element={<PageContainer category="planets" />}
        />
        <Route
          path="/*"
          element={
            <Link to="/">
              We can't find what your are looking for. Go back to home "/".
            </Link>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
