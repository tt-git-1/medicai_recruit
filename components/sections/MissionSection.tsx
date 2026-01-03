"use client"

import { motion } from "framer-motion"
import { ShieldCheck, HeartPulse, Globe2 } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"

const features = [
    {
        icon: HeartPulse,
        title: "医療の質を向上",
        description: "AIによる画像診断支援で、見落としのない高精度な診断をサポートします。"
    },
    {
        icon: Globe2,
        title: "地域格差をなくす",
        description: "クラウド基盤により、どの地域にいても専門医レベルの診断へのアクセスを可能にします。"
    },
    {
        icon: ShieldCheck,
        title: "安心・安全なインフラ",
        description: "医療情報を扱うため、最高レベルのセキュリティと信頼性を担保したシステムを構築しています。"
    }
]

export function MissionSection() {
    return (
        <section className="py-24 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        テクノロジーの力で、医療現場の課題を解決する
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-none shadow-lg">
                                <CardHeader>
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
