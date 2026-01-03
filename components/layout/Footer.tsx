import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container max-w-screen-2xl py-10 md:py-16 px-4 md:px-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-primary">MedicAI Inc.</h4>
                        <p className="text-sm text-muted-foreground">
                            テクノロジーで、医療の未来を創造する
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">About</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/mission" className="hover:text-foreground transition-colors">Mission</Link></li>
                            <li><Link href="/services" className="hover:text-foreground transition-colors">Services</Link></li>
                            <li><Link href="/culture" className="hover:text-foreground transition-colors">Culture</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Careers</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/careers" className="hover:text-foreground transition-colors">All Positions</Link></li>
                            <li><Link href="/blog" className="hover:text-foreground transition-colors">Tech Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-4">Contact</h4>
                        <p className="text-sm text-muted-foreground">
                            info@medic-ai.example.com
                        </p>
                    </div>
                </div>
                <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} MedicAI Inc. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
