import { useState } from 'react';
import API from '../../api/api';

 const  Giveaway=()=>{
  const [code, setCode] = useState('');

const handleRedeem = async () => {
  try {
    const res = await API.post('giveaway/redeem', { code });
    alert(res.data.message);
  } catch (err) {
    alert(err.response?.data?.message || 'Error redeeming code');
  }
};

  return (
    <div className='giveaway-page '>
      <div className="giveaway-toast">
      <span>Cash Prizes</span>
      <div className="giveaway-input">
        <span>Redeem Code</span>
        <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter code" />
      </div>
      <button onClick={()=>handleRedeem()}>Claim</button>
      </div>
    </div>
  );
}

export default Giveaway