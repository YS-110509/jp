---
title: "HTML+CSS+JSゼロから入門チュートリアル"
published: 2026-08-19
pinned: false
description: 「アイラのメモリーハウス」を構築し、HTML+CSS+JSの学習をゼロから教えます。
tags: ["HTML", "CSS", "JavaScript" , "チュートリアル", "プラスティック・メモリーズ"]
category: "チュートリアル"
licenseName: "CC BY-NC-SA 4.0"
author: "さくらじま ろか"
sourceLink: "https://jp.roka.ink/posts/jpid003/"
draft: false
date: 2026-02-28
image: "./images/cover.png"
pubDate: 2026-08-19
---
# HTML+CSS+JSゼロから入門長編チュートリアル：『プラスティック・メモリーズ』で「アイラの記憶の小屋」を作ろう（超詳細版）

> **著者：Roka**  
> **公開元：芦花家 (roka.ink)**  
> *大切な人と、いつかまた会えますように。*

---

## 📖 チュートリアル紹介

芦花家へようこそ！このチュートリアルは、フロントエンド開発がまったく初めての方に向けて、『プラスティック・メモリーズ』の世界を題材に、「**アイラの記憶の小屋**」という静的ウェブサイトを段階的に構築しながら、**HTML、CSS、基礎的なJavaScript**を体系的に学んでいきます。最終的には、あなた自身の思い出のサイトを公開できるようになります。

> **📥 準備するもの**
> - テキストエディター（VS Code 推奨）— 公式サイトから無料でダウンロードできます。
> - 最新のブラウザ（Chrome / Edge / Firefox）— プレビュー用。
> - やる気と好奇心 — これが一番大事です！

---

## 📑 目次

### **第一部：HTML基礎（静的ページの骨組み）**

