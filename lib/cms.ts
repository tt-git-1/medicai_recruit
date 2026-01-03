
export interface Job {
    id: string
    slug: string
    title: string
    location: string
    type: string
    summary: string
    description: string
}

const jobs: Job[] = [
    {
        id: "1",
        slug: "machine-learning-engineer",
        title: "機械学習エンジニア",
        location: "東京 (リモート可)",
        type: "正社員",
        summary: "医療画像診断AIのモデル開発・運用をリードするエンジニアを募集。",
        description: `
## 業務内容
- 医療画像（CT/MRI/X線）の診断支援AIモデルの開発
- 深層学習モデルの学習、評価、改善
- 臨床データを用いた実証実験のサポート

## 必須スキル
- Pythonによる機械学習モデルの開発経験 (3年以上)
- PyTorch, TensorFlowなどのフレームワーク使用経験
- 論文読み込みと実装能力

## 歓迎スキル
- 医療画像の扱いに関する知識 (DICOMなど)
- Docker/Kubernetesを用いたデプロイ経験
    `
    },
    {
        id: "2",
        slug: "backend-engineer",
        title: "バックエンドエンジニア (Go)",
        location: "東京 (リモート可)",
        type: "正社員",
        summary: "診断支援プラットフォームのバックエンド開発を担当します。",
        description: `
## 業務内容
- Go言語を用いたマイクロサービスの設計・開発
- 高負荷に耐えうるAPI基盤の構築
- 認証・認可システムの設計

## 必須スキル
- Webアプリケーションのバックエンド開発経験 (3年以上)
- Go, Rust, Java, C# いずれかの静的型付け言語での開発経験
- RDBMS (PostgreSQL, MySQL) の設計・運用経験

## 歓迎スキル
- gRPCを用いた開発経験
- クラウドインフラ (AWS/GCP) の構築経験
    `
    },
    {
        id: "3",
        slug: "frontend-engineer",
        title: "フロントエンドエンジニア (Next.js)",
        location: "東京 (リモート可)",
        type: "正社員",
        summary: "医師が使用する診断ビューワーや管理画面のフロントエンド開発。",
        description: `
## 業務内容
- Next.js / React を用いたWebアプリケーション開発
- 複雑なデータを可視化するUIの実装
- パフォーマンスチューニング

## 必須スキル
- React, Vue.jsなどのモダンフロントエンドフレームワークでの開発経験
- TypeScriptを用いた開発経験

## 歓迎スキル
- WebGL / Three.js を用いた3D描画の経験
- アクセシビリティ (a11y) に関する知識
    `
    }
]

export async function getAllJobs(): Promise<Job[]> {
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 100))
    return jobs
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const job = jobs.find((j) => j.slug === slug)
    return job || null
}

export interface Post {
    id: string
    slug: string
    title: string
    category: string
    publishedAt: string
    content: string
}

const posts: Post[] = [
    {
        id: "1",
        slug: "tech-blog-1",
        title: "医療画像診断におけるAIモデルの推論高速化について",
        category: "Tech",
        publishedAt: "2024-04-01",
        content: "医療現場では、診断のスピードが重要です。本記事では、QuantizationやPruningを用いたモデル軽量化と、TensorRTによる推論最適化の実践例を紹介します..."
    },
    {
        id: "2",
        slug: "culture-1",
        title: "医師×エンジニアの協業体制が生み出すもの",
        category: "Culture",
        publishedAt: "2024-03-15",
        content: "MedicAIでは、開発プロセスの初期段階から医師が参画します。ドメイン知識と技術力がどのように融合しているか、具体的なプロジェクトを例に解説します..."
    }
]

export async function getAllPosts(): Promise<Post[]> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    return posts
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    await new Promise((resolve) => setTimeout(resolve, 100))
    const post = posts.find((p) => p.slug === slug)
    return post || null
}
