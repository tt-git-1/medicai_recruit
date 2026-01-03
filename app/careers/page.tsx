import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllJobs } from "@/lib/cms"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export const metadata = {
    title: "採用情報 | 株式会社MedicAI",
    description: "株式会社MedicAIの募集職種一覧です。",
}

export default async function CareersPage() {
    const jobs = await getAllJobs()

    return (
        <div className="container py-24 mx-auto px-4 md:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Open Positions</h1>
                <p className="text-lg text-muted-foreground">
                    私たちのミッションに共感し、共に挑戦してくれる仲間を募集しています。
                </p>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
                {jobs.map((job) => (
                    <Card key={job.id} className="hover:border-primary transition-colors">
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div>
                                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                                    <div className="flex gap-3 text-sm text-muted-foreground">
                                        <span className="bg-secondary px-2 py-1 rounded">{job.type}</span>
                                        <span className="bg-secondary px-2 py-1 rounded">{job.location}</span>
                                    </div>
                                </div>
                                <Button asChild className="hidden md:inline-flex">
                                    <Link href={`/careers/${job.slug}`}>
                                        詳細 <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{job.summary}</p>
                        </CardContent>
                        <CardFooter className="md:hidden">
                            <Button asChild className="w-full">
                                <Link href={`/careers/${job.slug}`}>
                                    詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
