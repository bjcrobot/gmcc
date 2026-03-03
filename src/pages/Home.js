import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>関数電卓ガイド</h1>
        <p>関数電卓の使い方をわかりやすく解説します。</p>
      </header>
      <main className="home-main">
        <section className="home-intro">
          <h2>このアプリについて</h2>
          <p>
            このアプリは関数電卓の操作方法や機能を学ぶためのガイドアプリです。
            初心者から上級者まで、様々なレベルのガイドをご用意しています。
          </p>
        </section>
        <section className="home-links">
          <Link to="/guides" className="btn-primary">
            ガイド一覧を見る
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Home;
