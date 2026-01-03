import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getAllJobs, getJobBySlug } from "@/lib/cms"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"

export async function generateStaticParams() {
    const jobs = await getAllJobs()
    return jobs.map((job) => ({
        slug: job.slug,
    }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const job = await getJobBySlug(params.slug)
    if (!job) {
        return {
            title: "お探しのページは見つかりませんでした | 株式会社MedicAI",
        }
    }
    return {
        title: `${job.title} | 採用情報 | 株式会社MedicAI`,
        description: job.summary,
    }
}

export default async function CareerPostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const job = await getJobBySlug(params.slug)

    if (!job) {
        return notFound()
    }

    return (
        <div className="container py-24 mx-auto px-4 md:px-8">
            <Link href="/careers" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                一覧に戻る
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{job.title}</h1>
                        <p className="text-xl text-muted-foreground">{job.summary}</p>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        {/* Simple markdown rendering for now */}
                        <div className="whitespace-pre-wrap font-sans leading-relaxed">
                            {job.description}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <Card className="sticky top-24">
                        <CardContent className="p-6 space-y-6">
                            <div>
                                <h3 className="font-semibold mb-2">勤務地</h3>
                                <p className="text-muted-foreground">{job.location}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">雇用形態</h3>
                                <p className="text-muted-foreground">{job.type}</p>
                            </div>
                            <Button size="lg" className="w-full">
                                応募する
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
