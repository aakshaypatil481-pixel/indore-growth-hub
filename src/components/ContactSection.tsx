import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const services = [
  "SEO",
  "Content Marketing",
  "Meta Ads",
  "Google Ads",
  "LinkedIn Marketing",
  "Full Digital Marketing Strategy",
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "I'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-padding mx-auto max-w-7xl" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan font-semibold text-sm tracking-wide uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2 mb-4">
            Ready to Grow Your Business?{" "}
            <span className="text-cyan">Let's Talk!</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're a startup or an established business, I'm here to
            help. Fill out the form below for a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    placeholder="Your company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="flex h-12 w-full rounded-lg border border-border/50 bg-secondary/50 px-4 py-3 text-base ring-offset-background transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:border-cyan focus-visible:bg-background"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell Me About Your Project *
                </label>
                <Textarea
                  required
                  placeholder="Describe your project, goals, and any specific requirements..."
                  className="min-h-[140px]"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Get Your Free Consultation
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Details Card */}
            <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-display font-bold text-primary-foreground mb-6">
                Prefer to connect directly?
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:akshay.bhise@email.com"
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-cyan transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center group-hover:bg-cyan/30 transition-colors">
                    <Mail className="w-5 h-5 text-cyan" />
                  </div>
                  <span>akshay.bhise@email.com</span>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-cyan transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center group-hover:bg-cyan/30 transition-colors">
                    <Phone className="w-5 h-5 text-cyan" />
                  </div>
                  <span>+91 98765 43210</span>
                </a>

                <div className="flex items-center gap-4 text-primary-foreground/80">
                  <div className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan" />
                  </div>
                  <span>Indore, Madhya Pradesh</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-primary-foreground/10">
                <p className="text-sm text-primary-foreground/60 mb-4">
                  Connect with me on social media
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center text-cyan hover:bg-cyan hover:text-primary transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center text-cyan hover:bg-cyan hover:text-primary transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-cyan/20 flex items-center justify-center text-cyan hover:bg-cyan hover:text-primary transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Send className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    Quick Response
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    I respond to all inquiries within 24 hours. Looking forward
                    to discussing your project!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
