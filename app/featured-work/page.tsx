import { FeatureCarousel } from "@/components/ui/animated-feature-carousel";

export default function FeaturedWorkSection() {
    const images = {
        alt: "Project showcase",
        step1img1: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1740&auto=format&fit=crop",
        step1img2: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1740&auto=format&fit=crop",
        step2img1: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1661&auto=format&fit=crop",
        step2img2: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1674&auto=format&fit=crop",
        step3img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1740&auto=format&fit=crop",
        step4img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1742&auto=format&fit=crop",
    };

    const steps = [
        {
            id: "1",
            name: "Project 1",
            title: "Football Live Streaming Platform",
            description: "Built an ad-free live football streaming platform using SportSRC API with Next.js and Tailwind CSS. Features real-time match updates, score tracking, and responsive design.",
        },
        {
            id: "2",
            name: "Project 2",
            title: "Contentful News Bot",
            description: "Automated news aggregation system targeting Myanmar diaspora in Singapore. Integrates with Contentful CMS, Telegram API, and RSS feeds for seamless content delivery.",
        },
        {
            id: "3",
            name: "Project 3",
            title: "Portfolio Website",
            description: "Modern, responsive portfolio showcasing technical projects. Built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations and dark mode support.",
        },
        {
            id: "4",
            name: "Project 4",
            title: "AI-Powered Applications",
            description: "Leveraging modern AI tools and APIs to build intelligent applications. Focus on user-friendly interfaces and seamless integration with cutting-edge technology.",
        },
    ];

    return (
        <section id="projects" className="w-full font-sans py-20">
            <div className="max-w-6xl mx-auto px-4 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 text-center">
                    Featured Work
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-center mt-4 max-w-2xl mx-auto">
                    Explore my latest projects showcasing full-stack development, API integration, and modern web technologies.
                </p>
            </div>
            <FeatureCarousel
                image={images}
                steps={steps}
                interval={6000}
            />
        </section>
    );
}