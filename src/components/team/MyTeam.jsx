import React, { useState, useEffect } from 'react';
import API from '../../api/api';
import { useNavigate } from 'react-router-dom';
export default function MyTeam() {
  const [activeTab, setActiveTab] = useState('mobile');
  const [team, setTeam] = useState({ level1: [], level2: [], level3: [] });

  const navigate = useNavigate()
  const fetchTeam = async () => {
    try {
      const res = await API.get('/team/my-team');
      setTeam(res.data);
      console.log(res.data)
    } catch (err) {
      alert('Failed to load team');
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <div className='my-team-page'>
      <div className="team-page-header" onClick={()=>navigate("/")}>
        <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e3e3e3"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
        <div>My Team</div>
      </div>
      <div className="team-page-balance">
        <div className="team-count">
          <span>Quantity</span>
          <span>{team.level1.length}</span>
        </div>
        <div className="team-total">
          <span>Total Gains</span>
          <span>7221.00</span>
        </div>
      </div>
      <div className="team-referals">
        <div className={activeTab === 'mobile' ? 'item active' : 'item'} onClick={() => setActiveTab('mobile')}>Level 1</div>
        <div className={activeTab === 'toy' ? 'item active' : 'item'} onClick={() => setActiveTab('toy')}>Level 2</div>
        <div className={activeTab === 'shirt' ? 'item active' : 'item'} onClick={() => setActiveTab('shirt')}>Level 3</div>
      </div>
      <div className="team-table">
        <div className="table-head">
          <div>User ID</div>
          <div>Register Date</div>
          <div>User Status</div>
        </div>
       {
  team.level1.map((user) => (
    <div className="table-body" key={user._id || user.mobile}>
      <div>{user.mobile}</div>
      <div>{new Date(user.createdAt).toLocaleDateString()}</div>
      <div className='active'>{user.vipPurchases.mobile >=1 ? 'Active' : 'Inactive'}</div>
    </div>
  ))
}
      </div>
    </div>
  );
}
