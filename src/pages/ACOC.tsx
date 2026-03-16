import Layout from "@/components/Layout";
import SectionCard from "@/components/SectionCard";
import { Shield, Server, HardDrive, Monitor, Network, Eye, Search, Lock, FlaskConical, Settings } from "lucide-react";
import acocImg from "@/assets/acoc-center.jpg";

const capabilities = [
  { icon: <Eye className="w-6 h-6 text-secondary" />, title: "OSINT Operations", description: "Commercial OSINT platforms for automated intelligence gathering from surface web, deep web, social media, forums, and breach databases." },
  { icon: <Search className="w-6 h-6 text-secondary" />, title: "Dark Web Monitoring", description: "Specialized tools for safely accessing, crawling, and monitoring content on Tor and I2P anonymity networks." },
  { icon: <Lock className="w-6 h-6 text-secondary" />, title: "Ethical Hacking Lab", description: "Penetration testing and vulnerability scanning tools including Metasploit Pro, Burp Suite Pro, and Nessus Professional." },
  { icon: <FlaskConical className="w-6 h-6 text-secondary" />, title: "Digital Forensics", description: "EnCase, Magnet AXIOM, and Cellebrite UFED for comprehensive examination of digital evidence from computers and mobiles." },
  { icon: <Network className="w-6 h-6 text-secondary" />, title: "Secure Network Infrastructure", description: "Network segregation with NGFW, IDS/IPS, and VPN — isolating high-risk Dark Web operations from the main police network." },
  { icon: <Server className="w-6 h-6 text-secondary" />, title: "Virtualization Environment", description: "VMware-based virtual machines for safe malware analysis, sandboxing, and simulating diverse operating environments." },
];

const ACOC = () => (
  <Layout>

    {/* ACOC Title and Subtitle (from PageHero) */}
    <section className="pt-10 pb-2 bg-background">
      <div className="w-full max-w-full mx-auto px-2 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-4" style={{ color: '#222', letterSpacing: '-1px' }}>
          Advanced Cyber Operations Centre
        </h1>
        <p className="text-lg md:text-xl font-body max-w-5xl mx-auto text-black" style={{ color: '#222' }}>
          ACOC — Specialized unit for proactive and reactive cyber operations, OSINT, Dark Web investigations, and ethical hacking.
        </p>
      </div>
    </section>

    <section className="py-6 bg-background">
      <div className="container mx-auto px-2">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <SectionCard key={i} icon={cap.icon} title={cap.title} description={cap.description} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ACOC;
