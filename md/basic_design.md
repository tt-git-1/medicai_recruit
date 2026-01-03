# 基本設計書 - 株式会社MedicAI 採用サイト

## 1. 概要

本ドキュメントは、「株式会社MedicAI 採用サイト」の構築における基本設計を定義する。
要件定義書に基づき、サイトの構造、機能、技術的な仕様を明確にすることを目的とする。

## 2. 設計方針

-   **コンポーネントベース設計**: UIを再利用可能なコンポーネントに分割して開発を進めることで、開発 eficiencia と保守性を向上させる。
-   **Jamstackアーキテクチャ**: Next.jsによる静的サイト生成(SSG)とサーバーサイドレンダリング(SSR)を組み合わせ、高速な表示と優れたSEOを実現する。コンテンツはHeadless CMSから取得する。
-   **レスポンシブデザイン**: PC、タブレット、スマートフォンなど、あらゆるデバイス幅に対応する「モバイルファースト」のアプローチで設計・実装を行う。
-   **セマンティックHTML**: SEOとアクセシビリティを考慮し、意味的に正しいHTMLタグを使用する。

## 3. システム構成図

```mermaid
graph TD
    subgraph "ユーザー環境"
        User[<i class="fa fa-user"></i> 応募者]
        Browser[<i class="fa fa-window-maximize"></i> ブラウザ]
    end

    subgraph "Vercel (ホスティング)"
        NextApp[<i class="fa fa-code"></i> Next.js Frontend]
        MockCMS[<i class="fa fa-file-code"></i> Mock CMS (lib/cms.ts)]
    end

    subgraph "外部サービス (将来導入)"
        RealCMS[<i class="fa fa-database"></i> Headless CMS]
    end

    User -- "HTTPS" --> Browser
    Browser -- "HTTPS Request" --> NextApp
    NextApp -- "Get Data" --> MockCMS
    MockCMS -- "JSON Data" --> NextApp
    NextApp -- "HTML/CSS/JS" --> Browser
    
    %% 将来的な切り替えイメージ
    NextApp -.->|Switch to API| RealCMS
```

## 4. ディレクトリ構成案

Next.js (App Router) の規約に沿った、拡張性の高いディレクトリ構成を計画する。

```
/
├── app/                  # ルーティングとページ
│   ├── (pages)/          # 通常のページ群
│   │   ├── layout.tsx    # 全体レイアウト
│   │   ├── page.tsx      # トップページ
│   │   ├── mission/
│   │   ├── services/
│   │   ├── culture/
│   │   ├── careers/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx  # 募集職種詳細 (動的)
│   │   └── blog/
│   │       ├── page.tsx
│   │       └── [slug]/
│   │           └── page.tsx  # ブログ記事詳細 (動的)
│   └── api/              # APIルート (応募フォーム処理など)
│       └── apply/
│           └── route.ts
├── components/           # 再利用可能なコンポーネント
│   ├── ui/               # ボタン、カードなどの最小単位のUI
│   ├── layout/           # ヘッダー、フッターなど
│   └── sections/         # ページ内の各セクション
├── lib/                  # ライブラリ、ユーティリティ関数
│   └── cms.ts            # Headless CMSとの通信ロジック
├── public/               # 静的ファイル (画像, アイコン)
├── styles/               # グローバルスタイル
│   └── globals.css
└── tailwind.config.ts    # Tailwind CSS 設定
```

## 5. 画面設計（主要ページ）

### 5.1. トップページ (`/`)

-   **Header**: グローバルナビゲーション
-   **Hero Section**: 全画面の背景動画/画像とキャッチコピー、ミッション
-   **Services Section**: 事業内容をカード形式で3〜4点紹介
-   **Vision Section**: 企業のビジョンを画像とテキストで訴求
-   **Culture Section**: 求める人物像や働く環境を紹介
-   **Careers Section**: 募集職種を数件ピックアップし、一覧ページへ誘導
-   **Blog Section**: 最新のブログ記事を数件表示
-   **Footer**: サイトマップ、SNSリンク、コピーライト

### 5.2. 募集職種詳細ページ (`/careers/[slug]`)

-   **Header**
-   **Job Header**: 職種名、募集背景
-   **Job Details**:
    -   業務内容 (箇条書き)
    -   必須スキル・経験
    -   歓迎スキル・経験
    -   求める人物像
-   **Application Requirements**:
    -   雇用形態
    -   勤務地
    -   給与
    -   福利厚生
-   **Apply Button**: 応募フォームへの導線
-   **Footer**

## 6. 主要コンポーネント設計

| コンポーネント名 | 役割 | 想定されるProps |
| :--- | :--- | :--- |
| `Header.tsx` | 全ページ共通のヘッダーとナビゲーション | `navItems` (リンクの配列) |
| `Footer.tsx` | 全ページ共通のフッター | `siteMapLinks`, `socialLinks` |
| `Button.tsx` | 汎用的なボタンスタイル | `variant` (primary/secondary), `size`, `onClick` |
| `Card.tsx` | コンテンツを囲む汎用的なカード | `children`, `className` |
| `JobListItem.tsx` | 募集職種一覧で使う項目コンポーネント | `title`, `summary`, `tags`, `slug` |
| `PostListItem.tsx` | ブログ一覧で使う項目コンポーネント | `title`, `publishedAt`, `category`, `slug` |

## 7. API（データ）設計

Headless CMSから取得するコンテンツの構造を以下のように定義する。

### 7.1. 募集職種 (Job)

-   `id`: `string` (一意なID)
-   `slug`: `string` (URL用のスラッグ)
-   `title`: `string` (職種名)
-   `summary`: `string` (一覧表示用の要約)
-   `description`: `markdown` (業務内容、応募要件などの詳細)
-   `publishedAt`: `datetime` (公開日時)

### 7.2. ブログ記事 (Post)

-   `id`: `string`
-   `slug`: `string`
-   `title`: `string` (記事タイトル)
-   `eyecatch`: `image` (アイキャッチ画像)
-   `body`: `markdown` (記事本文)
-   `publishedAt`: `datetime`
