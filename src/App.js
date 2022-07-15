import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="main__content__container">
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                e
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
