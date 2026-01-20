"use client";

import { motion } from "framer-motion";
import {
    Check, ArrowRight, Clock, Calendar,
    Shield, HelpCircle
} from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

const pricingTiers = [
    {
        name: "Landing Page",
        description: "Perfect for startups and small businesses",
        pages: "5-10 pages",
        price: "$499",
        timeline: "2-3 weeks",
        features: [
            "Responsive design",
            "Contact forms",
            "Basic SEO setup",
            "Analytics integration",
            "14 days support",
        ],
        popular: false,
    },
    {
        name: "Business Website",
        description: "Full business presence with blog",
        pages: "10-20 pages",
        price: "$999",
        timeline: "4-6 weeks",
        features: [
            "Everything in Landing Page",
            "Blog functionality",
            "CMS integration",
            "Advanced SEO",
            "30 days support",
        ],
        popular: true,
    },
    {
        name: "Web Application",
        description: "Custom app with advanced features",
        pages: "Custom",
        price: "$1,999",
        timeline: "8-12 weeks",
        features: [
            "Everything in Business",
            "User authentication",
            "Database integration",
            "Custom features",
            "60 days support",
        ],
        popular: false,
    },
];

const includedAlways = [
    "Mobile-responsive design",
    "Basic SEO setup",
    "Contact form",
    "Analytics integration",
    "Post-launch support",
    "Source code ownership",
];

const faqs = [
    {
        q: "Why is your pricing affordable?",
        a: "We're building our portfolio and focused on long-term relationships. We keep costs low by being efficient, not by cutting corners on quality.",
    },
    {
        q: "What's NOT included?",
        a: "Content writing, logo design, stock photos, hosting costs (usually $10-50/month), and domain registration. We can recommend partners for these.",
    },
    {
        q: "What if I'm not satisfied?",
        a: "You see designs before we code. If you don't like the design, we revise until you're happy. We want you to be satisfied with the final result.",
    },
    {
        q: "How do payments work?",
        a: "50% upfront to start, 50% on launch. For larger projects, we can discuss milestone-based payments.",
    },
];

export default function PricingPage() {
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
                        <Shield className="w-4 h-4 mr-2" />
                        Simple, Transparent Pricing
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
                    >
                        No Hidden Fees.{" "}
                        <span className="underline decoration-4 underline-offset-8">Ever.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-muted leading-relaxed"
                    >
                        The quote we give is what you pay.
                        Clear breakdown included with every quote.
                    </motion.p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-24 px-8 sm:px-24 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingTiers.map((tier, index) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative p-8 rounded-3xl border ${tier.popular
                                    ? 'bg-foreground text-background border-foreground'
                                    : 'bg-white border-border'
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-background text-foreground px-4 py-1 rounded-full text-xs font-bold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-background' : 'text-foreground'}`}>
                                        {tier.name}
                                    </h3>
                                    <p className={`text-sm ${tier.popular ? 'text-background/70' : 'text-muted'}`}>
                                        {tier.description}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <p className={`text-sm ${tier.popular ? 'text-background/70' : 'text-muted'}`}>Starting at</p>
                                    <p className={`text-5xl font-bold ${tier.popular ? 'text-background' : 'text-foreground'}`}>
                                        {tier.price}
                                    </p>
                                </div>

                                <div className={`flex items-center gap-4 mb-6 text-sm ${tier.popular ? 'text-background/70' : 'text-muted'}`}>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{tier.timeline}</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.popular ? 'text-background' : 'text-foreground'}`} />
                                            <span className={`text-sm ${tier.popular ? 'text-background/90' : 'text-foreground'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="https://cal.com/trivveen/intro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:scale-105 ${tier.popular
                                        ? 'bg-background text-foreground'
                                        : 'bg-foreground text-background'
                                        }`}
                                >
                                    <Calendar className="w-4 h-4" />
                                    Book a Call
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 px-8 sm:px-24 bg-secondary/30">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-white border border-border"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Shield className="w-6 h-6 text-foreground" />
                            <h3 className="text-xl font-bold text-foreground">Always Included</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {includedAlways.map((item, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-foreground mt-0.5" />
                                    <span className="text-sm text-muted">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 px-8 sm:px-24 bg-background">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <HelpCircle className="w-12 h-12 text-foreground mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-foreground mb-4">Common Questions</h2>
                    </motion.div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-secondary/30 border border-border"
                            >
                                <h3 className="text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                                <p className="text-muted leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
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
                        Ready to Get Started?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-background/80 mb-8"
                    >
                        Book a free intro call. We&apos;ll give you an exact quote within 48 hours.
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
