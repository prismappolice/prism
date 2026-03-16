import Layout from "@/components/Layout";
import SectionCard from "@/components/SectionCard";
import { Monitor, Code, Tv, Server, Settings, GraduationCap, PiggyBank } from "lucide-react";
import rtemisImg from "@/assets/rtemis-center.jpg";

const features = [
  { icon: <Code className="w-6 h-6 text-secondary" />, title: "Custom Software Platform", description: "Bespoke RT-EMIS software with customizable dashboards, reporting modules, and integration with CCTNS and other police databases." },
  { icon: <Tv className="w-6 h-6 text-secondary" />, title: "Video Wall Display", description: "Fine pixel pitch LED video wall in the central command room displaying real-time dashboards, alerts, maps, and key metrics." },
  { icon: <Server className="w-6 h-6 text-secondary" />, title: "Dedicated Server Infrastructure", description: "Rack-mountable servers with adequate CPU, 64GB+ RAM, and SSD storage to reliably handle real-time data processing loads." },
  { icon: <Settings className="w-6 h-6 text-secondary" />, title: "System Integration", description: "Professional project management, system integration services, and seamless installation into the PRISM facility." },
  { icon: <GraduationCap className="w-6 h-6 text-secondary" />, title: "User Training", description: "Comprehensive training for end-users, analysts, and IT staff — including hands-on sessions, manuals, and train-the-trainer programs." },
  { icon: <Monitor className="w-6 h-6 text-secondary" />, title: "Real-Time Dashboards", description: "Consolidated operational views breaking down data silos for improved situational awareness, resource allocation, and performance monitoring." },
];

const RTEMIS = () => (
  <Layout>

    {/* RT-EMIS Title and Subtitle (from PageHero) */}
    <section className="pt-10 pb-2 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-4" style={{ color: '#222', letterSpacing: '-1px' }}>
          RT-EMIS
        </h1>
        <p className="text-lg md:text-xl font-body max-w-5xl mx-auto text-black" style={{ color: '#222' }}>
          Real-Time Enterprise-wide Management Information System — Transforming raw data into actionable intelligence for strategic planning and operational oversight.
        </p>
      </div>
    </section>

    <section className="py-14 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <SectionCard key={i} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default RTEMIS;
