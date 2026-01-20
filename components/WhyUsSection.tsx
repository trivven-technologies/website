"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Calendar } from "lucide-react";

const promises = [
    {
        title: "Clear communication",
        description: "Weekly updates on progress. You always know what's happening with your project.",
    },
    {
        title: "You approve before we code",
        description: "See designs first. We don't start development until you're happy with the direction.",
    },
    {
        title: "Transparent pricing",
        description: "The quote we give is what you pay. No surprise fees or hidden costs.",
    },
    {
        title: "Clean, documented code",
        description: "Your codebase will be organized and documented. Easy to maintain and update.",
    },
];

export default function WhyUsSection() {
    return (
        <section className="relative py-24 px-8 sm:px-24 bg-secondary/30 overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-foreground mb-6"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-foreground mr-2"></span>
                        How We Work
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4"
                    >
                        Honest Work. No Surprises.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted max-w-2xl mx-auto"
                    >
                        We believe in doing what we say we&apos;ll do.
                    </motion.p>
                </div>

                {/* Promises Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {promises.map((promise, index) => (
                        <motion.div
                            key={promise.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white border border-border hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                                    <Check className="w-4 h-4 text-background" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">
                                        {promise.title}
                                    </h3>
                                    <p className="text-muted leading-relaxed">
                                        {promise.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href="https://cal.com/trivveen/intro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-foreground font-medium hover:underline"
                    >
                        <Calendar className="w-4 h-4" />
                        Let&apos;s discuss your project
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
