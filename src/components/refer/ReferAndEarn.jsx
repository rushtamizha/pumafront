import React, { useState, useEffect } from 'react';
import API from '../../api/api';
import { useNavigate } from 'react-router-dom';

export default function ReferAndEarn() {
  const [referralLink, setReferralLink] = useState('');
  const[referralcode,setReferralCode] = useState('')
      const navigate = useNavigate();
  const [copySuccess, setCopySuccess] = useState('');

  const fetchReferral = async () => {
    try {
      const res = await API.get('/user/profile');
      setReferralCode(res.data.referralCode);
      setReferralLink(`${window.location.origin}/register?ref=${res.data.referralCode}`);
    } catch (err) {
      alert('Failed to fetch referral');
    }
  };

  useEffect(() => {
    fetchReferral();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopySuccess('Copied!');
  };

  return (
    <div className='spread-page' >
      <div className="spread-page-header">
        <div className="spread-page-header-back" onClick={()=> navigate("/")}>
          <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e3e3e3"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
        </div>
        <div className="spread-page-header-title">Promotion Commission</div>
      </div>
      <div className="spread-page-content">
        <div className="spread-page-content-item-subtitle">
        Copy your referral link and send it to your friends to sign up.
      </div>
      <div className="spread-page-content-item">
        <div className="spread-page-content-item-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M19.2935 11.6694C19.0582 11.1988 18.7052 10.9635 18.4699 10.9635H17.9993L15.5285 12.14C15.5285 12.9636 14.9402 13.6696 14.1166 13.6696H9.29261C9.0573 13.6696 8.93964 13.4343 8.93964 13.3166C8.93964 13.0813 9.17496 12.9636 9.29261 12.9636H13.8813C14.2342 12.9636 14.3519 12.7283 14.4696 12.3754C14.4696 11.6694 13.8813 11.0811 13.1753 11.0811H10.4692C10.4692 10.9635 10.3515 10.8458 10.3515 10.8458L9.8809 10.3752C9.29261 9.78689 8.58667 9.55157 7.64541 9.55157H4.35099V9.08094C4.35099 8.84562 4.23333 8.72797 3.99801 8.72797H0.938911C0.821253 8.72797 0.585938 8.84562 0.585938 9.08094V15.4345C0.585938 15.5521 0.703595 15.6698 0.938911 15.6698H4.11567C4.35099 15.6698 4.46865 15.5521 4.46865 15.3168V14.7285L10.4692 17.9053C11.1751 18.1406 11.9987 17.9053 12.4694 17.5523L18.4699 13.3166L18.5876 13.199C19.2935 12.846 19.5288 12.2577 19.2935 11.6694Z" fill="#0000A0"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0648 10.6535C15.4321 10.6535 17.3512 8.73442 17.3512 6.36708C17.3512 3.99974 15.4321 2.08063 13.0648 2.08063C10.6974 2.08063 8.77832 3.99974 8.77832 6.36708C8.77832 8.73442 10.6974 10.6535 13.0648 10.6535ZM14.1778 3.82922C14.2623 3.68278 14.4496 3.63261 14.596 3.71716C14.7424 3.8017 14.7926 3.98896 14.7081 4.1354L11.9525 8.90819C11.8679 9.05463 11.6807 9.10481 11.5343 9.02026C11.3878 8.93571 11.3376 8.74846 11.4222 8.60202L14.1778 3.82922ZM15.1864 7.59341C15.0173 7.88629 14.6428 7.98664 14.3499 7.81754C14.057 7.64845 13.9567 7.27394 14.1257 6.98106C14.2948 6.68818 14.6694 6.58783 14.9622 6.75692C15.2551 6.92602 15.3555 7.30053 15.1864 7.59341ZM11.168 5.98049C11.4609 6.14959 11.8354 6.04924 12.0045 5.75636C12.1736 5.46348 12.0733 5.08897 11.7804 4.91987C11.4875 4.75078 11.113 4.85113 10.9439 5.14401C10.7748 5.43689 10.8751 5.8114 11.168 5.98049Z" fill="#0000A0"></path></svg>
          <span>Sharing Instructions</span>
        </div>
        <div className="wrapper-content">
          <div className="spread-page-content-item-invite">
            Direct Recommendation Level 1
          </div>
          <div className="tips">
            <span>BASIC 33%</span>
            <span>FLASH SALE ZONE 5%</span>
          </div>
          <div className="spread-page-content-item-invite">
            Indirect Recommendation Level 2
          </div>
          <div className="tips">
            <span>BASIC 2%</span>
          </div>
          <div className="spread-page-content-item-invite">
            Indirect Recommendation Level 3
          </div>
          <div className="tips">
            <span>BASIC 1%</span>
          </div>
        </div>
        
      </div>
      <div className="spread-page-content-describe">
          <div class="spread-page-content-value">If you invite A to Invest Successfully, You will get an additional reward of 100, and you will get <span>33%</span> (Product type is Basic) or <span>5%</span> (Product type is Flash Sale Zone) of A's total investment.</div>
          <div class="spread-page-content-value">When A invites B to Invest Successfully, You will also receive a reward of <span>2%</span> (Product type is Basic) of B's total investment.</div>
          <div class="spread-page-content-value">When B invites C to Invest Successfully, You will also receive a reward of <span>1%</span> (Product type is Basic) of B's total investment.</div>
        </div>
        <div class="spread-page-content-item inviteLink"><div id="inviteLink" class="shareLink truncate">{referralLink}</div> <button onClick={copyToClipboard} type="primary" class="button flex items-center justify-center button-primary default w-full share"><svg data-v-997eabf8="" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none"><path data-v-997eabf8="" d="M5.19597 10.0001C4.49259 9.29676 4.09744 8.34278 4.09744 7.34806C4.09744 6.35333 4.49259 5.39935 5.19597 4.69597C5.89934 3.9926 6.85332 3.59744 7.84805 3.59744C8.84277 3.59744 9.79676 3.9926 10.5001 4.69597L11.8251 6.02097C11.9846 6.1575 12.1896 6.22883 12.3993 6.22073C12.6091 6.21263 12.808 6.12569 12.9564 5.97728C13.1048 5.82886 13.1918 5.62991 13.1999 5.42018C13.208 5.21045 13.1367 5.00539 13.0001 4.84597L11.6793 3.51681C11.1683 3.00411 10.5589 2.60016 9.88763 2.32931C8.57859 1.80429 7.11751 1.80429 5.80847 2.32931C5.13807 2.60171 4.52904 3.00568 4.01736 3.51736C3.50567 4.02905 3.1017 4.63807 2.8293 5.30847C2.30169 6.61701 2.30169 8.0791 2.8293 9.38764C3.10016 10.0589 3.5041 10.6683 4.0168 11.1793L5.34597 12.5001C5.50474 12.6435 5.71256 12.7203 5.92641 12.7147C6.14025 12.709 6.34374 12.6214 6.49473 12.4698C6.64573 12.3183 6.73267 12.1145 6.73755 11.9007C6.74243 11.6868 6.66489 11.4792 6.52097 11.321L5.19597 10.0001ZM18.171 10.6126C17.9001 9.94139 17.4962 9.33193 16.9835 8.82097L15.6543 7.50014C15.5784 7.41662 15.4862 7.34941 15.3835 7.30257C15.2808 7.25573 15.1696 7.23025 15.0568 7.22768C14.9439 7.2251 14.8317 7.24548 14.727 7.28758C14.6222 7.32968 14.5272 7.39262 14.4475 7.47258C14.3678 7.55255 14.3052 7.64786 14.2635 7.75275C14.2217 7.85765 14.2017 7.96992 14.2047 8.08277C14.2077 8.19561 14.2336 8.30668 14.2808 8.40922C14.328 8.51177 14.3955 8.60365 14.4793 8.67931L15.8043 10.0001C16.1526 10.3484 16.4288 10.7619 16.6173 11.2169C16.8058 11.672 16.9028 12.1597 16.9028 12.6522C16.9028 13.1448 16.8058 13.6325 16.6173 14.0875C16.4288 14.5426 16.1526 14.956 15.8043 15.3043C15.456 15.6526 15.0426 15.9289 14.5875 16.1173C14.1325 16.3058 13.6448 16.4028 13.1522 16.4028C12.6597 16.4028 12.172 16.3058 11.7169 16.1173C11.2619 15.9289 10.8484 15.6526 10.5001 15.3043L9.17513 13.9793C9.10043 13.8921 9.00849 13.8212 8.90511 13.7712C8.80172 13.7212 8.68911 13.6931 8.57434 13.6886C8.45958 13.6842 8.34513 13.7035 8.2382 13.7454C8.13126 13.7873 8.03414 13.8509 7.95292 13.9321C7.87171 14.0133 7.80816 14.1104 7.76627 14.2174C7.72437 14.3243 7.70503 14.4388 7.70947 14.5535C7.7139 14.6683 7.74201 14.7809 7.79203 14.8843C7.84205 14.9877 7.9129 15.0796 8.00013 15.1543L9.32513 16.4835C9.83609 16.9962 10.4456 17.4001 11.1168 17.671C12.4253 18.1986 13.8874 18.1986 15.196 17.671C15.8664 17.3986 16.4754 16.9946 16.9871 16.4829C17.4988 15.9712 17.9027 15.3622 18.1751 14.6918C18.7027 13.3833 18.7027 11.9212 18.1751 10.6126H18.171Z" fill="white"></path> <path data-v-997eabf8="" d="M13.1505 13.4829C13.311 13.4792 13.4671 13.4292 13.5998 13.339C13.7326 13.2487 13.8365 13.1221 13.899 12.9742C13.9615 12.8263 13.9799 12.6635 13.9521 12.5054C13.9243 12.3473 13.8514 12.2006 13.7422 12.0829L8.43803 6.75789C8.3606 6.68046 8.26869 6.61904 8.16753 6.57714C8.06636 6.53524 7.95794 6.51367 7.84845 6.51367C7.73895 6.51367 7.63053 6.53524 7.52937 6.57714C7.4282 6.61904 7.33629 6.68046 7.25886 6.75789C7.18144 6.83531 7.12002 6.92723 7.07812 7.02839C7.03622 7.12955 7.01465 7.23797 7.01465 7.34747C7.01465 7.45696 7.03622 7.56539 7.07812 7.66655C7.12002 7.76771 7.18144 7.85963 7.25886 7.93705L12.5839 13.2412C12.7349 13.3912 12.9377 13.4777 13.1505 13.4829Z" fill="white"></path></svg>Share Link for Revenue
         </button> <div class="cotpy-tips">Copy the referral link and send it to your friends and successfully register the account</div></div>
      </div>
    </div>
  );
}
