import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Guides.css';

const guideList = [
  { id: '1', title: '基本操作', description: '電卓の基本的な使い方を学びましょう。' },
  { id: '2', title: '三角関数', description: 'sin、cos、tanなどの三角関数の使い方。' },
  { id: '3', title: '対数・指数', description: '対数（log）と指数（exp）の計算方法。' },
  { id: '4', title: '統計計算', description: '平均、標準偏差などの統計計算の方法。' },
];

function Guides() {
  return (
    <div className="guides">
      <header className="guides-header">
        <Link to="/" className="back-link">← ホームへ戻る</Link>
        <h1>ガイド一覧</h1>
      </header>
      <main className="guides-main">
        <ul className="guide-list">
          {guideList.map((guide) => (
            <li key={guide.id} className="guide-item">
              <Link to={`/guides/${guide.id}`} className="guide-link">
                <h2>{guide.title}</h2>
                <p>{guide.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Guides;
