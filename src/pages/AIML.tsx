import Layout from "@/components/Layout";
import SectionCard from "@/components/SectionCard";
import { Brain, Server, HardDrive, Globe, GraduationCap, Wrench, BarChart3 } from "lucide-react";
import aimlImg from "@/assets/aiml-lab.jpg";

const capabilities = [
  { icon: <Server className="w-6 h-6 text-secondary" />, title: "GPU Computing Cluster", description: "2 high-performance servers with NVIDIA A100/H100 GPUs for training complex deep learning models at scale." },
  { icon: <Brain className="w-6 h-6 text-secondary" />, title: "Research Workstations", description: "5 dedicated AI/ML workstations with high-end CPUs, 128GB+ RAM, and professional GPUs for researchers and trainees." },
  { icon: <HardDrive className="w-6 h-6 text-secondary" />, title: "Secure Data Storage", description: "Enterprise-grade NAS/SAN with 50-100TB+ capacity, encryption at rest, and robust access controls for sensitive police data." },
  { icon: <Globe className="w-6 h-6 text-secondary" />, title: "Model Hosting Infrastructure", description: "Self-hosted environment for deploying trained AI/ML models as internal APIs and applications for pilot testing." },
  { icon: <GraduationCap className="w-6 h-6 text-secondary" />, title: "Capacity Building Program", description: "₹50 Lakh investment in comprehensive training — Python, TensorFlow, PyTorch, MLOps, and cybersecurity for AI." },
  { icon: <BarChart3 className="w-6 h-6 text-secondary" />, title: "Use Cases", description: "Predictive policing, crime pattern analysis, CCTV footage analysis, resource optimization, and forensic enhancement." },
];

const AIML = () => (
  <Layout>

    {/* AI-ML Lab Title and Subtitle (from PageHero) */}
    <section className="pt-10 pb-2 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-4" style={{ color: '#222', letterSpacing: '-1px' }}>
          AI-ML Lab
        </h1>
        <p className="text-lg md:text-xl font-body max-w-6xl mx-auto text-black" style={{ color: '#222' }}>
          Artificial Intelligence & Machine Learning Laboratory — Building in-house expertise and infrastructure for data-driven policing.
        </p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <SectionCard key={i} icon={cap.icon} title={cap.title} description={cap.description} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AIML;
