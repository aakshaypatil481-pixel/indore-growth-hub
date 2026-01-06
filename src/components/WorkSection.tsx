import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Target, DollarSign, Users } from "lucide-react";

const projects = [
  {
    icon: Target,
    title: "Local Business SEO Campaign",
    challenge:
      "A local service provider in Indore struggled with online visibility and was losing customers to competitors.",
    solution:
      "Conducted comprehensive keyword research, optimized on-page SEO elements, and built local citations to improve local search rankings.",
    results: [
      { value: "150%", label: "Increase in Organic Traffic" },
      { value: "4 months", label: "Time to Results" },
      { value: "#1", label: "Local Search Rankings" },
    ],
  },
  {
    icon: DollarSign,
    title: "Meta Ads for E-commerce Brand",
    challenge:
      "An e-commerce client wanted to increase sales while maintaining a low customer acquisition cost.",
    solution:
      "Developed targeted Meta ad campaigns with compelling creatives, implemented retargeting strategies, and optimized audience segments.",
    results: [
      { value: "3x", label: "ROAS (Return on Ad Spend)" },
      { value: "40%", label: "Reduced Cost per Purchase" },
      { value: "200+", label: "Conversions/Month" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Google Ads Lead Generation",
    challenge:
      "A B2B company needed quality leads but was getting high click costs with low conversions.",
    solution:
      "Restructured Google Ads campaigns with refined keyword targeting, improved ad copy, and optimized landing pages.",
    results: [
      { value: "60%", label: "Increased Conversion Rate" },
      { value: "35%", label: "Reduced Cost per Lead" },
      { value: "100+", label: "Qualified Leads/Month" },
    ],
  },
  {
    icon: Users,
    title: "Content Marketing for SaaS",
    challenge:
      "A SaaS startup lacked brand awareness and organic traffic.",
    solution:
      "Developed a content marketing strategy focused on educational blog posts, SEO optimization, and LinkedIn thought leadership.",
    results: [
      { value: "200%", label: "Organic Traffic Growth" },
      { value: "6 months", label: "Time to Authority" },
      { value: "50+", label: "Indexed Keywords" },
    ],
  },
];

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-padding bg-background">
      <div className="container-padding mx-auto max-w-7xl" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan font-semibold text-sm tracking-wide uppercase">
            My Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2 mb-4">
            Projects That Showcase My{" "}
            <span className="text-cyan">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            As a digital marketer in Indore, I've worked on diverse projects
            that demonstrate my ability to deliver measurable results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-cyan/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan/5"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-br from-navy to-navy-light">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/20 flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary-foreground">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-cyan uppercase tracking-wide mb-2">
                    Challenge
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-cyan uppercase tracking-wide mb-2">
                    Solution
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {project.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="pt-4 border-t border-border/50">
                  <h4 className="text-sm font-semibold text-cyan uppercase tracking-wide mb-4">
                    Results
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {project.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-display font-bold text-foreground">
                          {result.value}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
