import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Lightbulb, Award, Rocket, Users, Code2, Palette, TrendingUp, Zap } from 'lucide-react';
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal';

const values = [
  { icon: Target, title: 'Precision', desc: 'Every pixel and every line of code has purpose. We sweat the details so you don\'t have to.' },
  { icon: Heart, title: 'Partnership', desc: 'We treat your business like our own. Your goals are our goals, from day one to launch.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We stay ahead of the curve so your product is built with the best tools available.' },
  { icon: Eye, title: 'Craft', desc: 'Design and engineering with intention. We obsess over polish because good enough is never enough.' },
];

const milestones = [
  { year: '2024', title: 'Foundation', desc: 'Telox Design established with a vision to democratize digital craftsmanship' },
  { year: '2025', title: 'First Clients', desc: 'Delivered 10+ projects for local and international businesses' },
  { year: '2026', title: 'Growth', desc: 'Expanded services, refined process, and built a reputation for excellence' },
  { year: 'Future', title: 'Scale', desc: 'Continuing to push boundaries and deliver world-class digital products' },
];

const pillars = [
  { icon: Code2, title: 'Engineering', desc: 'Clean, scalable code built with modern frameworks for performance and reliability.' },
  { icon: Palette, title: 'Design', desc: 'Beautiful, intuitive interfaces that convert visitors into loyal customers.' },
  { icon: TrendingUp, title: 'Strategy', desc: 'Data-driven decisions that align product goals with business outcomes.' },
  { icon: Zap, title: 'Speed', desc: 'Rapid iteration and deployment without sacrificing quality or polish.' },
];

export function AboutPage() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 1. Bold Mission & Vision Intro */}
        <Reveal className="text-center mb-24 md:mb-32">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">About Us</span>
          <h1 className="mt-4 text-5xl md:text-7xl font-display font-bold text-white tracking-tight max-w-4xl mx-auto leading-[1.05]">
            We build digital products that <span className="text-gradient">businesses rely on</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Telox Design combines strategy, design, and engineering to ship products that move the needle.
            Great software should be accessible to every business — that's the baseline we design for.
          </p>
        </Reveal>

        {/* Mission / Vision Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          <Reveal>
            <div className="p-10 rounded-2xl bg-card/40 border border-border h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with digital tools that are as beautiful as they are functional.
                We believe great design and solid engineering aren't luxuries — they're the baseline.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="p-10 rounded-2xl bg-card/40 border border-border h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every business — regardless of size — has access to world-class digital products.
                We're building the studio that makes that happen, one project at a time.
              </p>
            </div>
          </Reveal>
        </div>

        {/* 2. Strategic Roadmap / Growth Chart */}
        <Reveal className="text-center mb-16">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Our Journey</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Strategic <span className="text-gradient">Roadmap</span>
          </h2>
        </Reveal>

        <div className="relative mb-32">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 ring-4 ring-background" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="text-primary font-mono text-sm uppercase tracking-widest">{milestone.year}</span>
                  <h3 className="text-2xl font-display font-semibold text-white mt-2 mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.desc}</p>
                </div>

                {/* Visual placeholder */}
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="rounded-2xl border border-border bg-card/20 p-8 flex items-center justify-center min-h-[120px]">
                    <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest">Milestone Visual</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Core Features & Pillars (Grid Layout) */}
        <Reveal className="text-center mb-16">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">What Drives Us</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Our <span className="text-gradient">Pillars</span>
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {values.map((value) => (
            <RevealItem key={value.title}>
              <div className="group p-8 rounded-2xl bg-card/40 border border-border hover:border-primary/40 transition-all duration-500 h-full hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* 4. Core Pillars with Visual Placeholders */}
        <Reveal className="text-center mb-16">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">Our Foundation</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Operational <span className="text-gradient">Excellence</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card/40 overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </div>
              {/* Visual placeholder */}
              <div className="h-32 bg-card/20 border-t border-border flex items-center justify-center">
                <span className="text-xs font-mono text-muted-foreground/40 uppercase tracking-widest">Process Visual</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founder */}
        <Reveal className="text-center mb-16">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">The Founder</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Meet the <span className="text-gradient">founder</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="max-w-5xl mx-auto mb-32">
            <div className="relative rounded-3xl bg-card/40 border border-border overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
                  <img
                    src="https://i.postimg.cc/7P0Btd6V/20260414_160314_0000.png"
                    alt="Rohet Chunara"
                    width="600"
                    height="750"
                    className="w-full h-full object-cover grayscale"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent md:bg-gradient-to-r" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Rohet Chunara</h3>
                  <p className="text-primary font-mono text-sm uppercase tracking-widest mb-6">Founder</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Rohet founded Telox Design with a clear vision: make high-quality digital craftsmanship accessible to every business. He believes great design and solid engineering aren't luxuries — they're the baseline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-card/60 to-secondary/40 border border-border overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative">
              <Award className="w-10 h-10 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Want to work with us?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                We're always looking for new challenges and great partners.
              </p>
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
