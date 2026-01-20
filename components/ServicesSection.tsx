"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Brain, ArrowRight, Calendar } from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Web Apps",
        description: "Custom web applications built with React and Next.js. From landing pages to full platforms.",
    },
    {
        icon: Brain,
        title: "AI Integration",
        description: "Add AI capabilities to your product. Chatbots, automation, and custom AI solutions.",
    },
    {
        icon: Zap,
        title: "MVP Development",
        description: "Launch your idea quickly. We build functional MVPs that you can test with real users.",
    },
];

export default function ServicesSection() {
    return (
        <section className="relative py-24 px-8 sm:px-24 bg-background overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground mb-6"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-foreground mr-2"></span>
                        What We Build
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4"
                    >
                        Digital Solutions That Ship
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted max-w-2xl mx-auto"
                    >
                        We help founders and small businesses build their digital products.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl bg-white border border-border hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="w-6 h-6 text-background" />
                            </div>

                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                {service.title}
                            </h3>
                            <p className="text-muted leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href="https://cal.com/trivveen/intro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <Calendar className="w-5 h-5" />
                        Discuss Your Project
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
