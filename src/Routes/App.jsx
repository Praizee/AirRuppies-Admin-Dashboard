import React from "react";
import { Route, Routes } from 'react-router-dom';
import PublicLayout from "../Layouts/PublicLayout";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import AuthRoute from './AuthRoute'; // Import the AuthRoute component

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Transactions from "../Pages/Transactions/Transactions";
import Savings from "../Pages/Savings/Savings";
import Cards from "../Pages/Cards/Cards";
import Account from "../Pages/Account/Account";
import Customers from "../Pages/Customers/Customers";
import BillPayment from "../Pages/BillPayment/BillPayment";
import Admin from "../Pages/Admin/Admin";
import Roles from "../Pages/Roles/Roles";
import Permissions from "../Pages/Permissions/Permissions";
import Profile from "../Pages/Profile/Profile";
import Settings from "../Pages/Settings/Settings";
import Ads from "../Pages/Ads/Ads";
import Promotions from "../Pages/Promotions/Promotions";
import OTAUpdate from "../Pages/OTAUpdate/OTAUpdate";
import NotFoundPage from "../Pages/404 Page/NotFoundPage";

export default function App() {

  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      <Route element={<AuthenticatedLayout />}>
        {/* <Route index element={<Dashboard />} /> */}
        {/* change this back to being the index element when the authentication endpoint is setup */}
        <Route path="dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
        <Route path="transactions" element={<AuthRoute><Transactions /></AuthRoute>} />
        <Route path="savings" element={<AuthRoute><Savings /></AuthRoute>} />
        <Route path="cards" element={<AuthRoute><Cards /></AuthRoute>} />
        <Route path="account" element={<AuthRoute><Account /></AuthRoute>} />
        <Route path="customers" element={<AuthRoute><Customers /></AuthRoute>} />
        <Route path="bill-payment" element={<AuthRoute><BillPayment /></AuthRoute>} />
        <Route path="admin" element={<AuthRoute><Admin /></AuthRoute>} />
        <Route path="roles" element={<AuthRoute><Roles /></AuthRoute>} />
        <Route path="permissions" element={<AuthRoute><Permissions /></AuthRoute>} />
        <Route path="profile" element={<AuthRoute><Profile /></AuthRoute>} />
        <Route path="settings" element={<AuthRoute><Settings /></AuthRoute>} />
        <Route path="ads" element={<AuthRoute><Ads /></AuthRoute>} />
        <Route path="promotions" element={<AuthRoute><Promotions /></AuthRoute>} />
        <Route path="ota-update" element={<AuthRoute><OTAUpdate /></AuthRoute>} />
      </Route>
      {/* This is the catch-all route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )

}