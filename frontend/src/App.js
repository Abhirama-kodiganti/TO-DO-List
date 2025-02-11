import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Home from "./components/Home/Home";
import Signup from "./components/signup/Signup";
import Signin from "./components/signup/Signin";
// import TodoCards from "./components/todo/TodoCards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./components/todo/Todo";
import { useDispatch } from "react-redux";
import { authActions } from "./store";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  });
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>

      {/* <About /> */}
      <Footer />
    </div>
  );
};

export default App;
