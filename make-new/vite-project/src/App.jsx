// App.jsx
import React from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { PageTitle } from "./components/propsTitle/PropsTitle";
import { List } from "./components/List/List";
import { ButtonComponent } from "./components/ButtonComponent/ButtonComponent";
import { ParentComponent } from "./components/ParentComponet/ParentComponent";
import { ChildComponent } from "./components/ChildComponent/ChildComponent";
import { ContentWrapper } from "./components/ContentWrapper/ContentWrapper";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { NavBar } from "./components/navBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <h1>Welcome</h1>
          <Routes>
            {/* ... */}
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            {/* ... */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
