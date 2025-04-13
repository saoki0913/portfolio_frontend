# ポートフォリオサイト フロントエンド

早稲田大学創造理工学研究科の修士1年生、青木駿介のポートフォリオサイトのフロントエンドプロジェクトです。AIロボティクスの研究とWebエンジニアとしての経験を紹介します。

## 技術スタック

- **フレームワーク**: Next.js 15.2.4
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **フォーム管理**: React Hook Form
- **バリデーション**: Zod
- **UIコンポーネント**: Radix UI
- **アニメーション**: tw-animate-css
- **APIクライアント**: Axios

## プロジェクト構造

```
src/
├── app/                    # Next.js アプリケーション
│   ├── works/             # プロジェクト詳細ページ
│   │   └── [id]/          # 動的ルーティング
│   ├── page.tsx           # メインページ
│   ├── layout.tsx         # レイアウト
│   └── globals.css        # グローバルスタイル
├── components/            # コンポーネント
│   ├── sections/         # メインページのセクション
│   │   ├── Header.tsx    # ヘッダーナビゲーション
│   │   ├── Hero.tsx      # ヒーローセクション
│   │   ├── About.tsx     # 自己紹介セクション
│   │   ├── Works.tsx     # プロジェクト一覧
│   │   ├── Skills.tsx    # スキルセクション
│   │   └── Contact.tsx   # コンタクトフォーム
│   ├── works/            # プロジェクト詳細コンポーネント
│   │   ├── HeroSection.tsx
│   │   ├── ProjectInfo.tsx
│   │   ├── Screenshots.tsx
│   │   └── TechIcon.tsx
│   └── ui/               # 共通UIコンポーネント
└── lib/                  # ユーティリティ関数
    ├── api/              # APIクライアント
    │   ├── client.ts     # Axiosクライアント設定
    │   ├── works.ts      # プロジェクトAPI
    │   ├── skills.ts     # スキルAPI
    │   ├── about.ts      # 自己紹介API
    │   ├── hero.ts       # ヒーローセクションAPI
    │   └── contact.ts    # コンタクトフォームAPI
    ├── types/            # 型定義
    └── utils/            # ユーティリティ関数

```

## 主な機能

- レスポンシブデザイン - モバイルからデスクトップまで対応
- ダークモード対応
- プロジェクト詳細ページ - 各プロジェクトの詳細情報表示
- 動的データフェッチング - バックエンドAPIからデータを取得
- コンタクトフォーム - バリデーション機能付き
- スムーズなスクロールアニメーション
- スキルセクションのインタラクティブな表示
- ソーシャルメディアリンク

## 環境変数設定

`.env.local`ファイルに以下の環境変数を設定してください：

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 開発環境のセットアップ

1. 依存関係のインストール:
```bash
npm install
# または
yarn install
```

2. 開発サーバーの起動:
```bash
npm run dev
# または
yarn dev
```

フロントエンドは`http://localhost:3000`で動作します。

## ビルドと本番環境

```bash
# ビルド
npm run build
# または
yarn build

# 本番環境での起動
npm start
# または
yarn start
```

## デプロイ

1. [Vercel](https://vercel.com)にアカウントを作成
2. リポジトリを接続
3. 環境変数を設定
4. デプロイ
