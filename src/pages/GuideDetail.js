import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/GuideDetail.css';

const guideData = {
  '1': {
    title: '基本操作',
    content: [
      { heading: '数値の入力', body: '数字キーを押して数値を入力します。小数点は「.」キーを使用します。' },
      { heading: '四則演算', body: '「+」「−」「×」「÷」キーで四則演算ができます。「=」キーで結果を表示します。' },
      { heading: 'クリア操作', body: '「AC」キーで全クリア、「C」キーで直前の入力を消去します。' },
    ],
  },
  '2': {
    title: '三角関数',
    content: [
      { heading: 'sin・cos・tan', body: '角度を入力してからsin/cos/tanキーを押します。' },
      { heading: '角度モード', body: 'ラジアン（RAD）と度（DEG）の切り替えができます。' },
      { heading: '逆三角関数', body: 'SHIFTキーとsin/cos/tanを組み合わせてarcsin/arccos/arctanを計算します。' },
    ],
  },
  '3': {
    title: '対数・指数',
    content: [
      { heading: '常用対数（log）', body: '「log」キーで常用対数（底10）を計算します。' },
      { heading: '自然対数（ln）', body: '「ln」キーで自然対数（底e）を計算します。' },
      { heading: '指数計算', body: '「e^x」キーでネイピア数eを底とする指数を計算します。' },
    ],
  },
  '4': {
    title: '統計計算',
    content: [
      { heading: 'データ入力', body: 'STATモードに切り替えてデータを入力します。' },
      { heading: '平均・分散', body: '入力後、統計キーで平均値（x̄）や標準偏差（σ）を求められます。' },
      { heading: '回帰計算', body: '線形回帰や二次回帰などの回帰分析もSTATモードで行えます。' },
    ],
  },
};

function GuideDetail() {
  const { id } = useParams();
  const guide = guideData[id];

  if (!guide) {
    return (
      <div className="guide-detail">
        <Link to="/guides" className="back-link">← ガイド一覧へ戻る</Link>
        <p className="not-found">ガイドが見つかりませんでした。</p>
      </div>
    );
  }

  return (
    <div className="guide-detail">
      <header className="guide-detail-header">
        <Link to="/guides" className="back-link">← ガイド一覧へ戻る</Link>
        <h1>{guide.title}</h1>
      </header>
      <main className="guide-detail-main">
        {guide.content.map((section, index) => (
          <section key={index} className="guide-section">
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </main>
    </div>
  );
}

export default GuideDetail;
