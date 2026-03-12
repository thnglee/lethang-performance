'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const skills = [
    {
        id: '01',
        title: 'Facebook Ads & Paid Performance',
        description: 'Hands-on experience with Meta Ads Manager: campaign setup, audience targeting, budget management, and optimization toward ROAS, CPA, and conversion KPIs. Comfortable running A/B tests to find winning creatives and scaling what works.',
        href: '/#paid-ads'
    },
    {
        id: '02',
        title: 'Dropshipping & E-commerce Operations',
        description: 'Direct experience operating Shopify stores in dropshipping and POD models — from product research and supplier coordination to storefront optimization and AOV improvement through strategic app integrations.',
        href: '/#ecommerce'
    },
    {
        id: '03',
        title: 'Data Analysis & Performance Reporting',
        description: 'Building performance dashboards that combine ad spend, sales, and margin data to surface actionable insights. Analytical mindset applied to interpreting ROAS, CAC, LTV, and CTR trends to guide budget allocation decisions.',
        href: '/#analytics'
    }
];

export function Skills() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-12 md:mb-16">
                <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-4">
                    My <span className="font-serif italic text-gold-accent">Skills</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#0A0A0A] border border-white/5 p-8 md:p-12 hover:border-gold-accent/30 transition-colors duration-500"
                    >
                        <div className="flex flex-col h-full justify-between gap-12">
                            <div>
                                <span className="text-xs font-mono text-gray-600 block mb-6 group-hover:text-gold-accent transition-colors">
                                    {skill.id}
                                </span>
                                <h3 className="text-xl md:text-2xl font-light tracking-wide text-white mb-4">
                                    {skill.title}
                                </h3>
                                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>


                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
