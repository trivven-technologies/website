"use client";

import { motion } from "framer-motion";
import {
    Code2, Database, Cloud, Palette, Smartphone,
    Globe, Shield, Zap, Brain, Terminal, Layers,
    Braces, Server, Package, Code
} from "lucide-react";

const techCategories = [
    {
        title: "Frontend Development",
        icon: Code2,
        technologies: [
            { name: "React/Next.js", description: "Modern, performant web applications" },
            { name: "TypeScript", description: "Type-safe development" },
            { name: "Tailwind CSS", description: "Utility-first styling" },
            { name: "Vue.js", description: "Progressive frameworks" },
            { name: "Angular", description: "Enterprise applications" }
        ]
    },
    {
        title: "Backend & API",
        icon: Database,
        technologies: [
            { name: "Node.js", description: "Scalable server applications" },
            { name: "Python", description: "AI/ML and data processing" },
            { name: "Java", description: "Enterprise solutions" },
            { name: "PostgreSQL", description: "Advanced database management" },
            { name: "MongoDB", description: "NoSQL database solutions" }
        ]
    },
    {
        title: "AI & Machine Learning",
        icon: Brain,
        technologies: [
            { name: "TensorFlow", description: "Deep learning frameworks" },
            { name: "PyTorch", description: "Research and production" },
            { name: "OpenAI API", description: "GPT integration" },
            { name: "Hugging Face", description: "NLP models" },
            { name: "Custom AI Models", description: "Bespoke solutions" }
        ]
    },
    {
        title: "Mobile Development",
        icon: Smartphone,
        technologies: [
            { name: "React Native", description: "Cross-platform development" },
            { name: "Swift", description: "Native iOS apps" },
            { name: "Kotlin", description: "Native Android apps" },
            { name: "Flutter", description: "Google's UI toolkit" },
            { name: "Progressive Web Apps", description: "Mobile web solutions" }
        ]
    },
    {
        title: "Cloud & DevOps",
        icon: Cloud,
        technologies: [
            { name: "AWS", description: "Cloud infrastructure" },
            { name: "Azure", description: "Microsoft cloud platform" },
            { name: "Docker", description: "Containerization" },
            { name: "Kubernetes", description: "Container orchestration" },
            { name: "CI/CD Pipelines", description: "Automated deployment" }
        ]
    },
    {
        title: "UI/UX Design",
        icon: Palette,
        technologies: [
            { name: "Figma", description: "Collaborative design" },
            { name: "Adobe Creative Suite", description: "Professional design tools" },
            { name: "Framer", description: "Interactive prototypes" },
            { name: "Design Systems", description: "Scalable design solutions" },
            { name: "User Research", description: "Data-driven design" }
        ]
    }
];

const featuredTechnologies = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Code2 },
    { name: "Node.js", icon: Server },
    { name: "Python", icon: Braces },
    { name: "TypeScript", icon: Terminal },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Layers },
    { name: "Kubernetes", icon: Brain }, // Replaced Cpu with Brain as Cpu alias was tricky, or just use Brain/icon
    { name: "TensorFlow", icon: Brain },
    { name: "Figma", icon: Palette },
    { name: "Swift", icon: Zap },
    { name: "Git", icon: Package }
];

export default function TechnologySection() {
    return (
        <section className="relative py-32 px-6 sm:px-8 lg:px-24 bg-background overflow-hidden">
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
                        className="inline-flex items-center rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground mb-8"
                    >
                        <Code2 className="w-4 h-4 mr-2" />
                        Technology Stack
                        <Terminal className="w-4 h-4 ml-2" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground"
                    >
                        Cutting-Edge Technologies
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12"
                    >
                        We leverage the latest and most powerful technologies to build solutions that are not just
                        innovative, but also scalable, secure, and future-proof.
                    </motion.p>

                    {/* Featured Technologies */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-4 mb-20"
                    >
                        {featuredTechnologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md hover:border-black transition-all duration-300"
                            >
                                <tech.icon className="w-6 h-6 text-foreground" />
                                <span className="font-semibold text-foreground">{tech.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Technology Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {techCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group relative"
                        >
                            <div className="h-full p-8 rounded-3xl bg-secondary/30 border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300">
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 rounded-2xl bg-foreground text-background shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <category.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Technologies List */}
                                <div className="space-y-4">
                                    {category.technologies.map((tech, techIndex) => (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 + categoryIndex * 0.1 + techIndex * 0.05 }}
                                            viewport={{ once: true }}
                                            className="p-4 rounded-xl bg-background border border-border hover:border-foreground/20 transition-all duration-300"
                                        >
                                            <h4 className="font-bold text-foreground mb-1">
                                                {tech.name}
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                {tech.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Our Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="relative p-12 lg:p-16 rounded-4xl bg-foreground overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)"
                        }} />
                    </div>

                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl sm:text-4xl font-bold text-background mb-8">
                            Why Our Technology Choice Matters
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Zap,
                                    title: "Performance",
                                    description: "Lightning-fast applications that delight users and boost engagement"
                                },
                                {
                                    icon: Shield,
                                    title: "Security",
                                    description: "Enterprise-grade security to protect your data and users"
                                },
                                {
                                    icon: Globe,
                                    title: "Scalability",
                                    description: "Solutions that grow with your business needs"
                                }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="flex justify-center mb-4">
                                        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                                            <benefit.icon className="w-8 h-8 text-background" />
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-background mb-2">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-background/80">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}