import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Login from "./Login";
import Register from "./Register";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import { auth } from "./firebase/firebase";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);
  const [isUserLogin, setUserLogin] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserLogin(user);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={isUserLogin ? <Profile /> : <Login />}
          />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
