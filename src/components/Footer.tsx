import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import PrismLogo from "../assets/Prism-Logo.jpeg";

const Footer = () => (
  <footer className="bg-navy-gradient border-t border-gold/20">
    <div className="container mx-auto px-4 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-gold/40 overflow-hidden">
              <img src={PrismLogo} alt="PRISM Logo" className="object-contain w-10 h-10" />
            </div>
            <span className="text-lg font-heading font-bold text-gradient-gold">PRISM</span>
          </div>
          <p className="text-sm text-gold-light/90 font-body leading-relaxed">
            Police Research Institute for Systems Modernization — A Centre of Excellence under the Andhra Pradesh Police Department.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-secondary mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <div className="space-y-2">
            {[
              { label: "About PRISM", path: "/about" },
              { label: "AI-ML Lab", path: "/ai-ml-lab" },
              { label: "ACOC", path: "/acoc" },
              { label: "RT-EMIS", path: "/rt-emis" },
              { label: "Organisation", path: "/organisation" },
            ].map(l => (
              <Link key={l.path} to={l.path} className="block text-sm text-gold-light/60 hover:text-secondary transition-colors font-body">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* External Links */}
        <div>
          <h4 className="font-heading font-semibold text-secondary mb-4 text-sm uppercase tracking-wider">External Links</h4>
          <div className="space-y-2">
            {[
              { label: "NCRP Portal", url: "https://cyberpolice.nic.in/" },
              { label: "Andhra Pradesh Police Citizen Portal", url: "https://citizen.appolice.gov.in" },
              { label: "AP Police OSINT", url: "https://appoliceosint.com" },
              { label: "Disha", url: "https://disha.gov.in" },
              { label: "AP Women & Child Safety Wing", url: "https://www.apwomenandchildsafetywing.com" },
            ].map(l => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-gold-light/60 hover:text-secondary transition-colors font-body">
                <ExternalLink className="w-3 h-3" /> {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-secondary mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2 text-sm text-gold-light/90 font-body">
              <MapPin className="w-4 h-4 mt-0.5 text-secondary/60 shrink-0" />
              <span>PRISM, AP Police HQ, Mangalagiri, Andhra Pradesh.</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gold-light/90 font-body">
              <Phone className="w-4 h-4 text-secondary/60" />
              <span>+91-8523-817999</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gold-light/90 font-body">
              <Mail className="w-4 h-4 text-secondary/60" />
              <span>prismappolice@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10 mt-8 pt-6 text-center">
        <p className="text-xl text-gold-light/90 font-body">
          © {new Date().getFullYear()} PRISM — Police Research Institute for Systems Modernization, AP Police Department. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
