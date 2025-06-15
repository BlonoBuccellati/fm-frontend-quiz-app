# feature-sliced design（一部不採用）

---

## 使用するLayer

- app
- pages
- shared

## 不採用の考え

### segmentの「目的別」という考え

- segmentは目的別のため、本来はcustom hooksやライブラリコードなどはあらゆるsegment（modelやui、lib）に含まれる。
- 例えば、プレゼンテーションに関するロジックであれば、uiフォルダになる。
- しかし、ロジックが偏在するのを避けたいので、この考えは不採用。
- segment名は採用するが、どのファイルをどのsegmentに配置するかは技術的分割によって決める。

### appフォルダについて

- [FSD公式のNext.js（app router）での使用方法](https://feature-sliced.design/docs/guides/tech/with-nextjs)は採用しない。

## 変更する考え

### custom hooks

- model(segment)に含める

  - ただのプレゼンテーションロジックの場合、意味的にmodelという名前とは一致しないため不適切だが一旦（要検討）

### appフォルダ

- Next.jsのapp routerを使用するため、 FSDのAppの思想を変更する必要がある。
- apiを含む。

# appフォルダ

---

## appのフォルダの説明

- appは、スライスを持たないため、直下ではセグメントが存在する。

## app直下セグメントの例：

📁 routes— ルーターの設定（app routerなので不要）
📁 \_store— グローバルストア構成
📁 \_styles— グローバルスタイル
📁 entrypoint— アプリケーションコードへのエントリポイント、フレームワーク固有（app routerなので不要）

# pagesフォルダ

---

## pagesフォルダの説明

- 最初はここから作成し、再利用されるとわかったら、sharedに移行する。
- 基本的に１画面、１スライスで構成する

# sharedフォルダ

---

## sharedの説明

- 全てのレイヤーからアクセス可能なレイヤー
- sharedは、スライスを持たないため、直下にセグメントが存在する。

## shared内のセグメントの例：

📁 ui：プレゼンテーション
📁 api：バックエンドとのインタラクション
📁 model：データモデル、ビジネスロジック、インターフェース、ストア、hooks
📁 lib：（プレゼンテーションに関わらず）ライブラリコード全般
📁 config：構成ファイルと機能フラグ
📁 assets：画像など本来はsegmentの名前としては不適切だが、正解がわからない）

## セグメントのフォルダ名

- 目的がわかるような名前にする。

# 疑問
