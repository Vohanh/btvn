import React from 'react';
import '../../assets/css/main.css'
class Header extends React.Component {
  render() {
    return (
      <div className="headercss">
        <header>
          <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
            <li><a href="/farms">Nông trại</a></li>
            <li><a href="/news">Tin tức</a></li>
            <li><a href="/contact">Liên hệ</a></li>
          </ul>
        </header>
      </div>
    );
  }
}
export default Header;
