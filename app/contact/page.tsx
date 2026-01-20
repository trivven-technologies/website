"use client";

import { motion } from "framer-motion";
import {
    Mail, Phone, MessageSquare, ArrowRight,
    Calendar, Clock, Check, X
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SiteFooter from "@/components/SiteFooter";

const goodFit = [
    "You care more about performance than fancy animations",
    "You're willing to collaborate (we need your input)",
    "You have realistic timeline expectations",
    "You value quality over rock-bottom prices",
];

const notGoodFit = [
    "You need it done in 2 weeks",
    "You want a WordPress site",
    "You need a team of 10 people",
    "You're looking for the absolute cheapest option",
];

const processSteps = [
    {
        step: "1",
        title: "Quick Form",
        description: "Tell us about your project (5 minutes)",
    },
    {
        step: "2",
        title: "Discovery Call",
        description: "30-minute conversation about your goals (free)",
    },
    {
        step: "3",
        title: "Detailed Proposal",
        description: "Exact scope, timeline, and pricing (within 48 hours)",
    },
    {
        step: "4",
        title: "Design Phase",
        description: "We create mockups for approval before any coding",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        alert("Thanks! We'll get back to you within 24 hours.");
    };

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
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Let&apos;s Talk
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
                    >
                        Ready to Build{" "}
                        <span className="underline decoration-4 underline-offset-8">Something Great?</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-muted leading-relaxed"
                    >
                        Not sure if we&apos;re the right fit? Neither are we—let&apos;s find out.
                        Schedule a free 30-minute call. No sales pitch, no pressure.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-8 sm:px-24 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-foreground mb-6">Tell Us About Your Project</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Company/Business (optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        What do you need? *
                                    </label>
                                    <select
                                        required
                                        value={formData.projectType}
                                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    >
                                        <option value="">Select a project type</option>
                                        <option value="landing">Landing Page (5-10 pages)</option>
                                        <option value="business">Business Website (10-20 pages)</option>
                                        <option value="pwa">Progressive Web App</option>
                                        <option value="optimization">Performance Optimization</option>
                                        <option value="other">Something Else</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Budget Range
                                        </label>
                                        <select
                                            value={formData.budget}
                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        >
                                            <option value="">Select budget</option>
                                            <option value="20-35k">₹20,000 - ₹35,000</option>
                                            <option value="35-65k">₹35,000 - ₹65,000</option>
                                            <option value="65-100k">₹65,000 - ₹1,00,000</option>
                                            <option value="100k+">₹1,00,000+</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Timeline
                                        </label>
                                        <select
                                            value={formData.timeline}
                                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        >
                                            <option value="">Select timeline</option>
                                            <option value="asap">As soon as possible</option>
                                            <option value="1-2months">1-2 months</option>
                                            <option value="2-3months">2-3 months</option>
                                            <option value="flexible">Flexible</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Tell us more about your project *
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                                        placeholder="What are you trying to accomplish? Who's your target audience? Any specific features or requirements?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold hover:scale-105 transition-all"
                                >
                                    Send Message
                                    <ArrowRight className="w-5 h-5" />
                                </button>

                                <p className="text-xs text-muted text-center">
                                    We usually respond within 4 hours during business days.
                                </p>
                            </form>
                        </motion.div>

                        {/* Right - Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Direct Contact */}
                            <div className="p-8 rounded-2xl bg-secondary/30 border border-border">
                                <h3 className="text-lg font-bold text-foreground mb-6">Or Reach Out Directly</h3>
                                <div className="space-y-4">
                                    <a
                                        href="mailto:hello@trivveen.com"
                                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                                    >
                                        <Mail className="w-5 h-5" />
                                        <span>hello@trivveen.com</span>
                                    </a>
                                    <a
                                        href="https://wa.me/919876543210"
                                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                                    >
                                        <Phone className="w-5 h-5" />
                                        <span>+91 98765 43210 (WhatsApp)</span>
                                    </a>
                                </div>
                            </div>

                            {/* Good Fit */}
                            <div className="p-8 rounded-2xl bg-secondary/30 border border-border">
                                <h3 className="text-lg font-bold text-foreground mb-4">This is probably a good fit if:</h3>
                                <ul className="space-y-2">
                                    {goodFit.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-primary mt-0.5" />
                                            <span className="text-sm text-muted">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Not Good Fit */}
                            <div className="p-8 rounded-2xl bg-secondary/30 border border-border">
                                <h3 className="text-lg font-bold text-foreground mb-4">This probably isn&apos;t a good fit if:</h3>
                                <ul className="space-y-2">
                                    {notGoodFit.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <X className="w-4 h-4 text-muted mt-0.5" />
                                            <span className="text-sm text-muted">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Process */}
                            <div className="p-8 rounded-2xl bg-primary text-primary-foreground">
                                <h3 className="text-lg font-bold mb-6">What Happens Next</h3>
                                <div className="space-y-4">
                                    {processSteps.map((step, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                                                {step.step}
                                            </div>
                                            <div>
                                                <p className="font-semibold">{step.title}</p>
                                                <p className="text-sm text-primary-foreground/80">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Current Status */}
                            <div className="p-6 rounded-2xl bg-secondary border border-border text-center">
                                <p className="text-sm text-muted mb-2">Current Availability</p>
                                <p className="text-foreground font-semibold">
                                    Taking on 2 more founding clients this quarter
                                </p>
                                <p className="text-xs text-muted mt-2">
                                    After that, prices go up and timeline extends.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
}