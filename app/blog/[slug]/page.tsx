import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getAllPosts, getPostBySlug } from "@/lib/cms"

export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = await getPostBySlug(params.slug)
    if (!post) {
        return {
            title: "記事が見つかりませんでした",
        }
    }
    return {
        title: `${post.title} | 株式会社MedicAI`,
    }
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = await getPostBySlug(params.slug)

    if (!post) {
        return notFound()
    }

    return (
        <div className="container py-24 mx-auto px-4 md:px-8 max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                ブログ一覧に戻る
            </Link>

            <article>
                <div className="mb-8">
                    <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                        <span className="bg-muted px-2 py-1 rounded">{post.category}</span>
                        <span>{post.publishedAt}</span>
                    </div>
                    <h1 className="text-3xl font-bold sm:text-4xl leading-tight">{post.title}</h1>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="whitespace-pre-wrap">{post.content}</p>
                </div>
            </article>
        </div>
    )
}
