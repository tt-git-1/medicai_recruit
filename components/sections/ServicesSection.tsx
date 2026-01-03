"use client"

import { motion } from "framer-motion"
import { Monitor, Cpu, Network } from "lucide-react"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"

const services = [
    {
        icon: Monitor,
        title: "医師向けAI診断支援SaaS",
        description: "診断業務を効率化し、医師が患者と向き合う時間を最大化します。",
        image: "/services/diagnostic-saas.png"
    },
    {
        icon: Cpu,
        title: "画像診断AI解析",
        description: "X線、MRI、CT画像をAIが解析し、病変の早期発見をサポートします。",
        image: "/services/image-analysis.png"
    },
    {
        icon: Network,
        title: "電子カルテ連携クラウド",
        description: "施設間でのスムーズな情報共有を実現し、チーム医療を推進します。",
        image: "/services/cloud-integration.png"
    }
]

export function ServicesSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Services</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        医療の現場を変える、3つのソリューション
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full shadow-md hover:shadow-xl transition-shadow cursor-default overflow-hidden flex flex-col">
                                <div className="relative w-full aspect-video">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <CardHeader>
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
