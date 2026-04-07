---
name: component
description: プロジェクト規約に沿ったコンポーネントを生成
argument-hint: <ComponentName>
---

新しいコンポーネント `$ARGUMENTS` を生成してください。

## 手順

1. コンポーネントの配置先を決定:
   - `src/components/ui/` — 汎用 UI パーツ（ボタン、見出し、カード等）
   - `src/components/sections/` — ページセクション（求人情報の各ブロック等）
   - `src/components/layout/` — レイアウト構造（ヘッダー、フッター等）
   - 判断がつかない場合はユーザーに確認

2. 以下の規約に従ってファイルを作成:
   - インデント: タブ
   - クォート: ダブルクォート
   - **named export** を使用（default export は使わない）
   - Server Component がデフォルト（`"use client"` は必要な場合のみ）
   - Props 型はコンポーネント直上に `type Props = { ... }` で定義
   - インポートは `@/*` エイリアスを使用
   - Styling は `apps/web/CLAUDE.md` の Styling セクションに従う（`@theme` の token を default、arbitrary value は意図的な one-off のみ）

3. 生成後に `npm run lint:fix` を実行してフォーマットを整える

4. 作成したファイルパスとコンポーネントの概要を報告
