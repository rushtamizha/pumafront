import { useState, useEffect } from 'react';
import API from '../../api/api';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('mobile');

  const fetchProducts = async () => {
    try {
      const res = await API.get('user/order');
      setOrders(res.data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const filtered = orders.filter(product => product.product && product.product.category.toLowerCase() === activeTab);


  return (
    <div className="products-page " >

      <Navbar/>
      <Header/>
      <div className="product-catogery">
            <div onClick={() => setActiveTab('mobile')} className={activeTab === 'mobile' ? 'items active' : 'items'}>Stable
            </div>
            <div onClick={() => setActiveTab('toy')} className={activeTab === 'toy' ? 'items active' : 'items'}>Welfare
            </div>
            <div onClick={() => setActiveTab('shirt')} className={activeTab === 'shirt' ? 'items active' : 'items'}>Activity
            </div>
        </div>

        <div className="product-container">
            {filtered.length === 0 && <p className='noItem'>No products found.</p>}
           {filtered.map(product => (
            <div className="product-box" key={product._id}> 
              <div className="purchaseBar">Purchased</div>
              <div className="border"></div>
                <div className="product-box-item">
                    <div className="product-box-title">
                        <span>VIP {product.product.vipLevel} {product.product.name}</span>
                        <span> {product.name}</span>
                    </div>
                    <div className="product-box-amount">
                        <span>₹ {product.amount}.00</span>
                        <span>Invest Amount</span>
                    </div>
                </div>
                <div className="product-box-item">
                    <span>Daily Income:</span>
                    <span>₹ {product.product.dayIncome}.00</span>
                </div>
                <div className="product-box-item">
                    <span>Income Days:</span>
                    <span>{product.product.expectedDate} Days</span>
                </div>
                <div className="product-box-item">
                    <span>Total Earnings:</span>
                    <span>₹{product.product.monthIncome}.00</span>
                </div>
                <div className="product-box-item">
                    <span>Purchase Date:</span>
                    <span>{new Date(product.createdAt).toLocaleDateString('en-IN')}</span>
                </div>
                <div className="product-box-item">
                    <span>Expiration Date:</span>
                    <span>{new Date(product.expectedCashbackDate).toLocaleDateString('en-IN')}</span>
                </div>
                
            </div>
            ))}
        </div>

    </div>
  );
}
