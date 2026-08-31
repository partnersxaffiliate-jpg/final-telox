import { motion } from 'motion/react';
import { ArrowUpRight, Check, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CrosusCaseStudy() {
  return (
    <section className="relative min-h-screen bg-[#0c0a09] text-[#e7e5e4] antialiased">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-32">
        {/* Hero / Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a8a29e] mb-6">
            Case Study — E-Commerce & Brand Platform
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-white mb-8">
            Woven with intention.
          </h1>
          <p className="text-lg md:text-xl text-[#a8a29e] leading-relaxed max-w-3xl mb-10">
            A boutique e-commerce platform built for a handcrafted crochet business in Nepal.
            Designed to showcase patient handwork, connect directly with buyers, and drive steady
            sales growth that still scales today.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="https://crosusnepal.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              View Live Website
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="flex flex-wrap gap-3 text-xs font-mono uppercase tracking-widest text-[#a8a29e]">
              <span className="px-4 py-2 rounded-full border border-[#292524]">100% Handmade</span>
              <span className="px-4 py-2 rounded-full border border-[#292524]">Natural Materials</span>
              <span className="px-4 py-2 rounded-full border border-[#292524]">Made-to-Order Workflow</span>
            </div>
          </div>
        </motion.div>

        {/* The Challenge & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-8">
            The Challenge
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-[#a8a29e] leading-relaxed">
              Traditional artisans often struggle to translate the deep texture, patience, and
              high-end feel of physical handcrafted goods into a digital storefront. The goal was
              to build a serene, minimalist e-commerce experience that feels like stepping into a
              physical luxury studio rather than a crowded online marketplace.
            </p>
          </div>
        </motion.div>

        {/* Our Approach & Craftsmanship */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-8">
            Our Approach: Slow Design, Digital Precision
          </h2>
          <p className="text-lg md:text-xl text-[#a8a29e] leading-relaxed max-w-3xl mb-16">
            We engineered a custom, frictionless e-commerce layout featuring high-resolution product
            displays, subtle earth-toned palettes, and an intuitive checkout flow tailored for local
            and regional ordering.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-[#292524] bg-[#0c0a09] overflow-hidden">
              <div className="aspect-[4/3] bg-[#1c1917] flex items-center justify-center">
                <span className="text-xs font-mono text-[#78716c] uppercase tracking-widest">Hero Layout</span>
              </div>
            </div>
            <div className="rounded-2xl border border-[#292524] bg-[#0c0a09] overflow-hidden">
              <div className="aspect-[4/3] bg-[#1c1917] flex items-center justify-center">
                <span className="text-xs font-mono text-[#78716c] uppercase tracking-widest">Product Catalog</span>
              </div>
            </div>
            <div className="rounded-2xl border border-[#292524] bg-[#0c0a09] overflow-hidden">
              <div className="aspect-[4/3] bg-[#1c1917] flex items-center justify-center">
                <span className="text-xs font-mono text-[#78716c] uppercase tracking-widest">Artisan Details</span>
              </div>
            </div>
            <div className="rounded-2xl border border-[#292524] bg-[#0c0a09] overflow-hidden">
              <div className="aspect-[4/3] bg-[#1c1917] flex items-center justify-center">
                <span className="text-xs font-mono text-[#78716c] uppercase tracking-widest">Checkout Flow</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features & Functionality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-12">
            Key Features & Functionality
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-[#292524] bg-[#0c0a09]">
              <h3 className="font-serif text-xl text-white mb-4">Seamless Product Grid</h3>
              <p className="text-[#a8a29e] leading-relaxed mb-6">
                Showcasing items like "The Maya Slouchy Bag" and "The Sayapatri Bucket Bag" with clear pricing (NPR) and dynamic color options.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-[#a8a29e]">
                  <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  Dynamic color variants
                </li>
                <li className="flex items-start gap-3 text-sm text-[#a8a29e]">
                  <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  Clear NPR pricing
                </li>
                <li className="flex items-start gap-3 text-sm text-[#a8a29e]">
                  <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  High-resolution imagery
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-[#292524] bg-[#0c0a09]">
              <h3 className="font-serif text-xl text-white mb-4">Streamlined Checkout</h3>
              <p className="text-[#a8a29e] leading-relaxed mb-6">
                A clean, user-friendly checkout modal capturing essential customer details and district shipping info.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-[#a8a29e]">
                  <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  District-based shipping
                </li>
                <li className="flex items-start gap-3 text-sm text-[#a8a29e]">
                  <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  Minimal form fields
                </li>
                <li className="flex items-start gap-3 text-sm text-[#a8a29e]">
                  <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  Instant order confirmation
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-[#292524] bg-[#0c0a09]">
              <h3 className="font-serif text-xl text-white mb-4">Mobile-Optimized Performance</h3>
              <p className="text-[#a8a29e] leading-relaxed mb-6">
                Engineered for ultra-fast load times to ensure customers from any device can browse and order seamlessly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-[#a8a29e]">
                  <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  Optimized image delivery
                </li>
                <li className="flex items-start gap-3 text-sm text-[#a8a29e]">
                  <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  Touch-friendly navigation
                </li>
                <li className="flex items-start gap-3 text-sm text-[#a8a29e]">
                  <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                  Sub-second page loads
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Results & Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="rounded-3xl border border-[#292524] bg-[#0c0a09] p-10 md:p-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-white mb-8">
              Results & Impact
            </h2>
            <p className="text-lg md:text-xl text-[#a8a29e] leading-relaxed max-w-2xl mx-auto mb-10">
              The platform successfully brought real, recurring customers to the brand from day one
              and continues to operate smoothly as an active revenue channel.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div>
                <div className="font-serif text-4xl md:text-5xl text-white mb-2">Day One</div>
                <div className="text-sm text-[#a8a29e] uppercase tracking-widest">Live Customers</div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl text-white mb-2">Active</div>
                <div className="text-sm text-[#a8a29e] uppercase tracking-widest">Revenue Channel</div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl text-white mb-2">Ongoing</div>
                <div className="text-sm text-[#a8a29e] uppercase tracking-widest">Growth</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back to Work */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-[#a8a29e] hover:text-white transition-colors duration-300"
          >
            <ArrowUpRight className="w-4 h-4 rotate-180" />
            Back to All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
