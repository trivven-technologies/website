"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function FoundingClientCTA() {
    return (
        <section className="relative py-24 px-8 sm:px-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-foreground" />
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)"
                }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-bold text-background mb-6"
                >
                    Ready to Start?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-xl text-background/80 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Free intro call. No obligation. We&apos;ll give you an honest assessment
                    of your project and a clear quote within 48 hours.
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
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-base font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        <Calendar className="w-5 h-5" />
                        Book Intro Call
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
