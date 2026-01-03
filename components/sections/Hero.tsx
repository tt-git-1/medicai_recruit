"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-background pt-16 md:pt-20">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[100px]" />
                <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="mx-auto w-fit rounded-full bg-muted/50 px-4 py-1.5 text-sm font-medium text-primary">
                        We are hiring Engineers & PMs
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                        テクノロジーで、<br className="hidden md:block" />
                        <span className="text-primary">医療の未来</span>を創造する
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
                        株式会社MedicAIは、AI診断支援SaaSで医療格差をなくし、
                        すべての人が最適な医療を受けられる世界を目指しています。
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg" className="h-12 px-8 text-base">
                            <Link href="/careers">
                                募集職種を見る <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                            <Link href="/mission">私たちが大切にしていること</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
