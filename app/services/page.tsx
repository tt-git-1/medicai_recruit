import { ServicesSection } from "@/components/sections/ServicesSection"
import { Card, CardContent } from "@/components/ui/Card"
import { Check } from "lucide-react"

export const metadata = {
    title: "事業内容 | 株式会社MedicAI",
    description: "株式会社MedicAIの事業内容・提供サービスについて。",
}

const features = [
    "24時間365日の稼働監視",
    "専門医によるダブルチェック体制",
    "既存のHIS/RISとのシームレスな連携",
    "ISO27001取得のセキュリティ体制",
]

export default function ServicesPage() {
    return (
        <div className="pb-24">
            <div className="bg-secondary/30 py-24">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Our Services</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        医療現場の「声」から生まれた、実用性の高いソリューションを提供します。
                    </p>
                </div>
            </div>

            <ServicesSection />

            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">選ばれる理由</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {features.map((feature, i) => (
                            <Card key={i}>
                                <CardContent className="flex items-center p-6 gap-4">
                                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                        <Check className="h-5 w-5 text-primary" />
                                    </div>
                                    <span className="font-bold text-lg">{feature}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
