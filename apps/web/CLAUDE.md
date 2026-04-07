# apps/web — Frontend conventions

このファイルはルートの `/CLAUDE.md` を補完する frontend 専用の規約。`apps/web/` 配下を編集するときに適用する。

## Styling (Tailwind v4 + clsx)

### 設計思想

色・サイズ・spacing は `src/app/globals.css` の `@theme` で定義された **design token を default** とする。arbitrary value (`bg-[#xxxxxx]`, `text-[14px]` 等) は **意図的な one-off** にのみ使う。

「複数箇所で使われそう」「意味的なロールがある」と感じたら token 化を優先する。逆に「ここでしか使わない、置き換えると逆に分かりにくい」値は arbitrary のままで良い。

### Tailwind: 判断基準

**Token を使う**:

- 2 箇所以上で使う色 (text, border, surface, accent 等)
- 意味的なロールを持つ色 (`primary-*`, `neutral-*`, `accent-*` 等)
- 標準スケールで表現できるサイズ (`text-sm`, `text-base`, `p-4` 等)

**Arbitrary を使ってよい**:

- そのコンポーネント固有の構造的サイズ (例: `max-w-[1220px]` のようなレイアウト幅)
- opacity 変調や色合成 (例: `bg-[#e06060]/8` のように in-place で意図が明確な表現)
- 1 度しか出現しない装飾的な値で、token 化する意味がないもの

新しい色を導入するときは、まず `@theme` に追加するべきか考える。2 度目に使いそうなら追加。一度きりの意図的な値なら arbitrary でよい。

### clsx

- 条件で 2 つ以上の class を出し分けるときに使う
- 第 1 引数: 常時適用される base classes
- 第 2 引数以降: 条件付き
- `clsx("base", flag && "extra", flag2 ? "a" : "b")` の 1 階層構造を保つ
- 条件が無く単純連結で済むなら template literal で十分

### 例

OK (token 利用):

```tsx
<div className="border-neutral-200 bg-neutral-100 text-neutral-900" />
```

OK (意図的な arbitrary):

```tsx
// max-w-[1220px] はこのレイアウト固有の幅
<div className="mx-auto max-w-[1220px]" />

// opacity 変調を伴う brand color は in-place で表現
<button className="border-[#e06060] bg-[#e06060]/8 text-[#e06060]" />
```

NG (token があるのに hex 直書き):

```tsx
<h2 className="text-[#333]" />
```
