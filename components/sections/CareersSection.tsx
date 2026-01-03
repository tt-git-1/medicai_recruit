"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { motion } from "framer-motion"

const jobs = [
    {
        title: "機械学習エンジニア",
        type: "正社員",
        location: "東京 (リモート可)"
    },
    {
        title: "バックエンドエンジニア (Go)",
        type: "正社員",
        location: "東京 (リモート可)"
    },
    {
        title: "フロントエンドエンジニア (Next.js)",
        type: "正社員",
        location: "東京 (リモート可)"
    },
    {
        title: "プロダクトマネージャー",
        type: "正社員",
        location: "東京"
    }
]

export function CareersSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Careers</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            現在募集中のポジション
                        </p>
                    </div>
                    <Button asChild variant="outline">
                        <Link href="/careers">すべての職種を見る</Link>
                    </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="hover:border-primary transition-colors cursor-pointer" onClick={() => window.location.href = '/careers'}>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
                                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="flex gap-4 text-sm text-muted-foreground">
                                        <span>{job.type}</span>
                                        <span>{job.location}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