1. [HTMLとの初対面：最初のページと基本構造](#ch1)
2. [テキストタグ：見出し・段落・強調・引用](#ch2)
3. [リンクとナビゲーション：ページをつなぐ](#ch3)
4. [画像とマルチメディア：画像と動画の挿入](#ch4)
5. [リスト：番号なし・番号付き・定義リスト](#ch5)
6. [テーブル：テーブルでストーリーのタイムラインを表示](#ch6)
7. [セマンティックタグ：ページ構造をリファクタリング](#ch7)

### **第二部：CSS入門（ページに装飾を施す）**

8. [CSSの第一歩：スタイルの適用方法](#ch8)
9. [セレクタと色：要素をピンポイントで指定](#ch9)
10. [テキストとフォント：文字を美しく](#ch10)
11. [ボックスモデル：余白・枠線・内側の余白](#ch11)
12. [背景とグラデーション：ページに雰囲気をプラス](#ch12)
13. [レイアウトの基本：floatとFlexbox](#ch13)
14. [レスポンシブデザイン：スマートフォンでも見やすく](#ch14)

### **第三部：プロジェクトのデザイン実践**

15. [ホームページの美化：温かいウェルカムページに](#ch15)
16. [キャラクターページの美化：カードデザイン](#ch16)
17. [タイムラインページの美化：テーブルとストライプ](#ch17)
18. [アバウトページの美化：動画埋め込みとレイアウト](#ch18)

### **第四部：JavaScript入門と弾幕コメントウォール**

19. [JavaScript初体験：変数・イベント・DOM操作](#ch19)
20. [弾幕コメントウォール：訪れた人がコメントを残せる](#ch20)
21. [弾幕を動かそう：簡単アニメーション効果](#ch21)

### **第五部：プロジェクト統合と公開**

22. [プロジェクトのチェックと最適化](#ch22)
23. [GitHub Pagesへのデプロイ](#ch23)
24. [次のステップ：次に学ぶべきこと](#ch24)

---

## 第一部：HTML基礎（静的ページの骨組み）

### <a id="ch1"></a>1. HTMLとの初対面：最初のページと基本構造

#### 1.1 HTMLとは？

HTML（HyperText Markup Language）は、ウェブページの構造や内容を記述するための**マークアップ言語**です。プログラミング言語ではなく、ブラウザがHTMLを解釈して画面に表示します。HTMLは家の骨組みのようなもので、タグが柱や壁の役割を果たします。

#### 1.2 最初のHTMLページを作成する

**手順1：プロジェクトフォルダを作成**

パソコンの適当な場所（デスクトップなど）に新しいフォルダを作り、`aira-memory-house`（アイラの記憶の小屋）と名付けます。このフォルダにすべてのファイルを保存します。

**手順2：トップページのファイルを作成**

VS Code（または他のエディタ）を開き、「新規ファイル」で以下のコードを入力します。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>アイラの記憶の小屋</title>
  </head>
  <body>
    アイラの記憶の小屋へようこそ。
  </body>
</html>
```

**手順3：ファイルを保存**

`Ctrl+S`（Windows）または `Command+S`（Mac）で保存ダイアログを開き、先ほど作った `aira-memory-house` フォルダ内に `index.html` という名前で保存します。

**手順4：ブラウザで開く**

フォルダ内の `index.html` をダブルクリックすると、デフォルトのブラウザで表示されます。「アイラの記憶の小屋へようこそ。」と表示されれば成功です。これであなたの最初のウェブページが完成しました！

#### 1.3 各行の解説

- `<!DOCTYPE html>`：このファイルがHTML5であることをブラウザに伝える宣言です。必ず最初に書きます。
- `<html>`：ページ全体のルート要素で、他のすべての要素はこの中に書きます。
- `<head>`：メタ情報（文字コード、ページタイトル、スタイルシートのリンクなど）を入れる場所です。ここに書いた内容はブラウザの表示領域には直接現れません。
- `<meta charset="utf-8">`：文字コードをUTF-8に指定することで、日本語が正しく表示されます。
- `<title>`：ブラウザのタブに表示されるタイトルで、検索エンジンの結果にも使われます。
- `<body>`：ユーザーが実際に目にするすべてのコンテンツを入れる場所です。

> **ヒント**：HTMLタグは通常、開始タグと終了タグのペアで構成されます（例：`<html>` と `</html>`）。ただし `<meta>` のように終了タグが不要なもの（空要素）もあります。

#### 1.4 ミニ劇場：司の日記

それでは、『プラスティック・メモリーズ』のテイストを加えましょう。`<body>` 内を次のように変更します。

```html
<body>
  <!-- 司の日記：初出勤 -->
  <h1>水柿司の日記</h1>
  <p>今日からSAIターミナルサービス部門で働くことになった。</p>
  <p>親に紹介された仕事だったけど、アイラに出会ってから、この仕事には特別な意味があると思い始めた。</p>
</body>
```

保存してブラウザをリロードすると、大きな見出し「水柿司の日記」と2つの段落が表示されます。ここで使った新しいタグ：
- `<h1>`：最上位の見出し。通常、ページのメインタイトルに使います。
- `<p>`：段落。前後に自動的に余白が入ります。
- `<!-- ... -->`：コメント。ページには表示されず、コード内のメモ用です。

#### 1.5 今回のプロジェクトタスク

1. `aira-memory-house` フォルダと `index.html` が正しく作成されていることを確認。
2. 上記のコードをコピーして保存し、プレビュー。
3. **練習**：お気に入りの『プラスティック・メモリーズ』のセリフを `<h2>` サブ見出しとともに追加してみましょう。例：
   ```html
   <h2>名セリフ</h2>
   <p>「素敵な思い出は、時に苦しくもある。」</p>
   ```

---

### <a id="ch2"></a>2. テキストタグ：見出し・段落・強調・引用

#### 2.1 見出しタグ `<h1>`～`<h6>`

HTMLには6段階の見出しがあり、`<h1>` が最も重要で、通常1ページに1つだけ使います。`<h2>` は主要なセクション、`<h3>` はその下位、というように階層を表します。

**例**：
```html
<h1>アイラの記憶の小屋</h1>
<h2>アイラについて</h2>
<h3>プロフィール</h3>
<h2>司について</h2>
```

#### 2.2 段落と改行

- `<p>`：段落。前後にマージンが入ります。
- `<br>`：改行（空要素で終了タグ不要）。文中で強制的に改行したいときに使います。
- `<hr>`：水平線。内容を区切るのに使います。

**例**：
```html
<p>これが最初の段落です。<br>同じ段落内で改行した部分です。</p>
<hr>
<p>水平線の下の段落です。</p>
```

#### 2.3 強調と引用

- `<strong>`：重要性を強調し、通常**太字**で表示されます。
- `<em>`：強調（抑揚）を示し、通常*斜体*で表示されます。
- `<blockquote>`：長めの引用（ブロックレベル）。通常、インデントが付きます。
- `<q>`：短い引用（インライン）。ブラウザが自動的に引用符を付けます。

**例**：
```html
<p>アイラの口癖は <q>わかりました</q> です。</p>
<blockquote>
  「素敵な思い出は、時に苦しくもある。」<br>
  —— アイラ（第3話）
</blockquote>
```

#### 2.4 文字実体参照

HTMLでは `<` や `>` など特別な意味を持つ文字をそのまま表示するために**文字実体参照**を使います。主なもの：

| 表示結果 | 実体名 | 実体番号 |
|----------|--------|----------|
| `<`      | `&lt;` | `&#60;`  |
| `>`      | `&gt;` | `&#62;`  |
| `&`      | `&amp;`| `&#38;`  |
| `"`      | `&quot;`| `&#34;` |
| `©`      | `&copy;`| `&#169;`|
| スペース | `&nbsp;`| `&#160;`|

**例**：
```html
<p>HTMLでは &lt;h1&gt; で見出しを表します。</p>
<p>&copy; 2026 芦花家</p>
```

#### 2.5 プロジェクトタスク：トップページを充実させる

`index.html` の `<body>` を以下の内容に置き換えてみましょう。

```html
<body>
  <h1>アイラの記憶の小屋</h1>
  <p>アイラの記憶の小屋へようこそ。ここでは<strong>水柿司</strong>と<strong>アイラ</strong>の思い出を綴ります。</p>
  
  <h2>この小屋について</h2>
  <p>『プラスティック・メモリーズ』に登場する温かくも切ない瞬間を、ファンサイトとしてHTMLで再現する試みです。</p>
  
  <blockquote>
    「素敵な思い出は、時に苦しくもある。」<br>
    —— アイラ（第3話）
  </blockquote>
  
  <p>それでも、私たちは一瞬一瞬を大切にしたい。</p>
  <hr>
  <p>&copy; 2026 芦花家</p>
</body>
```

保存してプレビューし、表示を確認してください。

**練習**：
- 「一瞬一瞬を大切にしたい」を `<em>` で斜体にしてみましょう。
- フッターに「大切な人と、いつかまた会えますように。」を `<br>` で改行して追加してください。

---

### <a id="ch3"></a>3. リンクとナビゲーション：ページをつなぐ

#### 3.1 ハイパーリンク `<a>`

ハイパーリンクはWebの要です。別のページや同じページ内の場所に移動できます。基本構文：

```html
<a href="行き先">リンクテキスト</a>
```

- `href` 属性は必須で、リンク先を指定します。
- 別タブで開くには `target="_blank"` を追加します。

**例**：
```html
<a href="https://www.bilibili.com">B站で『プラメモ』を見る</a>
<a href="about.html" target="_blank">このサイトについて（別タブ）</a>
```

#### 3.2 相対パスと絶対パス

- **絶対パス**：完全なURL（例：`https://example.com/page.html`）
- **相対パス**：現在のファイルからの位置。例えば：
  - `page.html`：同じフォルダ内のファイル
  - `folder/page.html`：下位フォルダ `folder` 内のファイル
  - `../page.html`：親フォルダのファイル

このプロジェクトではすべてのHTMLが同じフォルダにあるので、リンク先は単に `character.html` のように書けばOKです。

#### 3.3 ページ内アンカーリンク

同じページ内の特定の場所にジャンプするには、目標の要素に `id` を付け、`#id` でリンクします。このチュートリアルの目次でも使っています。

**例**：
```html
<h2 id="section1">第1章</h2>
...
<a href="#section1">第1章へ戻る</a>
```

#### 3.4 プロジェクトタスク：ナビゲーションバーを作る

**手順1：新しいHTMLファイルを作成**

`aira-memory-house` フォルダ内に以下の4つのファイルを新規作成します（`index.html` と同じ階層）：
- `character.html`（キャラクター紹介）
- `timeline.html`（ストーリータイムライン）
- `about.html`（このサイトについて）

**手順2：各ファイルに基本構造を書く**

各ファイルに `index.html` と同様の基本構造をコピーし、`<title>` と `<body>` を適宜変更します。例えば `character.html` は：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>キャラクター紹介 - アイラの記憶の小屋</title>
</head>
<body>
  <!-- 後でナビとコンテンツを追加 -->
</body>
</html>
```

**手順3：`index.html` にナビゲーションを追加**

`index.html` の `<body>` 内、`<h1>` の前に次のコードを挿入します。

```html
<nav>
  <strong>ホーム</strong> |
  <a href="character.html">キャラクター</a> |
  <a href="timeline.html">タイムライン</a> |
  <a href="about.html">このサイトについて</a>
</nav>
```

`<strong>` で「ホーム」を太字にし、現在のページであることを示します。

**手順4：他のページにもナビを追加**

`character.html`、`timeline.html`、`about.html` でも同様にナビを追加し、それぞれの現在ページを `<strong>` でマークします。例（`character.html`）：

```html
<nav>
  <a href="index.html">ホーム</a> |
  <strong>キャラクター</strong> |
  <a href="timeline.html">タイムライン</a> |
  <a href="about.html">このサイトについて</a>
</nav>
```

**手順5：リンクをテスト**

すべて保存し、`index.html` を開いてナビのリンクをクリックし、各ページに正しく遷移するか確認します（404エラーが出る場合はファイル名のスペルミスや大文字小文字を確認）。

#### 3.5 ミニ劇場：リンクの意味

アイラと司、ギフティアと人間のつながりは、まるでハイパーリンクのように異なる世界を結びます。一つのリンクが一つの出会いです。

---

### <a id="ch4"></a>4. 画像とマルチメディア：画像と動画の挿入

#### 4.1 画像タグ `<img>`

`<img>` タグで画像を表示します。空要素（終了タグ不要）で、主な属性：
- `src`：画像ファイルのパス（相対・絶対）
- `alt`：代替テキスト（画像が表示されない時やスクリーンリーダー用に必須）
- `width` / `height`：サイズ（ピクセル）。片方だけ指定すると縦横比が維持されます。

**例**：
```html
<img src="images/aira.png" alt="微笑むアイラ" width="200">
```

#### 4.2 画像の準備

プロジェクトフォルダ内に `images` フォルダを作成し、2枚のキャラクター画像（例：`aira.png` と `tsukasa.png`）を入れます。学習用なので、著作権に注意して公式アートや代替画像を用意してください。ない場合はプレースホルダー画像（https://via.placeholder.com/200）を使うこともできますが、オフラインでは表示されません。

#### 4.3 プロジェクトタスク：キャラクターページに画像を挿入

`character.html` の `<nav>` の後に以下を追加します。

```html
<main>
  <h2>キャラクター紹介</h2>
  
  <h3>アイラ</h3>
  <figure>
    <img src="images/aira.png" alt="アイラ" width="200">
    <figcaption>アイラ - ギフティア</figcaption>
  </figure>
  <p>ターミナルサービス部門のギフティアで、水柿司とパートナー。内向的で感情表現が苦手だが、心は優しい。</p>
  
  <h3>水柿司</h3>
  <figure>
    <img src="images/tsukasa.png" alt="水柿司" width="200">
    <figcaption>水柿司 - 人間</figcaption>
  </figure>
  <p>試験に落ちて親の紹介でSAIに入社し、アイラのパートナーになる。徐々にアイラの心に近づいていく。</p>
</main>
```

`<figure>` と `<figcaption>` は画像とキャプションを関連付けるセマンティックなペアです。

保存して `character.html` をプレビューし、画像が表示されれば成功です。表示されない場合はパスやファイル名を確認してください。

#### 4.4 音声と動画（オプション）

必要に応じて `<audio>` や `<video>` を使うこともできます。

```html
<audio controls src="audio/ost.mp3"></audio>

<video controls width="400">
  <source src="video/trailer.mp4" type="video/mp4">
  <source src="video/trailer.webm" type="video/webm">
  お使いのブラウザは video タグに対応していません。
</video>
```

今回はプロジェクトでは使いませんが、知識として知っておいてください。

---

### <a id="ch5"></a>5. リスト：番号なし・番号付き・定義リスト

#### 5.1 番号なしリスト `<ul>`

`<ul>` で囲み、各項目を `<li>` で表します。並列な項目に向いています。

**例**：
```html
<ul>
  <li>甘いもの</li>
  <li>ぼんやりすること</li>
  <li>口癖：「わかりました」</li>
</ul>
```

#### 5.2 番号付きリスト `<ol>`

`<ol>` で囲み、自動で番号が振られます。順序がある項目に使います。

**例**：
```html
<ol>
  <li>出会い</li>
  <li>パートナーとしての磨合</li>
  <li>遊園地デート</li>
</ol>
```

#### 5.3 定義リスト `<dl>`

用語とその説明をペアにしたリストです。`<dt>`（用語）と `<dd>`（説明）を使います。

**例**：
```html
<dl>
  <dt>ギフティア</dt>
  <dd>感情を持つアンドロイド。寿命は約81920時間。</dd>
  <dt>ターミナルサービス部門</dt>
  <dd>寿命が尽きるギフティアを回収する部署。</dd>
</dl>
```

#### 5.4 プロジェクトタスク：キャラクターページをリッチに

`character.html` の各キャラクターにプロフィールリストを追加します。アイラの部分を次のように修正：

```html
<h3>アイラ</h3>
<figure>...</figure>
<p>ターミナルサービス部門のギフティアで、水柿司とパートナー。内向的で感情表現が苦手だが、心は優しい。</p>
<h4>アイラのプロフィール</h4>
<ul>
  <li>好き：甘いもの、ぼんやりすること</li>
  <li>嫌い：子供扱いされること</li>
  <li>口癖：「わかりました」</li>
</ul>
```

司にも同様に：

```html
<h4>司のプロフィール</h4>
<ul>
  <li>好き：人の世話をすること、努力すること</li>
  <li>特技：料理</li>
  <li>夢：アイラと最後まで一緒に働くこと</li>
</ul>
```

さらに、主要なストーリーの流れを番号付きリストで：

```html
<h4>ストーリーの主な流れ</h4>
<ol>
  <li>第1話：ショッピングモールのエレベーターで出会う</li>
  <li>第2話：初めての回収任務</li>
  <li>第3話：遊園地デート</li>
  <li>第13話：観覧車での別れ</li>
</ol>
```

そして用語説明を定義リストで：

```html
<h4>用語解説</h4>
<dl>
  <dt>ギフティア</dt>
  <dd>感情を持つアンドロイド。寿命は約81920時間。</dd>
  <dt>ターミナルサービス部門</dt>
  <dd>寿命が尽きるギフティアを回収する部署。</dd>
</dl>
```

保存してプレビューし、リストのデフォルトスタイルを確認します。

---

### <a id="ch6"></a>6. テーブル：テーブルでストーリーのタイムラインを表示

#### 6.1 テーブルの基本

`<table>` でテーブルを作り、`<tr>` で行、`<td>` でセル（データ）、`<th>` で見出しセルを表します。`<caption>` でタイトルを付けられます。

**基本構造**：
```html
<table>
  <caption>テーブルタイトル</caption>
  <tr>
    <th>見出し1</th>
    <th>見出し2</th>
  </tr>
  <tr>
    <td>データ1</td>
    <td>データ2</td>
  </tr>
</table>
```

#### 6.2 セルの結合

- `colspan`：列をまたいで結合（例：`<td colspan="2">`）
- `rowspan`：行をまたいで結合（例：`<td rowspan="3">`）

#### 6.3 テーブルのセマンティック区分

`<thead>`（ヘッダー行）、`<tbody>`（本体）、`<tfoot>`（フッター）を使うと構造が明確になり、スタイル適用も容易になります。

#### 6.4 プロジェクトタスク：タイムラインページを作成

`timeline.html` を開き、`<nav>` の後に以下のテーブルを追加します。見やすくするために一時的に `border="1"` を付けます（後でCSSで美しくします）。

```html
<main>
  <h2>ストーリータイムライン</h2>
  
  <table border="1" cellpadding="5" cellspacing="0">
    <caption>『プラスティック・メモリーズ』アニメストーリー</caption>
    <thead>
      <tr>
        <th>話数</th>
        <th>タイトル</th>
        <th>重要な出来事</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>第1話</td><td>あなたとの出会い</td><td>司とアイラがショッピングモールのエレベーターで出会い、パートナーになる。</td></tr>
      <tr><td>第2話</td><td>見せたくないもの</td><td>初めての回収任務：ニーナと百花千尋。</td></tr>
      <tr><td>第3話</td><td>二人の時間</td><td>司がアイラを遊園地に誘い、距離が縮まる。</td></tr>
      <tr><td>第4話</td><td>届かない言葉</td><td>満が司に誤解をする。</td></tr>
      <tr><td>第5話</td><td>背中を見つめて</td><td>ザックの過去が明らかに。</td></tr>
      <tr><td>第6話</td><td>やっと気づいた想い</td><td>司がアイラへの感情に気づく。</td></tr>
      <tr><td>第7話</td><td>守りたい人</td><td>アイラの寿命問題が浮上。</td></tr>
      <tr><td>第8話</td><td>当たり前のこと</td><td>司はアイラと最後まで一緒にいると決意。</td></tr>
      <tr><td>第9話</td><td>星の海に願いを</td><td>二人で流星群を見る。</td></tr>
      <tr><td>第10話</td><td>再会</td><td>アイラが過去のパートナーと再会。</td></tr>
      <tr><td>第11話</td><td>約束の日</td><td>アイラが司に残り時間が少ないことを告白。</td></tr>
      <tr><td>第12話</td><td>届かなかった言葉</td><td>アイラに障害が現れ始める。</td></tr>
      <tr><td>第13話</td><td>大切な人と、いつかまた</td><td>観覧車での別れ、アイラは回収される。</td></tr>
    </tbody>
    <tfoot>
      <tr><td colspan="3">全13話・忘れられない記憶</td></tr>
    </tfoot>
  </table>
</main>
```

プレビューして、枠線付きのテーブルが表示されることを確認します。

---

### <a id="ch7"></a>7. セマンティックタグ：ページ構造をリファクタリング

#### 7.1 セマンティックとは？

`<nav>`、`<main>`、`<figure>` など、内容を明確に表すタグを使うことで、コードの可読性が向上し、SEOやスクリーンリーダーにも優しくなります。これからすべてのページをセマンティックタグで整理します。

#### 7.2 主なセマンティックタグ

- `<header>`：ページヘッダー（タイトル、ナビなど）
- `<nav>`：ナビゲーション領域
- `<main>`：メインコンテンツ（1ページに1つ）
- `<article>`：独立したコンテンツ（ブログ記事など）
- `<section>`：文書のセクション（通常見出し付き）
- `<aside>`：補足情報（サイドバーなど）
- `<footer>`：フッター（著作権、連絡先など）

#### 7.3 プロジェクトタスク：全ページをリファクタリング

`index.html` を例に最終構造を示します。他のページも同様に修正します。

**index.html 最終版**：
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>アイラの記憶の小屋 - ホーム</title>
</head>
<body>
  <header>
    <h1>アイラの記憶の小屋</h1>
    <nav>
      <strong>ホーム</strong> |
      <a href="character.html">キャラクター</a> |
      <a href="timeline.html">タイムライン</a> |
      <a href="about.html">このサイトについて</a>
    </nav>
  </header>
  
  <main>
    <article>
      <h2>この小屋について</h2>
      <p>『プラスティック・メモリーズ』の温かく切ない瞬間を、ファンサイトとしてHTMLで再現する試みです。</p>
    </article>
    
    <section>
      <h2>名セリフ</h2>
      <blockquote>
        「素敵な思い出は、時に苦しくもある。」<br>
        —— アイラ（第3話）
      </blockquote>
    </section>
    
    <section>
      <h2>最新情報</h2>
      <p>サイトを立ち上げたばかりです。これからコンテンツを増やしていきます。</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2026 芦花家 · 大切な人と、いつかまた会えますように。</p>
  </footer>
</body>
</html>
```

`character.html` も同様に `<main>` 内を `<section>` で区切ります。`<main>` にはヘッダーやフッターを含めないように注意してください。

これで全ページの骨組みが完成しました。次はCSSで装飾していきます。

---

## 第二部：CSS入門（ページに装飾を施す）

### <a id="ch8"></a>8. CSSの第一歩：スタイルの適用方法

#### 8.1 CSSとは？

CSS（Cascading Style Sheets）は、HTML要素の見た目（色、フォント、サイズ、間隔、レイアウトなど）を制御する言語です。書き方は簡単：

```css
セレクタ {
  プロパティ: 値;
  プロパティ: 値;
}
```

例：
```css
p {
  color: red;
  font-size: 16px;
}
```

#### 8.2 3つの適用方法

1. **インラインスタイル**：HTMLタグに直接 `style` 属性を書く（**非推奨**）。
   ```html
   <p style="color: red;">赤い文字</p>
   ```
2. **内部スタイルシート**：HTMLの `<head>` 内に `<style>` タグで書く（1ページ限定）。
   ```html
   <style>
     p { color: red; }
   </style>
   ```
3. **外部スタイルシート**：別途 `.css` ファイルを作り、`<link>` で読み込む（**推奨**）。複数ページで共有できます。

#### 8.3 プロジェクトタスク：外部CSSファイルを作成

**手順1：CSSフォルダとファイルを作成**

`aira-memory-house` フォルダ内に `css` フォルダを作り、その中に `style.css` を作成します。

**手順2：HTMLにCSSを読み込む**

各HTMLファイルの `<head>` 内（`<title>` の後など）に次の1行を追加します。

```html
<link rel="stylesheet" href="css/style.css">
```

**手順3：テスト用のスタイルを書く**

`style.css` に以下を記述します。

```css
body {
  background-color: #f0f8ff;  /* 薄い青 */
}
```

保存して任意のページをリロードし、背景が薄い青になっていれば成功です。

---

### <a id="ch9"></a>9. セレクタと色：要素をピンポイントで指定

#### 9.1 基本セレクタ

- **要素セレクタ**：タグ名そのまま（例：`p`、`h1`）— すべての該当タグに適用。
- **クラスセレクタ**：`.` で始まる（例：`.my-class`）— `class="my-class"` の要素に適用。
- **IDセレクタ**：`#` で始まる（例：`#my-id`）— `id="my-id"` の要素に適用（IDはページ内で一意）。

**例**：
```css
p { color: blue; }                /* すべての段落を青に */
.highlight { background: yellow; } /* class="highlight" の背景を黄色に */
#main-title { font-size: 30px; }   /* id="main-title" の文字サイズを30pxに */
```

#### 9.2 組み合わせセレクタ

- **子孫セレクタ**：スペース区切り（例：`nav a`）— `<nav>` 内のすべての `<a>`。
- **子セレクタ**：`>` 区切り（例：`nav > a`）— `<nav>` の直接の子要素である `<a>` のみ。
- **隣接兄弟セレクタ**：`+` 区切り（例：`h2 + p`）— `<h2>` の直後に続く `<p>`。

#### 9.3 色の指定方法

- **色名**：`red`、`blue`、`lightgray` など。
- **16進数**：`#ff0000`（赤）、`#00ff00`（緑）、`#0000ff`（青）。各2桁がR・G・Bの輝度（00～ff）。短縮形も可（例：`#f00` は `#ff0000` と同じ）。
- **RGB**：`rgb(255,0,0)` で赤。
- **RGBA**：`rgba(255,0,0,0.5)` で半透明の赤（最後の数値が透明度 0～1）。

#### 9.4 プロジェクトタスク：ベースカラーを設定

`style.css` に以下を追加して、全体の雰囲気を整えます。

```css
/* 全体の基本スタイル */
body {
  font-family: sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
}

/* ナビゲーション */
nav {
  background-color: #2c3e50;
  padding: 10px;
  text-align: center;
}
nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}
nav a:hover {
  text-decoration: underline;
}
nav strong {
  color: #ffcc00;
  margin: 0 10px;
}

/* フッター */
footer {
  text-align: center;
  padding: 20px;
  background-color: #2c3e50;
  color: white;
  margin-top: 40px;
}
```

保存してリロードし、ナビとフッターが変化したことを確認します。まだメインコンテンツのスタイルはこれからです。

---

### <a id="ch10"></a>10. テキストとフォント：文字を美しく

#### 10.1 フォント関連プロパティ

- `font-family`：フォントファミリー（例：`"Helvetica", "Arial", sans-serif`）
- `font-size`：サイズ（`px`、`em`、`rem` など）
- `font-weight`：太さ（`normal`、`bold`、数値 100～900）
- `font-style`：`normal` または `italic`
- `text-align`：揃え（`left`、`center`、`right`）
- `text-decoration`：装飾（`underline`、`line-through` など）
- `line-height`：行の高さ（数値や倍数）

#### 10.2 プロジェクトタスク：テキストを整える

`style.css` に次のルールを追加します。

```css
/* メインコンテンツ */
main {
  max-width: 1000px;
  margin: 20px auto;
  padding: 0 20px;
}

/* 見出し */
h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-top: 20px;
}
h2 {
  font-size: 2rem;
  color: #34495e;
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
}
h3 {
  font-size: 1.5rem;
  color: #2c3e50;
}
h4 {
  font-size: 1.2rem;
  color: #555;
}

/* 引用 */
blockquote {
  font-style: italic;
  background-color: #ecf0f1;
  padding: 15px 20px;
  border-left: 5px solid #3498db;
  margin: 20px 0;
}

/* 段落 */
p {
  margin-bottom: 15px;
}
```

プレビューして、文字の見た目が変わったことを確認します。

---

### <a id="ch11"></a>11. ボックスモデル：余白・枠線・内側の余白

#### 11.1 ボックスモデルの概念

すべてのHTML要素は矩形のボックスと見なせます。内側から：
- **コンテンツ（content）**：テキストや画像など実際の内容
- **パディング（padding）**：コンテンツと枠線の間の内側の余白
- **ボーダー（border）**：パディングの周りの線
- **マージン（margin）**：他のボックスとの外側の余白

ブラウザの開発者ツール（F12）で確認できます。

#### 11.2 主なプロパティ

- `width` / `height`：コンテンツ領域の幅・高さ
- `padding`：内側余白（値1つで全方向、2つで上下・左右、4つで上・右・下・左）
- `border`：枠線（例：`border: 1px solid black;`）
- `margin`：外側余白（書き方は `padding` と同じ）

#### 11.3 プロジェクトタスク：コンテンツに余白を追加

すでに `<main>` にパディングと最大幅を設定しました。次にキャラクターカードに枠線とパディングを追加して、見た目を整えます。

`style.css` に以下を追加（ただし、HTML側にクラスを付ける必要があります）。

```css
.character-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background-color: white;
}
.character-card img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto 10px;
}
.character-card figcaption {
  text-align: center;
  font-style: italic;
  color: #666;
}
```

次に `character.html` を開き、各キャラクターのセクションを `<section class="character-card">` で囲みます。

```html
<section class="character-card">
  <h3>アイラ</h3>
  <figure>...</figure>
  ...
</section>
<section class="character-card">
  <h3>水柿司</h3>
  ...
</section>
```

これでカード風のデザインになります。

---

### <a id="ch12"></a>12. 背景とグラデーション：ページに雰囲気をプラス

#### 12.1 背景プロパティ

- `background-color`：背景色
- `background-image`：背景画像（`url('image.jpg')`）
- `background-repeat`：繰り返し（`no-repeat`、`repeat-x` など）
- `background-position`：位置（`center center` など）
- `background-size`：サイズ（`cover`、`contain` など）

#### 12.2 グラデーション

リニアグラデーション：`linear-gradient(方向, 色1, 色2, ...)`

例：
```css
background: linear-gradient(135deg, #a8ede0, #fed6e3);
```

#### 12.3 プロジェクトタスク：ヘッダーにグラデーションを適用

`style.css` の `header` を次のように変更します。

```css
header {
  background: linear-gradient(135deg, #a8ede0, #fed6e3);
  padding: 20px;
  text-align: center;
}
header h1 {
  margin: 0 0 10px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}
```

ナビゲーションはヘッダー内に配置しているので、少し調整します。`nav` に背景色を半透明にして、ヘッダーのグラデーションと調和させます。

```css
nav {
  background-color: rgba(44, 62, 80, 0.8);
  padding: 10px;
  border-radius: 30px;
  display: inline-block;
}
```

これでヘッダーが華やかになります。

---

### <a id="ch13"></a>13. レイアウトの基本：floatとFlexbox

#### 13.1 float

float は画像の回り込みなどに使われますが、複雑なレイアウトには Flexbox が推奨されます。

#### 13.2 Flexbox

Flexbox は一次元レイアウトモデルで、アイテムを水平・垂直に整列させることが容易です。主なプロパティ：

- 親要素に `display: flex;`
- `flex-direction`：主軸方向（`row` 水平、`column` 垂直）
- `justify-content`：主軸の揃え方（`center`、`space-between` など）
- `align-items`：交差軸の揃え方（`center`、`stretch` など）
- `flex-wrap`：折り返し（`wrap` で許可）

#### 13.3 プロジェクトタスク：キャラクターカードを横並びに

`character.html` でカードを囲むコンテナを作り、`character-list` クラスを付けます。

```html
<div class="character-list">
  <section class="character-card">...</section>
  <section class="character-card">...</section>
</div>
```

CSS：

```css
.character-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
}
.character-card {
  flex: 1 1 300px;
}
```

これでカードが横並びになり、狭くなると折り返されます。

---

### <a id="ch14"></a>14. レスポンシブデザイン：スマートフォンでも見やすく

#### 14.1 ビューポートの設定

HTMLの `<head>` に次のメタタグを必ず入れます（すでに各ページに入っているはずです）。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### 14.2 メディアクエリ

画面幅に応じてスタイルを切り替えるには `@media` を使います。

```css
@media (max-width: 600px) {
  /* 幅600px以下の場合のスタイル */
}
```

#### 14.3 プロジェクトタスク：レスポンシブ対応

`style.css` の末尾に以下を追加します。

```css
/* スマートフォン用 */
@media (max-width: 600px) {
  nav a, nav strong {
    display: block;
    margin: 5px 0;
  }
  .character-list {
    flex-direction: column;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  main {
    padding: 10px;
  }
}
```

ブラウザの幅を小さくして、ナビやカードが縦並びになることを確認しましょう。

---

## 第三部：プロジェクトのデザイン実践

### <a id="ch15"></a>15. ホームページの美化：温かいウェルカムページに

トップページの `<article>` にクラスを付けて、背景を白くして影をつけます。

```html
<article class="home-article">
  ...
</article>
```

CSS：

```css
.home-article {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}
```

### <a id="ch16"></a>16. キャラクターページの美化：カードデザイン

カードにホバー効果を追加します。

```css
.character-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
}
```

### <a id="ch17"></a>17. タイムラインページの美化：テーブルとストライプ

`timeline.html` から `border="1"` などを削除し、CSSでスタイルを当てます。

```css
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1rem;
}
caption {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2c3e50;
}
th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
th {
  background-color: #2c3e50;
  color: white;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tr:hover {
  background-color: #e0e0e0;
}
tfoot td {
  text-align: center;
  font-weight: bold;
  background-color: #ecf0f1;
}
```

### <a id="ch18"></a>18. アバウトページの美化：動画埋め込みとレイアウト

`about.html` に動画を埋め込む領域を作り、レスポンシブに対応させます。

```html
<h3>思い出の映写室</h3>
<div class="video-wrapper">
  <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="サンプル動画（実際のリンクに置き換えてください）" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>
```

CSS：

```css
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  margin: 20px 0;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

---

## 第四部：JavaScript入門と弾幕コメントウォール

### <a id="ch19"></a>19. JavaScript初体験：変数・イベント・DOM操作

#### 19.1 JavaScriptとは？

JavaScript はウェブページに動的な機能を追加するスクリプト言語です。HTMLやCSSを操作したり、ユーザーの操作に応答したりできます。

#### 19.2 JavaScriptの読み込み

`<script>` タグで直接書くか、外部ファイルを読み込みます。推奨は外部ファイルです。

**手順1：JSフォルダとファイルを作成**

`aira-memory-house` 内に `js` フォルダを作り、その中に `main.js` を作成します。

**手順2：各HTMLに読み込む**

各ページの `</body>` の直前に次の行を追加します。

```html
<script src="js/main.js"></script>
```

#### 19.3 基本文法

- 変数宣言：`let`（再代入可）、`const`（再代入不可）
- 関数：`function 関数名() { ... }` または `() => { ... }`
- イベントリスナー：`addEventListener`

#### 19.4 DOM操作

- `document.querySelector('セレクタ')`：最初の一致要素を取得
- `document.querySelectorAll('セレクタ')`：すべての一致要素を取得
- `element.textContent`：テキストの取得・設定
- `element.innerHTML`：HTMLの取得・設定
- `element.style.プロパティ`：インラインスタイルの変更

#### 19.5 プロジェクトタスク：あいさつボタン

`index.html` にボタンを追加：

```html
<button id="greet-btn">あいさつ</button>
```

`main.js` に：

```javascript
const btn = document.querySelector('#greet-btn');
btn.addEventListener('click', function() {
  alert('アイラの記憶の小屋へようこそ！');
});
```

クリックでアラートが表示されれば成功です。

---

### <a id="ch20"></a>20. 弾幕コメントウォール：訪れた人がコメントを残せる

#### 20.1 設計

新しく `danmu.html` を作成し、入力欄とボタン、弾幕を表示するコンテナを用意します。入力したテキストが右から左へ流れる弾幕として表示されます。

#### 20.2 実装

`danmu.html` の主要部分：

```html
<main>
  <h2>弾幕コメントウォール</h2>
  <p>アイラや司に伝えたいことを弾幕で流しましょう！</p>
  
  <div id="danmu-container" style="position: relative; height: 400px; border: 2px dashed #ccc; overflow: hidden; background: #f0f0f0; margin-bottom: 20px;"></div>
  
  <input type="text" id="danmu-input" placeholder="コメントを入力" style="width: 300px; padding: 8px;">
  <button id="send-danmu">発射</button>
</main>
```

`main.js` に以下を追加：

```javascript
const container = document.getElementById('danmu-container');
const input = document.getElementById('danmu-input');
const sendBtn = document.getElementById('send-danmu');

function sendDanmu() {
  const text = input.value.trim();
  if (text === '') return;

  const danmu = document.createElement('div');
  danmu.textContent = text;
  danmu.style.position = 'absolute';
  danmu.style.right = '0';
  danmu.style.top = Math.random() * (container.clientHeight - 30) + 'px';
  danmu.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
  danmu.style.whiteSpace = 'nowrap';
  danmu.style.fontSize = '20px';
  danmu.style.fontWeight = 'bold';
  danmu.style.textShadow = '1px 1px 2px rgba(0,0,0,0.3)';
  danmu.style.zIndex = '100';

  container.appendChild(danmu);

  const containerWidth = container.clientWidth;
  let left = containerWidth;
  danmu.style.left = left + 'px';

  const interval = setInterval(() => {
    left -= 2;
    danmu.style.left = left + 'px';
    if (left < -danmu.clientWidth) {
      clearInterval(interval);
      danmu.remove();
    }
  }, 20);

  input.value = '';
}

sendBtn.addEventListener('click', sendDanmu);
input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') sendDanmu();
});
```

これで弾幕が流れるようになります。

---

### <a id="ch21"></a>21. 弾幕を動かそう：簡単アニメーション効果

よりスムーズにするために、CSSアニメーションを使う方法もありますが、ここでは基礎として `setInterval` を使った方法を採用します。練習として、速度や色を変えるなどカスタマイズしてみてください。

---

## 第五部：プロジェクト統合と公開

### <a id="ch22"></a>22. プロジェクトのチェックと最適化

- すべてのリンクが正しく動作するか確認
- 画像が表示されるか確認
- HTML/CSS を W3C バリデータでチェック（https://validator.w3.org/）
- コードにコメントを追加して整理
- 不要なファイルがないか確認

### <a id="ch23"></a>23. GitHub Pagesへのデプロイ

1. GitHub にアカウントを作成し、新しいリポジトリ（例：`aira-memory-house`）を作成（Public）。
2. ローカルのプロジェクトフォルダ内の全ファイルをアップロード。
3. リポジトリの Settings → Pages で、Source を `main` ブランチ、フォルダを `/ (root)` に設定し Save。
4. 数分後、`https://あなたのユーザー名.github.io/aira-memory-house/` で公開されます。

### <a id="ch24"></a>24. 次のステップ：次に学ぶべきこと

おめでとうございます！これでHTML/CSS/JSの基礎を学び、自分だけの思い出のサイトを公開できました。次に学ぶべきこと：

- CSSの深掘り（Grid、アニメーション、トランスフォーム）
- JavaScriptの応用（非同期処理、Fetch API、モジュール）
- フレームワーク（React、Vue）
- GitとGitHubの使い方
- バックエンド（Node.js）でデータベース連携

おすすめリソース：
- [MDN Web Docs](https://developer.mozilla.org/ja/)
- [W3School（日本語）](https://www.w3schools.com/)
- 『プラスティック・メモリーズ』公式設定資料集（仮）

---

## 🎁 完全なプロジェクトコード

（各ファイルの最終コードは前章の内容を参照してください。実際のブログ記事では、コード全体をまとめたダウンロードリンクやGitHubリポジトリを提供するとよいでしょう。）

---

## 💌 おわりに

Rokaと一緒にゼロから入門の旅を完走していただき、ありがとうございます。『プラスティック・メモリーズ』を題材にしたこのプロジェクトが、技術を学ぶ楽しさと同時に、作品への愛着を深めるきっかけとなれば幸いです。何か質問や作品の発表があれば、ぜひコメント欄で教えてください。

**大切な人と、いつかまた会えますように。**

—— Roka  
芦花家 (roka.ink)