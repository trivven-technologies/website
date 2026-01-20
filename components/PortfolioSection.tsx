"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Smartphone, Globe, Brain, Palette, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
    {
        title: "E-Commerce Revolution",
        category: "Web Development",
        description: "AI-powered e-commerce platform with personalized recommendations and advanced analytics.",
        image: "/api/placeholder/600/400",
        tags: ["Next.js", "AI/ML", "PostgreSQL", "AWS"],
        icon: Globe,
        gradient: "from-blue-500 to-cyan-500",
        link: "/work/ecommerce-revolution"
    },
    {
        title: "HealthAI Assistant",
        category: "Mobile App",
        description: "Revolutionary healthcare app with AI diagnosis and personalized treatment recommendations.",
        image: "/api/placeholder/600/400",
        tags: ["React Native", "TensorFlow", "Firebase", "HIPAA"],
        icon: Smartphone,
        gradient: "from-purple-500 to-pink-500",
        link: "/work/healthai-assistant"
    },
    {
        title: "FinTech Dashboard",
        category: "UI/UX Design",
        description: "Modern financial dashboard with real-time data visualization and predictive analytics.",
        image: "/api/placeholder/600/400",
        tags: ["Figma", "D3.js", "WebSocket", "React"],
        icon: Palette,
        gradient: "from-green-500 to-emerald-500",
        link: "/work/fintech-dashboard"
    },
    {
        title: "Smart Learning Platform",
        category: "AI Solution",
        description: "Adaptive learning platform powered by machine learning algorithms for personalized education.",
        image: "/api/placeholder/600/400",
        tags: ["Python", "PyTorch", "React", "MongoDB"],
        icon: Brain,
        gradient: "from-orange-500 to-red-500",
        link: "/work/smart-learning"
    },
    {
        title: "Supply Chain Optimizer",
        category: "Enterprise Solution",
        description: "End-to-end supply chain management system with AI-driven optimization and forecasting.",
        image: "/api/placeholder/600/400",
        tags: ["Node.js", "AI/ML", "Blockchain", "Azure"],
        icon: Globe,
        gradient: "from-indigo-500 to-blue-500",
        link: "/work/supply-chain"
    },
    {
        title: "Social Media Analytics",
        category: "Data Science",
        description: "Comprehensive social media analytics tool with sentiment analysis and trend prediction.",
        image: "/api/placeholder/600/400",
        tags: ["Python", "NLP", "React", "BigQuery"],
        icon: Brain,
        gradient: "from-pink-500 to-rose-500",
        link: "/work/social-analytics"
    }
];

const categories = [
    { name: "All Projects", count: 12 },
    { name: "Web Development", count: 4 },
    { name: "Mobile Apps", count: 3 },
    { name: "AI Solutions", count: 3 },
    { name: "UI/UX Design", count: 2 }
];

export default function PortfolioSection() {
    return (
        <section className="relative py-32 px-6 sm:px-8 lg:px-24 bg-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center rounded-full border border-violet-200 dark:border-violet-800 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950 px-6 py-3 text-sm font-semibold text-violet-700 dark:text-violet-300 mb-8"
                    >
                        <Play className="w-4 h-4 mr-2" />
                        Featured Projects
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        <span className="text-foreground">Our </span>
                        <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Success Stories
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-xl text-muted max-w-4xl mx-auto leading-relaxed"
                    >
                        Explore our portfolio of cutting-edge projects that showcase our expertise in web solutions, 
                        AI development, and innovative design.
                    </motion.p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                                index === 0 
                                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg' 
                                    : 'bg-white dark:bg-black border border-black/10 dark:border-white/10 text-muted hover:text-foreground hover:border-violet-500/50'
                            }`}
                        >
                            {category.name} ({category.count})
                        </motion.button>
                    ))}
                </motion.div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-black border border-black/5 dark:border-white/5 hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-2xl transition-all duration-300">
                                {/* Image Placeholder */}
                                <div className={`h-48 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <div className="text-white text-center p-6">
                                            <item.icon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                                            <h3 className="text-2xl font-bold">{item.title}</h3>
                                        </div>
                                    </div>
                                    
                                    {/* Overlay on hover */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                                    >
                                        <Link
                                            href={item.link}
                                            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-semibold hover:scale-105 transition-transform"
                                        >
                                            View Project
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-muted leading-relaxed mb-4">
                                        {item.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="p-12 rounded-3xl bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-950 dark:to-purple-950 border border-violet-200 dark:border-violet-800">
                        <h3 className="text-3xl font-bold text-foreground mb-4">
                            Have a Project in Mind?
                        </h3>
                        <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
                            Let's create something amazing together. We're ready to bring your vision to life.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}