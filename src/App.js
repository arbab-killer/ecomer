import React, { useEffect, useState } from "react";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { getAuth, onAuthStateChanged ,signOut } from "firebase/auth";
const auth = getAuth();

const App = () => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <>
        <div>
          <Toaster position="top-center"></Toaster>
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Signin />} />
          </Routes>
        </Router>
      </>
    );
  }

  return (
    <div>
    <Toaster position="top-center"></Toaster>
  <Home/>
    <div>
      <button onClick={()=>signOut(auth)}>logout</button>
    </div>
    </div>
  );
};

export default App;
