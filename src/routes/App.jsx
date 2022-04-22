import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import PasswordRecovery from "@pages/PasswordRecovery";
import SendEmail from "@pages/SendEmail";
import Login from "@pages/Login";
import CreateAccount from "@pages/CreateAccount";
import Home from "@pages/Home";
import MyOrder from "@pages/MyOrder";
import MyOrders from "@pages/MyOrders";
import NotFound from "@pages/NotFound";
import MyAccount from "@pages/MyAccount";
import "@styles/Global.css";
import AppContext from "@context/AppContext";
import useInitialState from '@hooks/useInitialState';

const App = () => {
  const initialState = useInitialState(); //variable que recibe lo que retorna useInitialState
  return (
    
    <AppContext.Provider value={initialState}> 
      <BrowserRouter basename="/react-shop">
        <Layout>
          <Routes>
            <Route exact path="react-shop/login" element={<Login />} />
            <Route exact path="/react-shop/password-recovery" element={<PasswordRecovery />}/>
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/create-account" element={<CreateAccount />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/my-order" element={<MyOrder />} />
            <Route exact path="/my-orders" element={<MyOrders />} />
            <Route exact path="/my-account" element={ <MyAccount />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
