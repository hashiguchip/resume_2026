# Resume 2026 - Portfolio Site

## Overview

求人票形式のポートフォリオサイト。静的サイトとして GitHub Pages にデプロイ。

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 4
- **State**: Zustand 5
- **Linter/Formatter**: Biome 2
- **Icons**: lucide-react
- **Utilities**: clsx

## Build & Deploy

- 静的エクスポート: `output: "export"` → `out/` ディレクトリ
- 本番 basePath: `/resume_2026`
- GitHub Pages でホスティング

## Directory Structure

```
src/
├── app/              # Next.js App Router (layout, page, globals.css)
├── components/
│   ├── ui/           # 汎用UIコンポーネント (H2, DLRow, etc.)
│   ├── sections/     # ページセクション (JobHeader, Skills, Projects, etc.)
│   └── layout/       # レイアウト (Header, Footer, SectionNav, Breadcrumb)
├── constants/        # 定数定義
├── libs/             # 内部ライブラリ (global-modal)
└── stores/           # Zustand ストア
```

## Coding Conventions

### Formatting (Biome)

- インデント: スペース2
- クォート: ダブルクォート (`"`)
- セミコロン: あり (Biome デフォルト)

### Components

- **named export** を使用（default export は使わない）
- Server Components がデフォルト。`"use client"` は状態・イベントが必要な場合のみ
- Props 型は `type Props = { ... }` でコンポーネント直上に定義

### Imports

- パスエイリアス `@/*` → `./src/*` を使用
- Biome の organizeImports が有効

### Zustand

- `create<T>()(...)` パターンで型安全に定義
- ストアファイルは `src/stores/` に配置

### Commit Message

- Format: `<type>: <description>` (Conventional Commits, no scope)
- Language: English
- Types: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`, `test`

### Content

- UI テキスト・コンテンツは日本語
- コード中のコメントは日本語 OK
