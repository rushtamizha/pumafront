import React, { useEffect, useState } from 'react';
import adminAPI from '../../api/adminAPI';
import "../../App.css"


export default function AdminUserPage() {
   const [users, setUsers] = useState([]);

  const admindashboard = async () => {
    try {
      const res = await adminAPI.get('/users');
      setUsers(res.data);
      console.log(res.data)
    } catch (err) {
      alert('Failed to load profile');
    }
  };

  useEffect(()=>{
    admindashboard()
  },[])

  return (
    <div className="admin-container">
      <h2>User Management Panel</h2>
      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Referral Code</th>
              <th>Referred By</th>
              <th>Referrals</th>
              <th>Deposit</th>
              <th>Withdrawal</th>
              <th>Withdraw Requests</th>
              <th>Deposit History</th>
              <th>Withdrawal History</th>
              <th>Bank Details</th>
              <th>Purchases</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.mobile}</td>
                <td>{user.referralCode}</td>
                <td>{user.referredBy || 'N/A'}</td>
                <td>
                  L1: {user.referrals?.level1?.length || 0} <br />
                  L2: {user.referrals?.level2?.length || 0} <br />
                  L3: {user.referrals?.level3?.length || 0}
                </td>
                <td>₹{user.wallet?.deposit || 0}</td>
                <td>₹{user.wallet?.withdrawal || 0}</td>
                <td>{user.withdrawRequests?.length || 0}</td>
                <td>
                  {(user.deposits || []).map(d => (
                    <div key={d._id}>₹{d.amount} - {new Date(d.date).toLocaleDateString()}</div>
                  ))}
                </td>
                <td>
                  {(user.withdrawals || []).map(w => (
                    <div key={w._id}>₹{w.amount} - {new Date(w.date).toLocaleDateString()}</div>
                  ))}
                </td>
                <td>
                  {user.bankDetails?.accountNumber}<br />
                  {user.bankDetails?.ifsc}<br />
                  {user.bankDetails?.bankName}
                </td>
                <td>
                  {(user.purchases || []).map(p => (
                    <div key={p._id}>{p.productName} - ₹{p.amount}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
