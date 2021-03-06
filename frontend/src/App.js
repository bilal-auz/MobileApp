import { Redirect, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Dashboard from "./components/home/Dashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App relative">
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Redirect path="/" />
      <ToastContainer
        position="top-center"
        autoClose={1300}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
