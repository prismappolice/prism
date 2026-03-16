import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Brain, Shield, Monitor, ArrowRight, Newspaper, ExternalLink, Clock, Instagram } from "lucide-react";
import { Image } from "lucide-react";
import heroBanner from "@/assets/prism-gallary.png";
import dgpSir from "@/assets/dgp-Sir.jpeg";
import aimlImg from "@/assets/aiml-lab.jpg";
import acocImg from "@/assets/acoc-center.jpg";
import rtemisImg from "@/assets/rtemis-center.jpg";

const newsItems = [
  { date: "01 Feb 2025", title: "PRISM Established as R&D (PRISM) under DGP Guidance", summary: "On February 1, 2025, PRISM was established as R&D (PRISM) under the guidance of the DGP." },
  { date: "05 Jun 2025", title: "AP Police OSINT Website Launched by DGP", summary: "The AP Police OSINT website (PRISM's first project) was officially launched by DGP sir on June 5, 2025." },
  { date: "15 Aug 2025", title: "PRISM App Launched (AP Police)", summary: "The PRISM APPOLICE app was launched on August 15, 2025." },
  { date: "08 Jan 2026", title: "PRISM Receives Official Government Order (GO)", summary: "On January 8, 2026, PRISM received the official Government Order (GO copy) confirming its establishment by the Government of Andhra Pradesh." },
];

const externalLinks = [
  { label: "Ministry of Home Affairs", url: "https://mha.gov.in" },
  { label: "National Crime Records Bureau", url: "https://ncrb.gov.in" },
  { label: "Bureau of Police Research & Dev.", url: "https://bprd.nic.in" },
    { label: "NCRP Portal", url: "https://cyberpolice.nic.in/" },
  { label: "INTERPOL", url: "https://www.interpol.int" },
  { label: "Andhra Pradesh Police Citizen Portal", url: "https://citizen.appolice.gov.in" },
  { label: "AP Police OSINT", url: "https://appoliceosint.com" },
  { label: "PRISM", url: "https://prismappolice.in" },
  { label: "Disha", url: "https://disha.gov.in" },
  { label: "AP Police Training Wing", url: "https://training.prismappolice.in" },
  { label: "AP Women & Child Safety Wing", url: "https://www.apwomenandchildsafetywing.com" },
];

const divisions = [
  {
    icon: <Brain className="w-5 h-5 text-secondary" />,
    title: "AI-ML Lab",
    path: "/ai-ml-lab",
    image: aimlImg,
  },
  {
    icon: <Shield className="w-5 h-5 text-secondary" />,
    title: "ACOC",
    path: "/acoc",
    image: acocImg,
  },
  {
    icon: <Monitor className="w-5 h-5 text-secondary" />,
    title: "RT-EMIS",
    path: "/rt-emis",
    image: rtemisImg,
  },
];

