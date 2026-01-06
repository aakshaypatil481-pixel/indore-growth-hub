import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "1 year of proven experience in digital marketing",
  "Successfully managed campaigns across multiple industries",
  "Expertise in SEO, content marketing, paid advertising, and LinkedIn marketing",
  "Committed to driving measurable growth for businesses in Indore and beyond",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-padding mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan/20 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan/30 to-sky-500/30 rounded-2xl" />

              {/* Main Image Container */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-navy to-navy-light shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan to-sky-500 flex items-center justify-center shadow-lg shadow-cyan/30">
                      <span className="text-5xl font-display font-bold text-primary">
                        AB
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-primary-foreground">
                      Akshay Bhise
                    </h3>
                    <p className="text-cyan mt-2">Digital Marketing Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-cyan font-semibold text-sm tracking-wide uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2 mb-6">
              Your Trusted Digital Marketer in{" "}
              <span className="text-cyan">Indore</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Akshay Bhise, a passionate digital marketing professional
                based in Indore with 1 year of hands-on experience helping
                brands grow their digital footprint. My journey in digital
                marketing began with a curiosity to understand how businesses
                connect with audiences online, and it has evolved into a mission
                to deliver impactful, data-driven marketing solutions.
              </p>
              <p>
                As a digital marketer in Indore, I specialize in creating
                comprehensive strategies that blend creativity with analytics.
                Whether it's optimizing websites for search engines, crafting
                compelling content, or managing high-performing ad campaigns on
                Meta and Google, I focus on what truly matters – delivering
                results that align with your business goals.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-8 space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
