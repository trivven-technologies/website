"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";

export default function SiteFooter() {
    return (
        <footer className="bg-foreground text-background">
            <div className="max-w-6xl mx-auto px-8 sm:px-24 py-16">
                {/* Main Footer */}
                <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-12">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-background">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-bold text-xl uppercase tracking-wider">Trivveen</span>
                        </Link>
                        <p className="text-background/70 leading-relaxed text-sm">
                            Digital solutions for startups and small businesses.
                            Web apps, AI integrations, and MVP development.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-16">
                        <div>
                            <h3 className="font-semibold text-xs uppercase tracking-widest mb-4 text-background/50">Pages</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/services" className="text-background/80 hover:text-background transition-colors text-sm">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pricing" className="text-background/80 hover:text-background transition-colors text-sm">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-background/80 hover:text-background transition-colors text-sm">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xs uppercase tracking-widest mb-4 text-background/50">Connect</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="mailto:hello@trivveen.com" className="text-background/80 hover:text-background transition-colors text-sm">
                                        Email
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/trivveen" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors text-sm">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/company/trivveen" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors text-sm">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div>
                        <a
                            href="https://cal.com/trivveen/intro"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-semibold hover:scale-105 transition-all"
                        >
                            <Calendar className="w-4 h-4" />
                            Book a Call
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-background/50">
                        © {new Date().getFullYear()} Trivveen. All rights reserved.
                    </p>
                    <p className="text-xs text-background/50">
                        Made with care in India 🇮🇳
                    </p>
                </div>
            </div>
        </footer>
    );
}
