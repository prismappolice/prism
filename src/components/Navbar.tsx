import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import PrismLogo from "../assets/Prism-Logo.jpeg";
import AppoliceLogo from "../assets/Appolice-Logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About PRISM", path: "/about" },
  {
    label: "Divisions",
    children: [
      { label: "AI-ML Lab", path: "/ai-ml-lab" },
      { label: "ACOC", path: "/acoc" },
      { label: "RT-EMIS", path: "/rt-emis" },
    ],
  },
  { label: "Our Projects", path: "/projects" },
  { label: "Organisation", path: "/organisation" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [divOpen, setDivOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-navy-gradient sticky top-0 z-50 shadow-lg">

      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-32">
          {/* Logo: PRISM + AP Police, side by side, rotating */}
          <Link to="/" className="flex items-center gap-4 group">
            {/* Coin effect: static border, only logos rotate, stop on hover */}
            <div className="coin-3d w-24 h-24 flex items-center justify-center">
              <div className="coin-border w-24 h-24 rounded-full border-4 border-gold flex items-center justify-center">
                <div className="coin-inner">
                  <div className="coin-face coin-front">
                    <img src={PrismLogo} alt="PRISM Logo" className="object-contain w-20 h-20" />
                  </div>
                  <div className="coin-face coin-back">
                    <img src={AppoliceLogo} alt="AP Police Logo" className="object-contain w-20 h-20" />
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <p className="text-[32px] font-opkela font-bold text-gradient-gold leading-tight">PRISM</p>
              <p className="text-[18px] font-opkela text-gradient-gold font-bold leading-tight -mt-1">Police Research Institute for Systems Modernization</p>
              <p className="text-[18px] font-opkela text-gradient-gold font-bold leading-tight -mt-1">Andhra Pradesh Police Department</p>
            </div>
          </Link>

          {/* Desktop nav */}
                <div className="hidden lg:flex items-center gap-8 text-[18px] font-bold font-opkela">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="px-3 py-2 text-sm font-opkela text-gold-light/80 hover:text-secondary transition-colors flex items-center gap-1">
                    {item.label} <ChevronDown className="w-3 h-3" />
                  </button>
                  <div className="absolute top-full left-0 bg-navy-deep border border-gold/20 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[180px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2.5 text-sm font-opkela hover:bg-navy-medium transition-colors ${
                          isActive(child.path) ? "text-secondary" : "text-gold-light/70 hover:text-secondary"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  className={`px-3 py-2 text-sm font-opkela transition-colors ${
                    isActive(item.path!) ? "text-secondary font-semibold" : "text-gold-light/80 hover:text-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-secondary">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-deep border-t border-gold/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setDivOpen(!divOpen)}
                    className="w-full text-left px-3 py-2.5 text-sm font-opkela text-gold-light/80 flex items-center justify-between"
                  >
                    {item.label} <ChevronDown className={`w-4 h-4 transition-transform ${divOpen ? "rotate-180" : ""}`} />
                  </button>
                  {divOpen && item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-8 pr-3 py-2 text-sm font-opkela text-gold-light/60 hover:text-secondary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-opkela ${
                    isActive(item.path!) ? "text-secondary font-semibold" : "text-gold-light/80"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
