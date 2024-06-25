import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Login from "./Login";
import Register from "./Register";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Profile from "./Profile";
import { auth } from "./firebase/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/profile"
                element={isUserLogin ? <Profile /> : <Login />}
              />
            </Routes>
          </main>
          <ToastContainer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
