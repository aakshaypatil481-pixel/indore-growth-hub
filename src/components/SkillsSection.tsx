import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  FileText,
  Target,
  BarChart3,
  Linkedin,
  TrendingUp,
  Mail,
  Share2,
} from "lucide-react";

const skills = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "I optimize websites to rank higher on search engines, driving organic traffic and increasing visibility. From keyword research to technical SEO and link building, I implement strategies that deliver long-term results.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Content is the backbone of digital marketing. I create engaging, SEO-optimized content that resonates with your target audience, builds brand authority, and drives conversions.",
  },
  {
    icon: Target,
    title: "Meta Ads (Facebook & Instagram)",
    description:
      "I design and manage high-converting Meta ad campaigns that target the right audience at the right time. From strategy to optimization, I ensure every rupee spent delivers maximum ROI.",
  },
  {
    icon: BarChart3,
    title: "Google Ads",
    description:
      "I specialize in Google Search, Display, and Shopping campaigns that capture high-intent customers. Through continuous A/B testing and data analysis, I optimize for conversions.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Marketing",
    description:
      "LinkedIn is powerful for B2B marketing. I leverage LinkedIn's targeting to build brand awareness, generate quality leads, and establish thought leadership.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Performance Tracking",
    description:
      "Using Google Analytics and Meta Business Suite, I track and analyze campaign performance to make data-driven decisions and optimize for better results.",
  },
];

const additionalSkills = [
  "Campaign Strategy & Planning",
  "Conversion Rate Optimization (CRO)",
  "Email Marketing",
  "Social Media Management",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="container-padding mx-auto max-w-7xl" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan font-semibold text-sm tracking-wide uppercase">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2 mb-4">
            Digital Marketing Skills That{" "}
            <span className="text-cyan">Drive Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            As a versatile digital marketer in Indore, I bring a comprehensive
            skill set that covers every aspect of modern digital marketing.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-cyan/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-sky-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <skill.icon className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-6 bg-card rounded-2xl border border-border/50"
        >
          <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-cyan" />
            Additional Competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground border border-border/50 hover:border-cyan/30 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
