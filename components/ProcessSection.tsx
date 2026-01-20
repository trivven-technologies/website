"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, FileCode2, Rocket, Paintbrush } from "lucide-react";
import Link from "next/link";

const steps = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Discovery Call",
        duration: "30 min, free",
        description: "We discuss your project, understand your goals, and give you an honest assessment.",
    },
    {
        number: "02",
        icon: Paintbrush,
        title: "Design & Approve",
        duration: "1-2 weeks",
        description: "You see designs before we write any code. Revisions until you're happy.",
    },
    {
        number: "03",
        icon: FileCode2,
        title: "Development",
        duration: "2-6 weeks",
        description: "Weekly updates. You can test as we build. No surprises.",
    },
    {
        number: "04",
        icon: Rocket,
        title: "Launch & Support",
        duration: "Ongoing",
        description: "We handle deployment and provide support after launch.",
    },
];

export default function ProcessSection() {
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
                        How We Work
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4"
                    >
                        From Idea to Launch
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-muted max-w-2xl mx-auto"
                    >
                        A clear process with no hidden steps. You know what to expect at every stage.
                    </motion.p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative flex gap-8"
                            >
                                {/* Step Number */}
                                <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-2xl bg-foreground items-center justify-center text-background font-bold text-lg shadow-lg z-10">
                                    {step.number}
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 p-8 rounded-2xl bg-white border border-border hover:border-foreground/20 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="md:hidden flex-shrink-0 w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                                            <step.icon className="w-6 h-6 text-background" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-semibold text-foreground">
                                                    {step.title}
                                                </h3>
                                                <span className="text-xs font-medium text-muted bg-secondary px-2 py-1 rounded-full">
                                                    {step.duration}
                                                </span>
                                            </div>
                                            <p className="text-muted leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                        <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-xl bg-secondary items-center justify-center">
                                            <step.icon className="w-6 h-6 text-foreground" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Start with a Free Call
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
