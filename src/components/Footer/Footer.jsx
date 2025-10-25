import React from 'react';
import { Link } from 'react-router'; // Linkleri kullanmak için
import './Footer.css';

export default function Footer() {
  // Telif hakkı için yılı dinamik olarak alalım
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer__container">
      <div className="Footer__content-wrapper">
        
        {/* Sol Taraf: Link Grupları */}
        <div className="Footer__links-container">
          
          <div className="Footer__links-group">
            <h4 className="Footer__links-title">Hakkında</h4>
            <ul className="Footer__links-list">
              <li><Link to="#" className="Footer__link">Craigslist Hakkında</Link></li>
              <li><Link to="#" className="Footer__link">Kariyer</Link></li>
              <li><Link to="#" className="Footer__link">Sitemap</Link></li>
            </ul>
          </div>

          <div className="Footer__links-group">
            <h4 className="Footer__links-title">Destek</h4>
            <ul className="Footer__links-list">
              <li><Link to="#" className="Footer__link">Yardım</Link></li>
              <li><Link to="#" className="Footer__link">Güvenlik</Link></li>
              <li><Link to="#" className="Footer__link">İletişim</Link></li>
            </ul>
          </div>

          <div className="Footer__links-group">
            <h4 className="Footer__links-title">Yasal</h4>
            <ul className="Footer__links-list">
              <li><Link to="#" className="Footer__link">Gizlilik</Link></li>
              <li><Link to="#" className="Footer__link">Kurallar</Link></li>
            </ul>
          </div>

        </div>

        {/* Sağ Taraf: Dil Seçimi (Örnek) */}
        <div className="Footer__language-selector">
          <label htmlFor="language-select" className="Footer__links-title">Dil</label>
          <select id="language-select" className="Footer__select">
            <option value="tr">Türkçe (TR)</option>
            <option value="en">English (US)</option>
          </select>
        </div>

      </div>

      {/* Alt Kısım: Telif Hakkı */}
      <div className="Footer__bottom-bar">
        <p className="Footer__copyright">
          &copy; {currentYear} Craigslist
        </p>
      </div>
    </footer>
  );
}