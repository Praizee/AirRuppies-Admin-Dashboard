import React from "react";
import { Route, Routes } from 'react-router-dom';
import PublicLayout from "../Layouts/PublicLayout";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import AuthRoute from './AuthRoute'; // Import the AuthRoute component

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Overview from "../Pages/Transactions/Overview";
import Refunds from "../Pages/Transactions/Refunds";
import TransactionsDetails from "../Pages/Transactions/TransactionsDetails";
import TransactionsFullList from "../Pages/Transactions/TransactionsFullList";
import Savings from "../Pages/Savings/Savings";
import Cards from "../Pages/Cards/Cards";
import Account from "../Pages/Account/Account";
import Customers from "../Pages/Customers/Customers";
import Admin from "../Pages/Admin/Admin";
import Roles from "../Pages/Roles/Roles";
import Permissions from "../Pages/Permissions/Permissions";
import Profile from "../Pages/Profile/Profile";
import Settings from "../Pages/Settings/Settings";
import Ads from "../Pages/Ads/Ads";
import Promotions from "../Pages/Promotions/Promotions";
import OTAUpdate from "../Pages/OTAUpdate/OTAUpdate";
import NotFoundPage from "../Pages/404 Page/NotFoundPage";
import UnderMaintenance from "../Pages/UnderMaintenancePage/UnderMaintenance";
import NotAuthorized from "../Pages/NotAuthorizedPage/NotAuthorized";
import ServerError from "../Pages/ServerErrorPage/ServerError";
import CardDetails from "../Pages/Cards/CardDetails";
import AccountsDetails from "../Pages/Account/AccountsDetails";
import PromotionDetails from "../Pages/Promotions/PromotionDetails";
import AdsDetails from "../Pages/Ads/AdsDetails";
import SavingsDetails from "../Pages/Savings/SavingsDetails";
import CustomersDetails from "../Pages/Customers/CustomersDetails";
import Airtime from "../Pages/BillPayment/Airtime/Airtime";
import AirtimeDetails from "../Pages/BillPayment/Airtime/AirtimeDetails";
import Data from "../Pages/BillPayment/Data/Data";
import DataDetails from "../Pages/BillPayment/Data/DataDetails";
import Utility from "../Pages/BillPayment/Utility/Utility";
import UtilityDetails from "../Pages/BillPayment/Utility/UtilityDetails";
import Electricity from "../Pages/BillPayment/Electricity/Electricity";
import ElectricityDetails from "../Pages/BillPayment/Electricity/ElectricityDetails";
import CableTV from "../Pages/BillPayment/CableTV/CableTV";
import CableTVDetails from "../Pages/BillPayment/CableTV/CableTVDetails";
import BVNForm from "../Pages/SignUp/BVN";


export default function App() {

  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="bvn-form" element={<BVNForm />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      <Route element={<AuthenticatedLayout />}>
        {/* <Route index element={<Dashboard />} /> */}
        {/* change this back to being the index element when the authentication endpoint is setup */}
        <Route path="dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
        <Route path="transactions-details" element={<AuthRoute><TransactionsDetails /></AuthRoute>} />
        <Route path="transactions-list" element={<AuthRoute><TransactionsFullList /></AuthRoute>} />
        <Route path="transactions/overview" element={<AuthRoute><Overview /></AuthRoute>} />
        <Route path="transactions/refunds" element={<AuthRoute><Refunds /></AuthRoute>} />
        <Route path="savings" element={<AuthRoute><Savings /></AuthRoute>} />
        <Route path="savings-details" element={<AuthRoute><SavingsDetails /></AuthRoute>} />
        <Route path="cards" element={<AuthRoute><Cards /></AuthRoute>} />
        <Route path="card-details" element={<AuthRoute><CardDetails /></AuthRoute>} />
        <Route path="account" element={<AuthRoute><Account /></AuthRoute>} />
        <Route path="account-details" element={<AuthRoute><AccountsDetails /></AuthRoute>} />
        <Route path="customers" element={<AuthRoute><Customers /></AuthRoute>} />
        <Route path="customers-details" element={<AuthRoute><CustomersDetails /></AuthRoute>} />
        <Route path="bill-payment/airtime" element={<AuthRoute><Airtime /></AuthRoute>} />
        <Route path="bill-payment/airtime-details" element={<AuthRoute><AirtimeDetails /></AuthRoute>} />
        <Route path="bill-payment/data" element={<AuthRoute><Data /></AuthRoute>} />
        <Route path="bill-payment/data-details" element={<AuthRoute><DataDetails /></AuthRoute>} />
        <Route path="bill-payment/utility" element={<AuthRoute><Utility /></AuthRoute>} />
        <Route path="bill-payment/utility-details" element={<AuthRoute><UtilityDetails /></AuthRoute>} />
        <Route path="bill-payment/electricity" element={<AuthRoute><Electricity /></AuthRoute>} />
        <Route path="bill-payment/electricity-details" element={<AuthRoute><ElectricityDetails /></AuthRoute>} />
        <Route path="bill-payment/cabletv" element={<AuthRoute><CableTV /></AuthRoute>} />
        <Route path="bill-payment/cabletv-details" element={<AuthRoute><CableTVDetails /></AuthRoute>} />
        <Route path="admin" element={<AuthRoute><Admin /></AuthRoute>} />
        <Route path="roles" element={<AuthRoute><Roles /></AuthRoute>} />
        <Route path="permissions" element={<AuthRoute><Permissions /></AuthRoute>} />
        <Route path="profile" element={<AuthRoute><Profile /></AuthRoute>} />
        <Route path="settings" element={<AuthRoute><Settings /></AuthRoute>} />
        <Route path="ads" element={<AuthRoute><Ads /></AuthRoute>} />
        <Route path="ads-details" element={<AuthRoute><AdsDetails /></AuthRoute>} />
        <Route path="promotions" element={<AuthRoute><Promotions /></AuthRoute>} />
        <Route path="promotion-details" element={<AuthRoute><PromotionDetails /></AuthRoute>} />
        <Route path="ota-update" element={<AuthRoute><OTAUpdate /></AuthRoute>} />
      </Route>
      {/* This is the catch-all route */}
      <Route path="*" element={<NotFoundPage />} />
      <Route path="under-maintenance" element={<UnderMaintenance />} />
      <Route path="unauthorized" element={<NotAuthorized />} />
      <Route path="server-error" element={<ServerError />} />
    </Routes>
  )

}