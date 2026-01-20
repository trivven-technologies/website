"use client";

import { motion } from "framer-motion";
import { 
    Mail, Phone, MapPin, Clock, Send, MessageSquare, 
    Users, Zap, Globe, CheckCircle,
    Linkedin, Twitter, Instagram, Github
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
    {
        icon: Mail,
        title: "Email Us",
        details: ["hello@trivven.com", "support@trivven.com"],
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Phone,
        title: "Call Us",
        details: ["+1 (555) 123-4567", "+91 98765 43210"],
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: MapPin,
        title: "Visit Us",
        details: ["123 Tech Street, Silicon Valley, CA", "Delhi NCR, India"],
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Clock,
        title: "Business Hours",
        details: ["Mon-Fri: 9AM - 6PM PST", "24/7 Emergency Support"],
        color: "from-orange-500 to-red-500"
    }
];

const services = [
    "Web Application Development",
    "Mobile App Development", 
    "AI/ML Solutions",
    "UI/UX Design",
    "Cloud Solutions",
    "Consulting Services",
    "Custom Software",
    "Other"
];

const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/trivven", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/trivven", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/trivven", label: "Instagram" },
    { icon: Github, href: "https://github.com/trivven", label: "GitHub" }
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                budget: '',
                timeline: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <section className="relative py-32 px-6 sm:px-8 lg:px-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center rounded-full border border-violet-200 dark:border-violet-800 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950 px-6 py-3 text-sm font-semibold text-violet-700 dark:text-violet-300 mb-8"
                    >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Get In Touch
                        <Send className="w-4 h-4 ml-2" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        <span className="text-foreground">Let's Build </span>
                        <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Something Amazing
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-xl text-muted max-w-4xl mx-auto leading-relaxed"
                    >
                        Ready to transform your ideas into reality? Reach out to our team and let's discuss how we can help you achieve your goals.
                    </motion.p>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={info.title}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="p-6 rounded-3xl bg-white dark:bg-black border border-black/5 dark:border-white/5 hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${info.color} text-white shadow-lg mb-4`}>
                                <info.icon className="w-7 h-7" />
                            </div>
                            <h3 className="font-bold text-foreground text-lg mb-3">{info.title}</h3>
                            <div className="space-y-1">
                                {info.details.map((detail, detailIndex) => (
                                    <p key={detailIndex} className="text-sm text-muted">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Form & Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-foreground mb-8">Start Your Project</h3>
                        
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name and Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Company and Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                                            placeholder="Acme Corp"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                </div>

                                {/* Service and Budget */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                                            Service Interest *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service) => (
                                                <option key={service} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                                            Budget Range
                                        </label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                                        >
                                            <option value="">Select budget range</option>
                                            <option value="$10k-$25k">$10,000 - $25,000</option>
                                            <option value="$25k-$50k">$25,000 - $50,000</option>
                                            <option value="$50k-$100k">$50,000 - $100,000</option>
                                            <option value="$100k+">$100,000+</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div>
                                    <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                                        Project Timeline
                                    </label>
                                    <select
                                        id="timeline"
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                                    >
                                        <option value="">Select timeline</option>
                                        <option value="ASAP">ASAP</option>
                                        <option value="1-2 months">1-2 months</option>
                                        <option value="3-6 months">3-6 months</option>
                                        <option value="6+ months">6+ months</option>
                                        <option value="flexible">Flexible</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                        Project Details *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 resize-none"
                                        placeholder="Tell us about your project, goals, and requirements..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold shadow-xl hover:shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center p-12 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                            >
                                <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Why Choose Us */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-foreground mb-6">Why Choose Trivven?</h3>
                            <p className="text-lg text-muted leading-relaxed mb-8">
                                We're not just developers – we're your strategic partners in digital transformation. 
                                Here's what makes us different:
                            </p>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: Zap,
                                    title: "Lightning Fast Delivery",
                                    description: "Average project delivery time 30% faster than industry standards"
                                },
                                {
                                    icon: Users,
                                    title: "Expert Team",
                                    description: "50+ developers, designers, and AI specialists with 10+ years experience"
                                },
                                {
                                    icon: Globe,
                                    title: "Global Experience",
                                    description: "Successfully delivered 200+ projects across 12+ countries"
                                },
                                {
                                    icon: CheckCircle,
                                    title: "Quality Guaranteed",
                                    description: "98% client satisfaction rate with 6-month warranty on all projects"
                                }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4 p-4 rounded-xl bg-white dark:bg-black border border-black/5 dark:border-white/5"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 text-white flex items-center justify-center">
                                        <benefit.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                                        <p className="text-sm text-muted">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 rounded-xl bg-white dark:bg-black border border-black/10 dark:border-white/10 hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-950 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}