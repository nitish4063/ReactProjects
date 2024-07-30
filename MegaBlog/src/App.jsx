import "./App.css";
// import config from './config/config'
import { Header, Footer } from "./components";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import authService from "./appwrite/auth.js";
import { login, logOut } from "./store/authSlice.js";

function App() {
  // console.log(config)

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logOut());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <Footer />
      </div>
    </div>
  ) : (
    <div>Loading....</div>
  );
}

export default App;
