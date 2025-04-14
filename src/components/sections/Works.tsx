import Link from 'next/link'
import Image from 'next/image'

export const Works = () => {
    return (
        <section id="works" className="mt-24 md:mt-28 py-12 md:py-20 px-4 md:px-6">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-medium mb-12 md:mb-20">Works</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    <Link href="/works/portfolio" className="group">
                        <div className="aspect-[1/1] mb-4 md:mb-5 overflow-hidden rounded-lg relative">
                            <Image
                                src="/works/portfolio.png"
                                alt="Portfolio"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-lg md:text-xl font-medium mb-2">ポートフォリオ</h3>
                    </Link>

                    <Link href="/works/azure-rag" className="group">
                        <div className="aspect-[1/1] mb-4 md:mb-5 overflow-hidden rounded-lg relative">
                            <Image
                                src="/works/azure_rag.png"
                                alt="AI Chat System"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-lg md:text-xl font-medium mb-2">Azure AIサービスを利用したRAG</h3>
                    </Link>

                    <Link href="/works/schedule-management" className="group">
                        <div className="aspect-[1/1] mb-4 md:mb-5 overflow-hidden rounded-lg relative">
                            <Image
                                src="/works/schedule_management.png"
                                alt="Schedule Management"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-lg md:text-xl font-medium mb-2">スケジュール管理アプリ</h3>
                    </Link>
                </div>
            </div>
        </section>
    )
} 
