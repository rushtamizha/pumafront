import  { useEffect, useState } from 'react';
import API from '../../api/api';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';

const Products = () => {
    const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('mobile');

  const fetchProducts = async () => {
    try {
      const res = await API.get('products/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleBuy = async (productId) => {
    try {
      const res = await API.post('products/products/buy', { productId });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || 'Purchase failed');
    }
  };

  const filtered = products.filter(p => p.category.toLowerCase() === activeTab);

  return (
    <div className="products-page ">
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
            {filtered.length === 0 && <p>No products found.</p>}
           {filtered.map(product => (
            <div className="product-box" key={product._id}>
                <div className="product-box-item">
                    <div className="product-box-title">
                        <span>VIP {product.vipLevel} </span>
                        <span> {product.name}</span>
                    </div>
                    <div className="product-box-amount">
                        <span>₹ {product.price}.00</span>
                        <span>Invest Amount</span>
                    </div>
                </div>
                <div className="product-box-item">
                    <span>Daily Income:</span>
                    <span>₹ {product.dayIncome}.00</span>
                </div>
                <div className="product-box-item">
                    <span>Income Days:</span>
                    <span>56 Days</span>
                </div>
                <div className="product-box-item">
                    <span>Total Earnings:</span>
                    <span>₹{product.monthIncome}.00</span>
                </div>
                <div className="product-box-button">
                    <button onClick={() => handleBuy(product._id)} >Buy Now</button>
                </div>
            </div>
            ))}
        </div>
    </div>

  )
}

export default Products