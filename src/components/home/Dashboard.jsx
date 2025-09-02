import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import API from '../../api/api';

export default function Dashboard() {

  const [code, setCode] = useState('');

const handleRedeem = async () => {
  try {
    const res = await API.post('giveaway/redeem', { code });
    alert(res.data.message);
  } catch (err) {
    alert(err.response?.data?.message || 'Error redeeming code');
  }
};


  const navigate = useNavigate()
   const [balance,setBalance]= useState(0)
    const fetchBalance = async () => {
      try {
        const res = await API.get('/user/profile');
        setBalance(res.data.wallet.balance);
      } catch (err) {
        alert(err.response?.data?.message || 'Failed to fetch balance');
        navigate("/login")
      }
    };
  
    useEffect(() => {
      fetchBalance();
    }, []);

  return (
    <div className='home-page'>
      <Header/>
      <div className="home-page-company">
        <div className="title">
          STEP INTO THE SPOTLIGHT
        </div>
        <button className='about' ><span>About Us</span><svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e3e3e3"><path d="m560-242-43-42 168-168H160v-60h525L516-681l43-42 241 241-240 240Z"/></svg></button>
      </div>

      <div className="home-page-content">
        <div className="home-page-balance">
          <div className="home-page-balance-title">Your Balance</div>
          <div className="currentBalance">₹{balance}.00</div>
          <div className="withdrawBalance">Withdraw Balance ₹{balance}.00</div>
        <div className="home-page-balance-routers">
          <div className="deposit-route routes" onClick={()=>navigate('/deposit')} >
            <svg xmlns="http://www.w3.org/2000/svg" height="54px" viewBox="0 -960 960 960" width="54px" ><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            <div className="title">Deposit</div>
          </div>
          <div className="withdraw-route routes"  onClick={()=>navigate('/withdraw')}>
            <svg xmlns="http://www.w3.org/2000/svg" height="54px" viewBox="0 -960 960 960" width="54px" ><path d="M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"/></svg>
            <div className="title">Withdraw</div>
          </div>
          <div className="task-route routes" onClick={()=>navigate('/tasks')} >
            <svg xmlns="http://www.w3.org/2000/svg" height="54px" viewBox="0 -960 960 960" width="54px"><path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
            <div className="title">Task </div>
          </div>
          <div className="referal-route routes" onClick={()=>navigate('/referral')} >
            <svg xmlns="http://www.w3.org/2000/svg" height="54px" viewBox="0 -960 960 960" width="54px"><path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z"/></svg>
            <div className="title">Refer </div>
          </div>
        </div>
      </div>
      <div className="home-page-services">
        <div className="home-page-services-title">My Service</div>
        <div className="home-page-services-grid">
          <div className="home-page-services-grid-item" onClick={()=>navigate('/team')}>
            <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50px" ><path d="M0-240v-53q0-38.57 41.5-62.78Q83-380 150.38-380q12.16 0 23.39.5t22.23 2.15q-8 17.35-12 35.17-4 17.81-4 37.18v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.86-3.5-37.43T765-377.27q11-1.73 22.17-2.23 11.17-.5 22.83-.5 67.5 0 108.75 23.77T960-293v53H780Zm-480-60h360v-6q0-37-50.5-60.5T480-390q-79 0-129.5 23.5T300-305v5ZM149.57-410q-28.57 0-49.07-20.56Q80-451.13 80-480q0-29 20.56-49.5Q121.13-550 150-550q29 0 49.5 20.5t20.5 49.93q0 28.57-20.5 49.07T149.57-410Zm660 0q-28.57 0-49.07-20.56Q740-451.13 740-480q0-29 20.56-49.5Q781.13-550 810-550q29 0 49.5 20.5t20.5 49.93q0 28.57-20.5 49.07T809.57-410ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.35-60Q506-540 523-557.35t17-43Q540-626 522.85-643t-42.5-17q-25.35 0-42.85 17.15t-17.5 42.5q0 25.35 17.35 42.85t43 17.5ZM480-300Zm0-300Z"/></svg>
            <div className="title">Team</div>
          </div>
          <div className="home-page-services-grid-item" onClick={()=>navigate('/giveaway')}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" ><path d="M160-80v-445H80v-230h220q-8-12-12-25.5t-4-27.5q0-46.67 32.67-79.33Q349.33-920 396-920q24 0 46.5 10t37.5 29q15-19 37.5-29t46.5-10q46.67 0 79.33 32.67Q676-854.67 676-808q0 14-4 27.5T660-755h220v230h-80v445H160Zm404.07-780Q542-860 527-845.07t-15 37Q512-786 526.93-771t37 15Q586-756 601-770.93t15-37Q616-830 601.07-845t-37-15ZM344-808.07Q344-786 358.93-771t37 15Q418-756 433-770.93t15-37Q448-830 433.07-845t-37-15Q374-860 359-845.07t-15 37ZM140-695v110h310v-110H140Zm310 555v-385H214v385h236Zm60 0h236v-385H510v385Zm310-445v-110H510v110h310Z"/></svg>
            <div className="title">Exchange</div>
          </div>
          <div className="home-page-services-grid-item" onClick={()=>navigate('/orders')}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" ><path d="M203-160v-60h554v60H203Zm-1-144-53-334q-5 2-9.5 2.5t-9.5.5q-21 0-35.5-14.5T80-685q0-21 14.5-36t35.5-15q21 0 36 15t15 36q0 8-2.5 16t-7.5 14l148 66 141-194q-14-6-22.5-18.5T429-830q0-21 15-35.5t36-14.5q21 0 36 14.5t15 35.5q0 16-8.5 28.5T500-783l141 194 148-66q-5-6-7.5-14t-2.5-16q0-21 15-36t35-15q21 0 36 15t15 36q0 21-15 35.5T829-635q-5 0-9-1t-9-3l-53 335H202Zm51-60h454l32-203-118 53-141-195-141 195-118-53 32 203Zm227 0Z"/></svg>
            <div className="title">Orders </div>
          </div>
          <div className="home-page-services-grid-item" onClick={()=>navigate('/bank')}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px"><path d="M212-241v-339h60v339h-60Zm242 0v-339h60v339h-60ZM80-121v-60h800v60H80Zm608-120v-339h60v339h-60ZM80-640v-53l400-228 400 228v53H80Zm134-60h532-532Zm0 0h532L480-852 214-700Z"/></svg>
            <div className="title">Bank</div>
          </div>
        </div>
      </div>
      </div>
      <Navbar/>
    </div>
  );
}
