import { Card, CardContent } from "@/components/ui/Card"

export const metadata = {
    title: "カルチャー | 株式会社MedicAI",
    description: "株式会社MedicAIの働く環境・企業文化について。",
}

const values = [
    {
        title: "User First, Patient First",
        desc: "私たちは技術者である前に、医療への貢献者です。常に患者様の利益を第一に考えます。"
    },
    {
        title: "Think Big, Start Small",
        desc: "理想は高く持ちつつ、目の前の課題を一つひとつ確実に解決していきます。"
    },
    {
        title: "Respect Professionalism",
        desc: "医療、エンジニアリング、ビジネス。異なる専門性を持つメンバーが互いにリスペクトし合います。"
    }
]

export default function CulturePage() {
    return (
        <div className="pb-24">
            <div className="bg-primary text-primary-foreground py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Culture</h1>
                    <p className="text-xl max-w-2xl text-primary-foreground/90">
                        多様なバックグラウンドを持つプロフェッショナルが、ひとつのミッションに向かって挑戦しています。
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-24">
                <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((v, i) => (
                        <Card key={i} className="bg-secondary/20 border-none shadow-md">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-bold mb-4 text-primary">{v.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-bold mb-12 text-center">Work Environment</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                            <img src="/assets/office_workspace.png" alt="Open Workspace" className="object-cover w-full h-full" />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                            <img src="/assets/office_meeting.png" alt="Meeting Room" className="object-cover w-full h-full" />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                            <img src="/assets/office_break.png" alt="Relax Area" className="object-cover w-full h-full" />
                        </div>
                        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                            <img src="/assets/office_coding.png" alt="Focus Area" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
