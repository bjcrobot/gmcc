# 関数電卓ガイドアプリ (gmcc)

関数電卓の使い方をわかりやすく解説するReactアプリです。

## セットアップ

```bash
npm install
npm start
```

## スクリプト

| コマンド | 説明 |
|---|---|
| `npm start` | 開発サーバーを起動 |
| `npm run build` | 本番用ビルドを生成 |
| `npm test` | テストを実行 |
| `npm run deploy` | GitHub Pagesへデプロイ |

## ディレクトリ構成

```
gmcc/
├── public/               # 静的ファイル
├── src/
│   ├── components/       # 再利用可能なUIコンポーネント
│   ├── pages/            # 各画面やページ
│   │   ├── Home.js       # ホームページ
│   │   ├── Guides.js     # ガイド一覧ページ
│   │   └── GuideDetail.js# ガイド詳細ページ
│   ├── services/         # ロジック、データ操作、API層
│   ├── utils/            # ユーティリティ関数
│   ├── hooks/            # カスタムフック
│   ├── App.js            # アプリ全体のエントリーポイント
│   ├── index.js          # Reactのレンダリングエントリー
│   └── styles/           # CSSスタイル
├── package.json
└── README.md
```

## デプロイ

GitHub Pagesへのデプロイ:

```bash
npm run deploy
```

デプロイ先: https://bjcrobot.github.io/gmcc
