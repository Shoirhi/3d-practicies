# 3D Practicies

## 本番環境
- https://3d-practicies.pages.dev/

## プロジェクトの内容
- YouTube チャンネル Wawa Sensei が公開している 3D ポートフォリオをベースに、Astro + React で再構築した練習用プロジェクトです。
- スクロール操作に合わせて 3D モデルのカメラアニメーションとオーバーレイ UI が連動するインタラクティブな体験を再現しています。
- Cloudflare Pages でホスティングし、ブラウザからすぐに確認できるようにしています。

## 使用している技術
- Astro 4.x & TypeScript による静的サイト構築
- React 18 と @react-three/fiber / @react-three/drei を用いた Three.js ベースの 3D 表現
- glTF モデルの読み込みを gsap と組み合わせたアニメーション制御
- Tailwind CSS（tailwind-merge, tailwindcss-animate）によるスタイリング
- Cloudflare Pages（@astrojs/cloudflare）を利用したデプロイ

## 開発コマンド

| コマンド | 説明 |
| :-- | :-- |
| `npm install` | 依存関係をインストール |
| `npm run dev` | `localhost:4321` で開発サーバーを起動 |
| `npm run build` | 型チェックと本番ビルドを実行 |
| `npm run preview` | ビルド済み成果物をローカルでプレビュー |
| `npm run astro ...` | Astro CLI コマンドを実行 |

## 参考にしている YouTube
- [Wawa Sensei](https://www.youtube.com/@WawaSensei)
