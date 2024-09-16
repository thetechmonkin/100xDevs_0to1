import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Dashboard from "./Components/Dashboard";
// Lazy loading
const Dashboard = React.lazy(() => import("./Components/Dashboard"));
// import Landing from "./Components/Landing";
const Landing = React.lazy(() => import("./Components/Landing"));
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />

      {
        // NOT THE RIGHT WAY !!!!!!!!!!
        /* <div>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Landing
        </button>
        <button
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          Dashboard
        </button>
      </div> */
      }
      {/* <div>
        <button onClick={() => [navigate("/")]}>Landing</button>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div> */}

      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"Loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"Loading.."}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const Appbar = () => {
  const navigate = useNavigate(); // you can not use useNavigate outside browser router
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
};

// Lazy Loading: ----> suspenseApi Need to wrap in suspense


