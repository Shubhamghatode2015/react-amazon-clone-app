import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./componets/firebase";

import Checkout from "./componets/Checkout";
import { useStateValue } from "./context/StateProvider";

function App() {

  const [{ basket, user}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    onAuthStateChanged(auth, (authUser) => {

     console.log(authUser)
           if (authUser) {
             // the user just logged in / the user was logged in
     
             dispatch
              ({ type: "SET_USER",
               user: authUser,})
             
           } else {
             // the user is logged out
             dispatch
            ( {
               type: "SET_USER",
               user: null,
             });
           }
   });
     
   
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
          <Navbar auth={auth} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
