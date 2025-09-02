import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserRegister from './components/auth/UserRegister';
import UserLogin from './components/auth/UserLogin';
import AdminRegister from './components/admin/AdminRegister';
import AdminLogin from './components/admin/AdminLogin';
import Home from './components/home/Dashboard';
import Wallet from './components/wallet/Wallet';
import Deposit from './components/deposit/Deposit';
import WithdrawRecord from './components/withdraw/WithdrawRecord';
import Withdraw from './components/withdraw/Withdraw';
import BankAdd from './components/bank/BankAdd';
import Bank from './components/bank/Bank';
import Orders from './components/orders/Orders';
import Team from './components/team/MyTeam';
import Referral from './components/refer/ReferAndEarn';
import Tasks from './components/tasks/Tasks';
import Giveaway from './components/giveaway/Giveaway';
import Commission from './components/commission/Commission';
import Rewards from './components/rewards/Rewards';
import Transactions from './components/transaction/TransactionRecords';
import Profile from './components/profile/Profile';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Depositerecord from './components/deposit/Depositerecord';
import Products from './components/products/Products';
import AdminUserPage from './components/admin/AdminUserPage';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/admin-register" element={<AdminRegister />} />
      
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/wallet" element={<Wallet />} />

      <Route path="/admin" element={<AdminUserPage />} />

      <Route path="/deposit" element={<Deposit />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/add-bank" element={<BankAdd />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/products" element={<Products />} />
      <Route path="/bank" element={<Bank />} />
      <Route path="/team" element={<Team />} />
      <Route path="/referral" element={<Referral />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/giveaway" element={<Giveaway />} />
      <Route path="/commission" element={<Commission />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/withdrawal-record" element={<WithdrawRecord />} />
      <Route path="/deposit-record" element={<Depositerecord />} />
    </Routes>
  );
}
