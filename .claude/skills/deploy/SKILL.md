---
name: deploy
description: デプロイ準備（lint・型チェック・ビルド・成果物確認）
allowed-tools: Bash, Glob
---

デプロイ準備を実行してください。

以下を順番に実行し、いずれかのステップでエラーが発生したら即座に中断して報告してください:

1. **Lint**: `npm run lint` を実行
2. **型チェック**: `npx tsc --noEmit` を実行
3. **ビルド**: `npm run build` を実行

すべて成功したら:

4. `out/index.html` が存在することを確認
5. `out/` ディレクトリのファイル数と合計サイズを報告

## 報告フォーマット

```
デプロイ準備完了
- Lint: OK
- 型チェック: OK
- ビルド: OK
- out/index.html: 確認済み
- ファイル数: XX files
- 合計サイズ: XX KB
```
