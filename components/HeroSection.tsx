"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";

export default function HeroSection() {
    return (
        <InfiniteGrid>
            <div className="flex flex-col items-center justify-center text-center pt-20 pb-16 px-6 sm:px-24">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground backdrop-blur-sm mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span>For Startups & Small Businesses</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 max-w-4xl"
                >
                    Build your{" "}
                    <span className="underline decoration-4 decoration-foreground underline-offset-8">
                        digital presence
                    </span>
                </motion.h1>

                {/* Subhead */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed mb-10"
                >
                    Web apps, AI integrations, and digital solutions for founders who want to move fast.
                    Fair pricing. Clear communication. No corporate BS.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                >
                    <a
                        href="https://cal.com/trivveen/intro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <Calendar className="w-5 h-5" />
                        Book Free Call
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <Link
                        href="/pricing"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-border text-foreground px-8 py-4 text-base font-semibold shadow-sm hover:bg-secondary transition-all duration-300"
                    >
                        View Pricing
                    </Link>
                </motion.div>

                {/* Schedule Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full max-w-3xl"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <a
                            href="https://cal.com/trivveen/intro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-2xl bg-white border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300 text-left group"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-xs text-muted uppercase tracking-wider">Free</span>
                            </div>
                            <h3 className="font-bold text-foreground mb-1 group-hover:underline">Intro Chat</h3>
                            <p className="text-sm text-muted">15 min | Remote</p>
                        </a>
                        <a
                            href="https://cal.com/trivveen/discovery"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-2xl bg-white border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300 text-left group"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-xs text-muted uppercase tracking-wider">Free</span>
                            </div>
                            <h3 className="font-bold text-foreground mb-1 group-hover:underline">Discovery Call</h3>
                            <p className="text-sm text-muted">30 min | Remote</p>
                        </a>
                        <a
                            href="https://cal.com/trivveen/kickoff"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-2xl bg-white border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300 text-left group"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span className="text-xs text-muted uppercase tracking-wider">Clients</span>
                            </div>
                            <h3 className="font-bold text-foreground mb-1 group-hover:underline">Project Kickoff</h3>
                            <p className="text-sm text-muted">45 min | Remote</p>
                        </a>
                    </div>
                </motion.div>
            </div>
        </InfiniteGrid>
    );
}
