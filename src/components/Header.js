import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // CSS 파일을 임포트하여 스타일 적용

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* 로고 및 배너 부분 */}
        <div className="header-logo">
          <Link to="/">
            <img src="/logo.jpg" alt="" className="logo-image" />
          </Link>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav className="header-nav">
          <ul>
            <li><Link to="/">메인</Link></li>
            <li><Link to="/features">기능</Link></li>
            <li><Link to="/docs">사용 설명서</Link></li>
            <li><Link to="/about">개발자 소개</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
