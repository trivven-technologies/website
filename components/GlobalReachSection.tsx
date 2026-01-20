"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const benefits = [
    {
        title: "Modern Tech Stack",
        items: ["React & Next.js", "Clean, readable code", "Easy to maintain"],
    },
    {
        title: "Transparent Process",
        items: ["Weekly updates", "Clear pricing", "No surprises"],
    },
    {
        title: "Quality Focused",
        items: ["Tested before launch", "Responsive design", "SEO basics included"],
    },
];

export default function GlobalReachSection() {
    return (
        <section className="py-20 md:py-32 bg-white w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="font-bold text-3xl md:text-4xl text-foreground mb-4"
                    >
                        Why Work With Us
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        We focus on delivering quality work with clear communication.
                    </motion.p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-secondary/30 border border-border"
                        >
                            <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                            <ul className="space-y-3">
                                {benefit.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-background" />
                                        </div>
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center"
                >
                    <Link
                        href="/pricing"
                        className="inline-flex items-center gap-2 text-foreground font-medium hover:underline"
                    >
                        See our pricing
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
