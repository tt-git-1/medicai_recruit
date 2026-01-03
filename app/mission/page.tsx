import { MissionSection } from "@/components/sections/MissionSection"

export const metadata = {
    title: "ミッション | 株式会社MedicAI",
    description: "株式会社MedicAIのミッション・ビジョンをご紹介します。",
}

export default function MissionPage() {
    return (
        <div className="pb-24">
            <div className="bg-primary/5 py-24">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Mission & Vision</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        私たちは、テクノロジーの力で医療の常識を覆し、
                        誰もが平等に高品質な医療を受けられる世界を実現します。
                    </p>
                </div>
            </div>

            <MissionSection />

            <div className="container mx-auto px-4 md:px-8 py-24">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl font-bold">代表メッセージ</h2>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3 aspect-[3/4] relative rounded-lg overflow-hidden shrink-0 shadow-lg">
                            <img
                                src="/assets/ceo.png"
                                alt="代表取締役 CEO 医療 太郎"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">「医師を支え、患者を救う。」</h3>
                            <p className="leading-relaxed text-muted-foreground">
                                現代医療は多くの課題を抱えています。医師不足、地域格差、長時間労働...。
                                私たちはAIとクラウドの技術を用いて、これらの課題に真正面から取り組んでいます。
                            </p>
                            <p className="leading-relaxed text-muted-foreground">
                                私たちが作っているのは、単なるツールではありません。
                                未来の医療インフラそのものです。
                            </p>
                            <p className="font-bold mt-4">代表取締役 CEO 医療 太郎</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
