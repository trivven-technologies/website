"use client";

import { motion } from "framer-motion";
import {
    Code2, Brain, Zap,
    ArrowRight, Check, Clock, Calendar
} from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

const coreServices = [
    {
        icon: Zap,
        title: "MVP Development",
        tagline: "Launch fast",
        price: "From $499",
        description: "Turn your idea into a working product. We build MVPs that you can test with real users and iterate on.",
        features: [
            "Functional prototype",
            "User authentication",
            "Core features",
            "Deployment",
        ],
        timeline: "3-6 weeks",
    },
    {
        icon: Code2,
        title: "Web Applications",
        tagline: "Full platforms",
        price: "From $1,499",
        description: "Custom web applications for your business. Dashboards, SaaS products, internal tools.",
        features: [
            "Custom functionality",
            "Database integration",
            "Admin dashboard",
            "API development",
        ],
        timeline: "6-12 weeks",
    },
    {
        icon: Brain,
        title: "AI Integration",
        tagline: "Smart solutions",
        price: "From $799",
        description: "Add AI capabilities to your product. Chatbots, automation, content generation, and custom AI features.",
        features: [
            "ChatGPT/LLM integration",
            "Custom chatbots",
            "Automation workflows",
            "AI-powered features",
        ],
        timeline: "2-4 weeks",
    },
];

const additionalServices = [
    { name: "Landing Page", price: "$399" },
    { name: "Website Redesign", price: "$299" },
    { name: "SEO Setup", price: "+$199" },
    { name: "Monthly Maintenance", price: "$79/month" },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="py-24 px-8 sm:px-24 bg-secondary/30">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground mb-8"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-foreground mr-2 animate-pulse"></span>
                        What We Build
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
                    >
                        Digital Solutions for{" "}
                        <span className="underline decoration-4 underline-offset-8">Founders</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-muted leading-relaxed"
                    >
                        We help startups and small businesses build their digital products.
                    </motion.p>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-24 px-8 sm:px-24 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-8">
                        {coreServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-3xl bg-white border border-border"
                            >
                                {/* Left - Info */}
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                                            <service.icon className="w-6 h-6 text-background" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                                            <p className="text-sm text-muted">{service.tagline}</p>
                                        </div>
                                    </div>

                                    <p className="text-muted leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <Check className="w-4 h-4 text-foreground" />
                                                <span className="text-sm text-foreground">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-muted">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{service.timeline}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right - Pricing */}
                                <div className="flex flex-col justify-center p-6 rounded-2xl bg-secondary/30 border border-border">
                                    <p className="text-sm text-muted mb-2">Starting at</p>
                                    <p className="text-4xl font-bold text-foreground mb-6">{service.price}</p>

                                    <a
                                        href="https://cal.com/trivveen/intro"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:scale-105 transition-all"
                                    >
                                        <Calendar className="w-4 h-4" />
                                        Book a Call
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add-ons */}
            <section className="py-24 px-8 sm:px-24 bg-secondary/30">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">Also Available</h2>
                        <p className="text-muted">Smaller projects and add-ons</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-white border border-border"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {additionalServices.map((service, index) => (
                                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-secondary/30">
                                    <span className="text-foreground">{service.name}</span>
                                    <span className="font-semibold text-foreground">{service.price}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-8 sm:px-24 bg-foreground">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-background mb-6"
                    >
                        Let&apos;s Build Something Together
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-background/80 mb-8"
                    >
                        Book a free intro call. We&apos;ll discuss your project and give you a clear quote.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="https://cal.com/trivveen/intro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-base font-bold hover:scale-105 transition-all"
                        >
                            <Calendar className="w-5 h-5" />
                            Book Intro Call
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}
