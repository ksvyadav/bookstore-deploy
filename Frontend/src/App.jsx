import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { useAuth } from "./context/authProvider";
import About from "./components/About";


function App() {
  const [authUser, setAuthuser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-gray-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
