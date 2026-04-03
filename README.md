# change jobs 2026

## Tech Stack

- Next.js 16 (App Router) + React 19
- TypeScript 5 (strict)
- Tailwind CSS 4
- Zustand 5
- Biome 2

## Setup

```sh
npm ci
npm run dev
```

## Scripts

| Command          | Description        |
| ---------------- | ------------------ |
| `npm run dev`    | 開発サーバー起動   |
| `npm run build`  | 静的ビルド (`out/`) |
| `npm run lint`   | Biome チェック     |
| `npm run lint:fix`| Biome 自動修正    |
| `npm run format` | Biome フォーマット |

## Deploy

GitHub Pages。`main` push で自動デプロイ。

## Node

24（mise で管理）