import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="calc-header">
      <div className="calc-header-inner">
        <span className="calc-brand">CASIO</span>
        <div className="calc-model-block">
          <span className="calc-model-name">fx-JP900</span>
          <span className="calc-model-sub">GUIDE</span>
        </div>
        <span className="calc-series">S-V.P.A.M.</span>
      </div>
      <div className="calc-header-trim" />
    </header>
  );
}

export default Header;
