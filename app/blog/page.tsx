import Link from "next/link"
import { getAllPosts } from "@/lib/cms"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export const metadata = {
    title: "ブログ | 株式会社MedicAI",
    description: "株式会社MedicAIの技術ブログ・お知らせ。",
}

export default async function BlogPage() {
    const posts = await getAllPosts()

    return (
        <div className="container py-24 mx-auto px-4 md:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-12 text-center">Blog</h1>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                {posts.map((post) => (
                    <Card key={post.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                                <span>{post.category}</span>
                                <span>{post.publishedAt}</span>
                            </div>
                            <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground line-clamp-3 text-sm">{post.content}</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="link" className="p-0">
                                <Link href={`/blog/${post.slug}`}>
                                    Read More
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