const Index = () => {
  return (
    <Layout>

      {/* ── MAIN ABOVE-THE-FOLD GRID ── */}
      <section className="bg-background border-b border-border">
        <div className="container mx-auto px-2 py-4">
          <div className="grid lg:grid-cols-[220px_1fr_200px] gap-4 lg:h-[calc(100vh-200px)] lg:max-h-[620px] min-h-0">

            {/* COL 1 — Scrolling Notifications */}
            <div className="flex flex-col h-full min-h-0 overflow-hidden">
              <div className="flex items-center gap-2 mb-2 shrink-0">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
                <h2 className="text-lg font-heading font-bold text-foreground">Latest Updates</h2></div>
              <div className="bg-card rounded-lg border border-border overflow-hidden flex-1 min-h-0">
                <div className="animate-scroll-up">
                  {[...newsItems, ...newsItems].map((item, i) => (
                    <div key={i} className="px-3 py-3 border-b border-border/50 hover:bg-secondary/10 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-1 text-[9px] text-[#f7d354] font-body mb-1 font-bold uppercase tracking-wider">
                        <Clock className="w-2 h-2 text-[#f7d354]" /> {item.date}
                      </div>
                      <p className="text-[11px] font-body text-foreground leading-snug group-hover:text-secondary transition-colors font-medium">{item.title}</p>
                      {item.summary && (
                        <p className="text-[10px] text-muted-foreground mt-0.5 font-body leading-tight">{item.summary}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* COL 2 — Gallery (top fixed) + Latest Updates (bottom) */}
            <div className="flex flex-col h-full min-h-0 gap-3 overflow-hidden flex-1">

              {/* Gallery — fixed height */}
              <div className="flex flex-col flex-1 min-h-0">
                <div className="flex items-center gap-2 mb-2">
                  <Image className="w-4 h-4 text-secondary" />
                  <h2 className="text-lg font-heading font-bold text-foreground">Gallery</h2>
                </div>
                <div className="grid grid-cols-3 gap-2 flex-1 min-h-0">
                  <div className="col-span-2 rounded-lg overflow-hidden border border-border shadow group h-full">
                    <img src={heroBanner} alt="PRISM HQ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col gap-2 h-full">
                    <div className="rounded-lg overflow-hidden border border-border shadow group flex-1">
                      <img src={aimlImg} alt="AI-ML Lab" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-border shadow group flex-1">
                      <img src={acocImg} alt="ACOC" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
                </div>

            </div>

            {/* COL 3 — Important Links + Divisions Quick Links */}
            <div className="flex flex-col gap-3 h-full min-h-0 overflow-y-auto flex-1">
              {/* Important Links */}
              <div className="flex flex-col flex-1 min-h-0">
                <div className="flex items-center gap-2 mb-2">
                  <ExternalLink className="w-4 h-4 text-secondary" />
                  <h2 className="text-lg font-heading font-bold text-foreground">Important Links</h2>
                </div>
                <div className="bg-card rounded-lg border border-border p-3 space-y-2 flex-1 min-h-0 relative overflow-hidden group" style={{ height: '260px' }}>
                    <div className="absolute inset-0 w-full h-full animate-scroll-up-important-links group-hover:[animation-play-state:paused]" style={{ willChange: 'transform' }}>
                  <div className="flex flex-col">
                    {externalLinks.map(l => (
                      <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[11px] font-body text-black hover:text-secondary transition-colors">
                        <ArrowRight className="w-2.5 h-2.5 text-secondary/80 shrink-0" /> {l.label}
                      </a>
                    ))}
                  </div>
                  </div>
                </div>
              </div>
              
              {/* Divisions Quick Access */}
              <div className="shrink-0">
                <h2 className="text-sm font-heading font-bold text-foreground mb-2">Our Divisions</h2>
                <div className="space-y-2">
                  {divisions.map(d => (
                    <Link key={d.path} to={d.path} className="group flex items-center gap-2 bg-card rounded-lg border border-border p-1.5 hover:border-gold/40 hover:shadow-sm transition-all overflow-hidden relative h-10">
                      <img src={d.image} alt={d.title} className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-50 transition-opacity" />
                      <div className="relative z-10 flex items-center gap-2 w-full">
                        {d.icon}
                        <span className="text-[11px] font-heading font-bold text-black group-hover:text-black transition-colors">{d.title}</span>
                        <ArrowRight className="w-3 h-3 text-secondary/60 ml-auto" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Follow Us */}
              <div className="shrink-0">
                <h2 className="text-sm font-heading font-bold text-foreground mb-5">Follow Us</h2>
                <div className="grid grid-cols-3 gap-1.5">
                  <a href="https://x.com/AppolicePrism25" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 p-1 rounded-lg bg-[#24292f] hover:bg-[#1da1f2]/90 transition-colors group shadow-md">
                    <span className="text-2xl text-white group-hover:text-[#1da1f2] transition-colors">𝕏</span>
                    <span className="text-[9px] font-body text-white text-center leading-tight">X (Twitter)</span>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61579973177101" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 p-1 rounded-lg bg-[#1877f3] hover:bg-[#145db2]/90 transition-colors group shadow-md">
                    <span className="text-2xl text-white group-hover:text-[#f7d354] transition-colors">f</span>
                    <span className="text-[9px] font-body text-white text-center leading-tight">Facebook</span>
                  </a>
                  <a href="https://www.instagram.com/prismappolice/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 p-1 rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:from-pink-500 hover:to-yellow-400 transition-colors group shadow-md">
                    <Instagram className="w-6 h-6 text-white group-hover:text-yellow-300 transition-colors" />
                    <span className="text-[9px] font-body text-white text-center leading-tight">Instagram</span>
                  </a>
                </div>
              </div>
                  </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-primary border-b border-gold/20">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "₹7.50 Cr", label: "Total Budget" },
              { value: "6", label: "Project Components" },
              { value: "50+", label: "Personnel" },
              { value: "3", label: "Specialized Labs" },
            ].map(s => (
              <div key={s.label}>
                <div className="text-xl md:text-2xl font-heading font-bold text-gradient-gold">{s.value}</div>
                <div className="text-[10px] text-gold-light/90 font-body mt-0.5 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy-gradient py-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gradient-gold mb-3">
            Building the Future of Policing
          </h2>
          <p className="text-gold-light/60 font-body max-w-2xl mx-auto mb-6 text-sm">
            PRISM is committed to transforming law enforcement through innovation, technology, and continuous learning.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-body font-semibold hover:bg-gold-dark transition-colors shadow-gold"
          >
            Learn About Our Mission <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
