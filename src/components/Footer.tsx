import { useState } from "react";
import { Send, Linkedin, Instagram, Twitter, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "My Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Search Engine Optimization",
  "Content Marketing",
  "Meta Ads Management",
  "Google Ads Management",
  "LinkedIn Marketing",
  "Digital Marketing Consulting",
];

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You'll receive the latest digital marketing tips.",
      });
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container-padding mx-auto max-w-7xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold">
                Akshay
                <span className="text-cyan">.</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Professional digital marketer in Indore specializing in SEO,
              content marketing, Meta ads, Google ads, and LinkedIn marketing.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-cyan hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-cyan hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-cyan hover:text-primary transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#skills"
                    className="text-primary-foreground/70 hover:text-cyan transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Newsletter
            </h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Stay updated with the latest digital marketing tips and industry
              insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-cyan"
              />
              <Button variant="hero" size="sm" className="w-full">
                Subscribe
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-padding mx-auto max-w-7xl py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-primary-foreground/60 text-center md:text-left">
              © 2024 Akshay Bhise - Digital Marketer in Indore. All Rights
              Reserved.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-primary-foreground/60 hover:text-cyan transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-primary-foreground/60 hover:text-cyan transition-colors"
              >
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan hover:bg-cyan hover:text-primary transition-all duration-300"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Footer Text */}
      <div className="bg-navy-light/50 py-4">
        <div className="container-padding mx-auto max-w-7xl">
          <p className="text-xs text-primary-foreground/40 text-center">
            Akshay Bhise is a professional digital marketer in Indore
            specializing in SEO, content marketing, Meta ads, Google ads, and
            LinkedIn marketing. Serving businesses across Indore and India with
            data-driven digital marketing solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
