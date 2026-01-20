"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
            <div className="flex items-stretch h-14 md:h-16 text-sm font-medium tracking-wide">
                {/* Logo Section */}
                <Link
                    href="/"
                    className="flex items-center px-6 md:px-8 border-r border-border hover:bg-secondary transition-colors"
                >
                    <div className="flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-bold text-lg uppercase tracking-wider text-foreground">Trivveen</span>
                    </div>
                </Link>

                {/* Hatched Pattern Section */}
                <div
                    className="hidden md:flex flex-1 border-r border-border"
                    style={{
                        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(0,0,0,0.03) 6px, rgba(0,0,0,0.03) 12px)"
                    }}
                />

                {/* Mobile Spacer */}
                <div className="flex-1 md:hidden" />

                {/* Navigation Items - Desktop */}
                <div className="hidden md:flex items-stretch">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center px-6 md:px-8 border-r border-border text-muted hover:text-foreground hover:bg-secondary transition-all text-xs tracking-widest font-semibold uppercase"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* CTA - Desktop */}
                <a
                    href="https://cal.com/trivveen/intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center px-8 bg-foreground text-background hover:bg-neutral-800 transition-colors uppercase font-semibold text-xs tracking-widest"
                >
                    Book Call
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden flex items-center justify-center px-6 border-l border-border hover:bg-secondary transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-background border-t border-border overflow-hidden"
                    >
                        <nav className="flex flex-col">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center px-6 py-4 text-muted hover:text-foreground hover:bg-secondary transition-all text-sm tracking-widest font-semibold border-b border-border/50"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navItems.length * 0.05 }}
                                className="p-4"
                            >
                                <a
                                    href="https://cal.com/trivveen/intro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center w-full py-4 bg-foreground text-background hover:bg-neutral-800 transition-colors uppercase font-semibold text-sm tracking-widest rounded-lg"
                                >
                                    Book Call
                                </a>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
