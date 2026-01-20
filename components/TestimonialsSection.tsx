"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CEO, TechStart Inc.",
        company: "E-Commerce Platform",
        avatar: "SC",
        rating: 5,
        content: "Trivven transformed our online business completely. Their AI-powered recommendation system increased our conversion rates by 300% and reduced cart abandonment by 45%. The team's expertise in both development and AI is unmatched.",
        image: "/api/placeholder/80/80",
        gradient: "from-blue-400 to-cyan-500"
    },
    {
        name: "Michael Rodriguez",
        role: "CTO, HealthPlus",
        company: "Mobile Health App",
        avatar: "MR",
        rating: 5,
        content: "We partnered with Trivven to develop our AI-driven health diagnosis app. The result exceeded our expectations - 99% accuracy rate and seamless user experience. Their development process is transparent and collaborative.",
        image: "/api/placeholder/80/80",
        gradient: "from-purple-400 to-pink-500"
    },
    {
        name: "Emily Watson",
        role: "Product Manager, FinTech Corp",
        company: "Financial Dashboard",
        avatar: "EW",
        rating: 5,
        content: "The financial dashboard Trivven built for us is revolutionary. Real-time data visualization, predictive analytics, and an intuitive interface that our clients love. They delivered ahead of schedule and within budget.",
        image: "/api/placeholder/80/80",
        gradient: "from-green-400 to-emerald-500"
    },
    {
        name: "David Kim",
        role: "Founder, EduTech Solutions",
        company: "Learning Platform",
        avatar: "DK",
        rating: 5,
        content: "Trivven's AI-powered learning platform has transformed how we deliver education. Personalized learning paths for each student and real-time progress tracking. Student engagement is up 250% since launch.",
        image: "/api/placeholder/80/80",
        gradient: "from-orange-400 to-red-500"
    },
    {
        name: "Lisa Anderson",
        role: "VP of Operations, SupplyChain Pro",
        company: "Supply Chain System",
        avatar: "LA",
        rating: 5,
        content: "The supply chain optimization system Trivven developed saved us millions in operational costs. AI-driven forecasting and real-time tracking made our entire operation 40% more efficient.",
        image: "/api/placeholder/80/80",
        gradient: "from-indigo-400 to-blue-500"
    }
];

const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "200+", label: "Projects Completed" },
    { value: "5x", label: "Average ROI" },
    { value: "24/7", label: "Support Available" }
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className="relative py-32 px-6 sm:px-8 lg:px-24 bg-gradient-to-b from-secondary/20 to-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        Client Success Stories
                        <Star className="w-4 h-4 ml-2 fill-current" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        <span className="text-foreground">What Our </span>
                        <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-xl text-muted max-w-4xl mx-auto leading-relaxed"
                    >
                        Don&apos;t just take our word for it. Here&apos;s what our amazing clients have to say about working with us.
                    </motion.p>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-6 rounded-2xl bg-white dark:bg-black border border-black/5 dark:border-white/5"
                        >
                            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </p>
                            <p className="text-sm text-muted">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="relative mb-20">
                    <div className="max-w-4xl mx-auto">
                        {/* Testimonial Card */}
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative p-8 md:p-12 rounded-3xl bg-white dark:bg-black border border-black/5 dark:border-white/5 shadow-2xl"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-violet-200 dark:text-violet-800" />

                            {/* Content */}
                            <div className="text-center mb-8">
                                <motion.p
                                    key={`content-${currentIndex}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-xl md:text-2xl leading-relaxed text-muted mb-8"
                                >
                                    {testimonials[currentIndex].content}
                                </motion.p>

                                {/* Rating */}
                                <div className="flex justify-center gap-1 mb-6">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Author Info */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${testimonials[currentIndex].gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                                        {testimonials[currentIndex].avatar}
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h4 className="text-xl font-bold text-foreground">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-muted">
                                            {testimonials[currentIndex].role}
                                        </p>
                                        <p className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                                            {testimonials[currentIndex].company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Navigation */}
                        <div className="flex justify-between items-center mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="p-3 rounded-full bg-white dark:bg-black border border-black/10 dark:border-white/10 hover:bg-violet-50 dark:hover:bg-violet-950 hover:border-violet-500 transition-all duration-300"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToTestimonial(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentIndex
                                                ? 'w-8 bg-gradient-to-r from-violet-600 to-purple-600'
                                                : 'bg-gray-300 dark:bg-gray-600'
                                        }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="p-3 rounded-full bg-white dark:bg-black border border-black/10 dark:border-white/10 hover:bg-violet-50 dark:hover:bg-violet-950 hover:border-violet-500 transition-all duration-300"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Additional Testimonials Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-900 border border-black/5 dark:border-white/5"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                                    <p className="text-xs text-muted">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted italic">
                                {testimonial.content.substring(0, 100)}...
                            </p>
                            <div className="flex gap-1 mt-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}