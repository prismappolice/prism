import { ReactNode } from "react";

interface SectionCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const SectionCard = ({ icon, title, description, className = "" }: SectionCardProps) => (
  <div className={`bg-card rounded-lg p-6 border border-border hover:shadow-gold/10 hover:shadow-lg transition-all duration-300 group ${className}`}>
    {icon && (
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
        {icon}
      </div>
    )}
    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground font-body leading-relaxed">{description}</p>
  </div>
);

export default SectionCard;
