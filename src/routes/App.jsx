import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/global.css";
import "../styles/_vars.scss";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import MyAccount from "../pages/MyAccount";
import NewPassword from "../pages/NewPassword";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/account" element={<MyAccount />} />
        <Route exact path="/create-account" element={<CreateAccount />} />
        <Route exact path="/recovery-password" element={<RecoveryPassword />} />
        <Route exact path="/new-password" element={<NewPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
}
