import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Lightbulb, Award } from 'lucide-react';
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal';

const values = [
  { icon: Target, title: 'Precision', desc: 'Every pixel and every line of code has purpose. We sweat the details so you don\'t have to.' },
  { icon: Heart, title: 'Partnership', desc: 'We treat your business like our own. Your goals are our goals, from day one to launch.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We stay ahead of the curve so your product is built with the best tools available.' },
  { icon: Eye, title: 'Craft', desc: 'Design and engineering with intention. We obsess over polish because good enough is never enough.' },
];

export function AboutPage() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <Reveal className="text-center mb-24">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">About Us</span>
          <h1 className="mt-4 text-5xl md:text-7xl font-display font-bold text-white tracking-tight max-w-4xl mx-auto leading-[1.05]">
            We're a studio that <span className="text-gradient">builds digital products</span> businesses rely on
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Telox Design was founded with one belief: great software should be accessible to every business.
            We combine strategy, design, and engineering to ship products that move the needle.
          </p>
        </Reveal>

        {/* Mission / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
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

        {/* Values */}
        <Reveal className="text-center mb-16">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">What Drives Us</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Our <span className="text-gradient">values</span>
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
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

        {/* Founder */}
        <Reveal className="text-center mb-16">
          <span className="text-primary font-mono text-sm uppercase tracking-widest">The Founder</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Meet the <span className="text-gradient">founder</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl bg-card/40 border border-border overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
                  <img
                    src="https://i.postimg.cc/7P0Btd6V/20260414-160314-0000.png"
                    alt="Rohet Chunara"
                    className="w-full h-full object-cover"
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
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-card/60 to-secondary/40 border border-border overflow-hidden text-center mt-24">
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
