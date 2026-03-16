import Layout from "@/components/Layout";
import dgpSir from "@/assets/dgp-Sir.jpeg";
import SectionCard from "@/components/SectionCard";
import { Target, Eye, Lightbulb, Database, Brain, Shield, Monitor, BookOpen, Cpu, Users } from "lucide-react";

const objectives = [
  { icon: <Cpu className="w-6 h-6 text-secondary" />, title: "State-of-the-Art Infrastructure", description: "Creating modern facilities supporting research, training, and advanced operations." },
  { icon: <Database className="w-6 h-6 text-secondary" />, title: "Real-Time Data Systems", description: "Developing systems for real-time data analysis and informed decision-making across the department." },
  { icon: <Brain className="w-6 h-6 text-secondary" />, title: "AI & ML Capacity Building", description: "Building significant in-house capacity in Artificial Intelligence, Machine Learning, and Cybersecurity." },
  { icon: <BookOpen className="w-6 h-6 text-secondary" />, title: "Knowledge Access", description: "Providing personnel with access to cutting-edge research and industry best practices." },
  { icon: <Monitor className="w-6 h-6 text-secondary" />, title: "Digital Tools", description: "Equipping the force with modern digital tools for improved productivity and collaboration." },
  { icon: <Shield className="w-6 h-6 text-secondary" />, title: "Cybercrime Operations", description: "Establishing specialized capabilities for tackling complex cybercrime, including OSINT and Dark Web investigations." },
];

const budgetItems = [
  { component: "Capital Infrastructure – HQ Enhancement", type: "Capital", amount: "₹83,80,000" },
  { component: "RT-EMIS", type: "Capital", amount: "₹74,00,000" },
  { component: "AI-ML Lab & Capacity Building", type: "Capital", amount: "₹2,70,00,000" },
  { component: "Research Subscriptions", type: "Annual", amount: "₹40,00,000" },
  { component: "Enterprise Software & AI Tools", type: "Annual", amount: "₹30,00,000" },
  { component: "Advanced Cyber Operations Centre", type: "Capital", amount: "₹2,52,20,000" },
];

const About = () => (
  <Layout>
    {/* About PRISM Title and Subtitle (from PageHero) */}
    <section className="pt-10 pb-2 bg-background">
      <div className="text-center px-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-4" style={{ color: '#222', letterSpacing: '-1px' }}>
          About PRISM
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-2 py-4 bg-white rounded-lg border border-border shadow-md max-w-4xl mx-auto">
        {/* Left: Paragraph */}
        <div className="flex-1 text-justify text-black px-4 py-2" style={{ color: '#222' }}>
          <p className="text-base md:text-lg font-body text-black mb-5" style={{ color: '#222' }}>
            Police Research Institute for System Modernization (PRISM) is a pioneering initiative by the Andhra Pradesh Police, dedicated to advancing law enforcement through cutting-edge research, technology integration, and capacity building. PRISM empowers the police force with modern digital tools, real-time data systems, and state-of-the-art infrastructure, fostering innovation and excellence in public safety, crime prevention, and operational effectiveness.
          </p>
        </div>
        {/* Right: DGP Sir photo and info */}
        <div className="flex flex-col items-center px-4 py-2">
          <img src={dgpSir} alt="DGP Sir" className="w-36 h-36 rounded-full object-fill border-4 border-gold/60 shadow-lg mb-4" />
          <div className="text-center">
            <p className="text-base font-heading font-semibold text-black">Shri. K. Harish Kumar Gupta, I.P.S.</p>
            <p className="text-sm text-muted-foreground">Director General of Police, AP.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-14 bg-background">
      <div className="container mx-auto px-2">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl font-heading font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-muted-foreground font-body leading-relaxed">
              To establish PRISM as a leading police research and modernization hub, driving innovation and technological adoption within the Andhra Pradesh Police for enhanced efficiency, effectiveness, and public service delivery.
            </p>
          </div>
          <div className="bg-card rounded-lg p-8 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl font-heading font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground font-body leading-relaxed">
              To foster a culture of continuous learning, innovation, and adaptation within the AP Police through strategic technology integration, advanced research, and comprehensive capacity building.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Objectives */}
    <section className="pt-6 pb-16">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">Strategic Objectives</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, i) => (
            <SectionCard key={i} icon={obj.icon} title={obj.title} description={obj.description} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
