---
title: "Ren'Pyエンジン基礎チュートリアル"
published: 2026-08-19
pinned: false
description: "『プラスティック・メモリーズ』原作をベースにしたRen'Py入門チュートリアル。ゼロからビジュアルノベル制作を始められます。"
tags: ["Ren'Py", "ビジュアルノベル", "チュートリアル", "プラスティック・メモリーズ"]
category: "チュートリアル"
licenseName: "CC BY-NC-SA 4.0"
author: "さくらじま ろか"
sourceLink: "https://jp.roka.ink/posts/jpid002/"
draft: false
date: 2026-02-24
image: "./images/cover.png"
pubDate: 2026-08-19
---
# Ren'Py ビジュアルノベルエンジン基礎チュートリアル

**芦花家 (roka.ink)** へようこそ！  
ここは **Roka** が、ビジュアルノベル制作に興味がある全ての皆さんのために用意した Ren'Py 基礎チュートリアルです。内容が逸脱しないよう、本チュートリアルの全サンプルは『プラスティック・メモリーズ』のキャラクターとストーリーを**改変した簡易シミュレーション**に統一しています。引用する場面や台詞は、いずれも原作アニメに該当する箇所が存在します。

内容は **Ren'Py 8.x / 7.x** に対応しており、Windows、macOS、Linux で動作します。

