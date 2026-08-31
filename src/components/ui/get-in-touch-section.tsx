import { useState } from "react";
import { ContactCard } from "@/components/ui/contact-card";
import { Mail, Phone, MapPin, Award, Users, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";

type FormStatus = 'idle' | 'submitting' | 'success';

export default function GetInTouchSection() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="relative min-h-screen bg-background text-foreground py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <ContactCard
          title="Get in touch"
          description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
          contactInfo={[
            {
              icon: Award,
              label: 'Experience',
              value: '1+ years',
            },
            {
              icon: Users,
              label: 'Clients',
              value: '9+',
            },
            {
              icon: Phone,
              label: 'Phone',
              value: '9744425158',
            },
            {
              icon: Mail,
              label: 'Email',
              value: 'teloxdesign@gmail.com',
            },
            {
              icon: MapPin,
              label: 'Location',
              value: 'Jhamsikhel, Lalitpur',
            },
          ]}
        >
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
              </motion.div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-muted-foreground max-w-sm">
                Thanks for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-primary hover:underline font-medium"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input type="tel" id="phone" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required />
              </div>
              <Button className="w-full" type="submit">
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  'Submit'
                )}
              </Button>
            </form>
          )}
        </ContactCard>
      </div>
    </section>
  );
}