> 📥 **Ren'Py の入手**  
> [Ren'Py 公式サイト](https://www.renpy.org/) からご自身のOSに対応する SDK バージョンをダウンロードしてください。ランチャーを含む完全なパッケージを推奨します。

---

## 1. インストールと Ren'Py の初歩

1. ダウンロードした圧縮ファイルを、わかりやすいフォルダ（例：`D:\RenPy` や `~/RenPy`）に**解凍**します。
2. `renpy.exe` (Windows) または `renpy.sh` (Linux/macOS) を実行してランチャーを起動します。
3. ランチャー画面は主に三つの領域で構成されます：
   - **左側**：プロジェクト一覧（デフォルトでチュートリアルプロジェクト「Tutorial」とデモ「The Question」が含まれます）。
   - **中央**：プロジェクト操作ボタン（プロジェクトの起動、スクリプト編集、ファイル管理など）。
   - **右側**：Ren'Py のバージョン情報および設定。

---

## 2. 最初のプロジェクトを作成する

1. ランチャーで **「新規プロジェクトを作成」** をクリック。
2. プロジェクトの保存先を選択（通常はデフォルトで問題ありません）。
3. **プロジェクト名** を入力（例：「PlasticMemories_Test」）。
4. **カラースキーム** を選択（最初はデフォルトが無難です）。
5. **ゲーム解像度** を選択（一般的なもの：1280x720 または 1920x1080）。
6. Ren'Py が基本ファイル構造を生成するのを待ちます。

生成後のプロジェクトフォルダ構成：

    MyFirstGame/
    ├── game/               # ゲームスクリプト・リソース格納ディレクトリ
    │   ├── gui/            # GUI画像定義
    │   ├── images/         # 全画像格納
    │   ├── audio/          # 音楽・効果音格納
    │   ├── script.rpy      # デフォルトメインスクリプト
    │   └── options.rpy     # ゲームオプション設定
    └── (その他のプロジェクトファイル)

---

## 3. Ren'Py スクリプトの基礎

Ren'Py スクリプトは拡張子 `.rpy` のファイルで記述し、その本質は Ren'Py 構文 + Python 式です。すべてのスクリプトファイルは `game/` ディレクトリに配置します。

### 3.1 ファイル構造とエンコーディング

- **UTF-8 エンコーディング**（UTF-8 に対応したエディタ（VS Code、Sublime Text、Notepad++ など）の使用を強く推奨）。
- コメントは `#` を使用。
- インデントに注意：Python と同様に、**スペースインデント**でコードブロックを表します（通常はスペース4つ）。

### 3.2 ラベル (label) とフロー制御

ゲームはラベル `start` から実行を開始します。各 `label` がスクリプトのノードを定義します。

    label start:
        "芦花家の Ren'Py 教学ゲームへようこそ！"
        "今日は『プラスティック・メモリーズ』で、水柿司とアイラが出会った物語を追体験します。"
        return   # ゲーム終了またはメインメニューへ戻る

- `return` はゲームを終了します（start から呼ばれた場合はメインメニューに戻ります）。
- `jump` を使って他のラベルへ移動：

    label start:
        "ショッピングモールのエレベーターの中、窓の向こうに観覧車が見える。"
        jump first_day_meet
    
    label first_day_meet:
        "今日からお世話になります。"
        return

### 3.3 台詞 (ダイアログ) の記述

まずキャラクターオブジェクトを定義します。本チュートリアルでシミュレーションする主なキャラクターは以下の通りです：

    define tsukasa = Character("水柿司")
    define aira = Character("アイラ")
    define mitsuki = Character("絹島満")
    define zach = Character("ザック")
    define yamazonobe = Character("山野辺課長")

これでキャラクター名を使って台詞を表示できます：

    yamazonobe "そうだ！アイラちゃんと司くんをペアにしたらどうだ？"
    aira "わかりました"

原作の名台詞例（第3話、アイラの独白より）：

    aira "素敵な思い出ほど、時に人を苦しくさせることもあるの。"

### 3.4 画像とシーン

#### 画像の宣言
通常、画像は `game/images/` フォルダに置き、Ren'Py はファイル名をもとに自動で画像タグを関連付けます。例：
- `bg office.jpg` → 背景タグ `bg office`（SAI社ターミナルサービス部門オフィス）
- `aira normal.png` → キャラタグ `aira`、表情 `normal`
- `tsukasa smile.png` → キャラタグ `tsukasa`、表情 `smile`

手動で宣言することも可能です（原作シーンに合わせた命名を推奨）：

    image bg office = "bg/sai_office.jpg"
    image bg shopping_mall = "bg/mall.jpg"        # 第1話で出会うショッピングモール
    image bg amusement_park = "bg/park_night.jpg" # 第3話のデート遊園地
    image bg ferris_wheel = "bg/ferris_wheel.jpg" # 最終話の観覧車
    
    image aira normal = "aira/ normal.png"
    image aira sad = "aira/sad.png"
    image aira smile = "aira/smile.png"
    image tsukasa normal = "tsukasa/normal.png"

#### 画像の表示
- `scene`：すべての画像をクリアし、新しい背景を表示します。

    scene bg office  # SAI社オフィスを表示

- `show`：既存の画像の上に新しい画像（キャラ立ち絵）を表示します。

    show aira normal at left   # アイラを左に表示
    show tsukasa smile at right # 司を右に表示

- `hide`：指定した画像を非表示にします。

    hide aira

#### 画像の位置
よく使われる位置プリセット：`left`, `right`, `center`, `truecenter`。また `at` を使って独自のトランスフォームを適用することもできます。

    show aira normal at left
    show mitsuki angry at right  # 満が司の「悪質な行為」に怒る場面

### 3.5 音楽と効果音

オーディオファイルを `game/audio/` に置き、以下のステートメントで制御します。『プラスティック・メモリーズ』のサウンドトラックは非常に優れているので、原曲を使用することをお勧めします。

- `play music`：BGMを再生（自動ループ）。

    play music "audio/plastic_memories_ost.ogg"  # サウンドトラック再生

- `play sound`：効果音を再生（一度のみ）。

    play sound "audio/click.ogg"  # クリック音

- `stop music`：音楽を停止。

    stop music fadeout 2.0   # 2秒かけてフェードアウト

対応フォーマット：.ogg, .mp3, .wav など。

### 3.6 トランジション効果

`scene`, `show`, `hide` の後に `with` ステートメントを追加することでトランジションを適用できます。

主なトランジション：
- `dissolve`：ディゾルブ
- `fade`：フェードイン／フェードアウト
- `move`：移動

例——第1話でアイラと司がショッピングモールのエレベーターで初めて出会うシーンを再現：

    scene bg shopping_mall with dissolve
    show aira normal at center with moveinright
    tsukasa "（エレベーターの中で、初めてアイラを見た）"

### 3.7 メニューと分岐

`menu` ステートメントを使って選択肢メニューを作成します。メニュー項目には条件を付けることも可能です。第3話で司がアイラをデートに誘うシーンを例に：

    label date_invitation:
        scene bg office
        show tsukasa normal at left
        show aira normal at right
        tsukasa "アイラ、明日休みだろ……一緒に買い物に行かないか？"
        menu:
            "アイラの返答："
            "承諾する" if aira_affection > 50:
                aira "……うん、いいよ。"
                jump shopping_date
            "断る":
                aira "私……やめておく。"
                tsukasa "そうか……"

---

## 4. 発展的な機能（『プラスティック・メモリーズ』のストーリーに沿って）

### 4.1 変数と条件分岐

変数を使って重要な選択を記録します。例えば、アイラの司に対する好感度を記録します。

    $ aira_affection = 30  # 初期好感度
    $ aira_lifetime = 2000  # アイラの残り寿命（時間） – 第2話より
    
    label check_affection:
        if aira_affection >= 80:
            "アイラは司に心を開き始めた。"
        elif aira_affection >= 50:
            "アイラは司とのコンビに慣れてきた。"
        else:
            "アイラはまだ距離を置いている。"

### 4.2 Pythonブロックを使った複雑なロジック

    python:
        # アイラの残り寿命を日数で計算
        days_left = aira_lifetime // 24
        hours_remain = aira_lifetime % 24
        renpy.say(aira, "私の残り寿命はあと" + str(days_left) + "日" + str(hours_remain) + "時間です。")

### 4.3 画像トランスフォームとアニメーション

`transform` を使って独自のアニメーションを作成できます。例えば、第3話で司が寮で様々な「悪知恵」を試してアイラとの距離を縮めようとするシーンを再現：

    transform exercise:
        yoffset 0
        linear 0.5 yoffset -20
        linear 0.5 yoffset 0
        repeat 3
    
    label weird_attempts:
        scene bg dorm
        show tsukasa normal at exercise
        show aira normal at right
        "司は部屋の中で運動を始め、アイラの注意を引こうとする。"
        aira "（横目で一瞥し、またぼんやりする）"  # 原作でアイラは動じない
        "努力……むなしく終わった。"

### 4.4 カスタムスタイル

『プラスティック・メモリーズ』のビジュアルスタイルに合わせたテキストスタイルをカスタマイズできます。

    style plastic_window:
        background Solid("#88aaff")  # 淡いブルー、作品の爽やかで切ない雰囲気に合わせる
        xalign 0.5
        yalign 0.95

---

## 5. 『プラスティック・メモリーズ』ストーリーサンプル集

以下は原作ストーリーを元にした完全なコード例です。学習の参考にしてください。

### サンプル1：第1話——最初の回収任務：ニーナと百花千尋

シーン設定：アイラはこれまで何度もアフタヌーンティーで百花千尋と交渉しようとしたが、ことごとく失敗。その後、二人は誤って庭に入りニーナ本人に会い、ニーナの懇願により祖母がようやく署名に同意する。

    label first_recovery:
        scene bg chihiro_house
        "司とアイラの最初の任務：ギフティア「ニーナ」の回収。"
        show chihiro sad at center
        tsukasa "百花さん、ニーナの回収についてですが……"
        chihiro "署名は拒否します。"
        show aira normal at right
        aira "お話だけでもさせてください。お茶でもしながら……"
        chihiro "結構です。"
        
        "何度か試みた後、アイラと司は庭に迷い込み、ニーナ本人と出会う。"
        hide chihiro
        show nina smile at center
        nina "私を回収しに来たんですよね？"
        show chihiro sad at left
        chihiro "ニーナ……"
        nina "おばあちゃん、ずっとおばあちゃんのそばにいたら、ニーナは壊れてしまうし、おばあちゃんに迷惑をかけちゃう。"
        nina "だからずっとそばにはいられない。おばあちゃんが悲しむと、ニーナも悲しむから。"
        
        "ニーナの言葉を聞き、百花千尋はようやく考えを改める。"
        chihiro "わかった……署名します。"
        hide nina with dissolve
        "ニーナは最後の回収を終えた。"
        
        scene bg street
        show tsukasa normal at left
        show aira normal at right
        tsukasa "これが俺たちの仕事なんだな……"
        aira "うん。私たちがしていることは、誰かの残した思い出を壊すことで、決して報われることはない。"
        
        "夕陽の下、二人は黙って帰路につく。"
        return

### サンプル2：第3話——ハーブショップの選択

シーン設定：司は「同僚に感謝の気持ちを伝えたい」と偽って、アイラにハーブ選びの手伝いを頼む。しかし実際には、すべてアイラ自身の特徴を描写している。

    label herb_shop:
        scene bg herb_shop
        show aira normal at center
        show tsukasa smile at left
        tsukasa "感謝したい同僚に贈るハーブを選びたいんだ。彼女にぴったりのものを選んでくれないか？"
        aira "いいですよ。彼女の性格を教えてください。"
        tsukasa "うーん……あまり話さないし、家ではよくぼんやりしてる。食べる量は少なく、自分の好みにこだわるタイプ。"
        aira "面倒な人ですね。"
        tsukasa "そんなことないよ！"  # アイラはまだ自分が描写されていることに気づいていない
        aira "（メガネをかけ、真剣に選び始める）"
        return

### サンプル3：最終話——観覧車での別れ

シーン設定：アイラが回収される直前、二人は観覧車の中で最後の時を過ごす。

    label final_ferris_wheel:
        scene bg ferris_wheel at night
        show tsukasa normal at left
        show aira smile at right
        tsukasa "アイラ……"
        aira "司、今までありがとう。"
        menu:
            "アイラに何を伝えますか？"
            "彼女の一番好きなところを伝える":
                tsukasa "君の不器用なところが好きだ。"
            "最も大切な思い出を伝える":
                tsukasa "君と遊園地に行ったあの日が、一番の思い出だ。"
        aira "ありがとう……"
        aira "泣いてくれてありがとう。"
        aira "夢のような時間も……もうすぐ終わる。"
        aira "最後の場所は……ここでいい。"
        aira "観覧車が一周するまでに。"
        aira "（全てを終わらせる指輪を手のひらに乗せて）"
        tsukasa "…"
        tsukasa "……"
        aira "ありがとう、泣いてくれて"
        aira "……ありがとう…"
        tsukasa "………（アイラに指輪をはめた）"
        tsukasa "時は巡り、あなたと真実の愛する人が再び出会えますように。"
        aira "うん…"
        return

---

## 6. テストとリリース

### 6.1 ゲームのテスト

ランチャーでプロジェクトを選択し、**「プロジェクトを起動」** をクリックして実行します。こまめにテストし、スクリプトにエラーがないことを確認することをお勧めします。

### 6.2 スクリプトエラーのチェック

**「スクリプトをチェック」** (Check Scripts) をクリックすると、構文エラーを素早く検出できます。

### 6.3 配布用ビルドの生成

1. ランチャーでプロジェクトを選択。
2. **「配布用ビルド」** (Build Distributions) をクリック。
3. 対象プラットフォーム（Windows、macOS、Linux など）を選択すると、Ren'Py が自動で配布可能な圧縮ファイルをパッケージ化します。

生成されたパッケージは、プロジェクトディレクトリ内の `dist/` フォルダに保存されます。

---

## 7. よくある質問とコツ（『プラスティック・メモリーズ』開発シーンに沿って）

### Q: スクリプトを変更したのに反映されない？
A: ランチャーで **「再読み込み」** をクリックするか、ゲームを再起動してください。

### Q: アイラのようなキャラクターの表情変化を実装するには？
A: `ConditionSwitch` を使って変数に応じて表情を切り替えます。

    image aira = ConditionSwitch(
        "aira_happy == True", "aira_smile.png",
        "aira_sad == True", "aira_sad.png",
        "True", "aira_normal.png"
    )

### Q: 「アイラの残り寿命」のようなカウントダウンシステムを実装するには？
A: 変数と `renpy.pause` を使って時間経過をシミュレートします。

    label time_pass:
        $ aira_lifetime -= 24  # 1日経過
        if aira_lifetime <= 0:
            jump recovery_scene
        else:
            "アイラの残り寿命はあと [aira_lifetime] 時間です。"
            return

### Q: マルチエンディングを設定するには？
A: 重要な選択ポイントでの変数に応じて、異なるエンドラベルにジャンプさせます。

    if aira_affection >= 80:
        jump good_ending
    else:
        jump normal_ending

---

## 8. 学習リソース

- **公式ドキュメント**：[https://www.renpy.org/doc/html/](https://www.renpy.org/doc/html/) （最も信頼できる情報源）
- **公式日本語ドキュメント**：[https://www.renpy.org/doc/html/](https://www.renpy.org/doc/html/) （一部日本語訳あり）
- **Ren'Py 日本語コミュニティ**：[https://www.renpy.jp/](https://www.renpy.jp/) （フォーラム、Q&A、リソース）
- **『プラスティック・メモリーズ』参考資料**：
  - 原作アニメ 第1～13話
  - B站（Bilibili）のコラム分析
  - 名台詞集

---

## おわりに

**芦花家 (roka.ink)** にお越しの皆さん、このチュートリアルで Ren'Py の基本的な使い方を習得できたはずです。すべてのサンプルは『プラスティック・メモリーズ』の原作設定に厳密に従っています——第1話でのアイラと司のショッピングモールでの出会い、第3話のハーブショップでの選択、最終話の観覧車での別れまで、どのシーンも原作に対応する箇所があります。

このチュートリアルが、Ren'Py の使い方をより深く理解し、『プラスティック・メモリーズ』のファンにとっても親しみやすい学習体験となることを願っています。皆さんの作品を楽しみにしています！

> ✨ **ヒント**：スクリプトは常に整理整頓し、`#` コメントを多用し、こまめにプロジェクトをバックアップしましょう。問題が発生したらまず公式ドキュメントを参照し、それでも解決しない場合はコミュニティで質問してください。

**大切な人と、いつかまた巡り合えますように。**