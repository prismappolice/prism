import Layout from "@/components/Layout";
import digSir from "@/assets/dig-Sir.jpeg";

const orgData = {
  head: { title: "CEO of PRISM ", name: "Dr. Fakkeerappa Kaginelli, I.P.S.", role: "Deputy Inspector General of Police" },
  divisions: [
    {
      title: "AI-ML Lab",
      head: "Addl. SP (AI-ML)",
      teams: ["Data Scientists", "ML Engineers", "Research Analysts", "Training Coordinators"],
    },
    {           
      title: "ACOC",
      head: "Addl. SP (ACOC)",
      teams: ["OSINT Analysts", "Dark Web Investigators", "Ethical Hackers", "Digital Forensic Experts"],
    },
    {
      title: "RT-EMIS",
      head: "Addl. SP (RT-EMIS)",
      teams: ["Software Engineers", "Data Analysts", "System Administrators", "Training Staff"],
    },
    {
      title: "Administration",
      head: "Assistant Administration Officer",
      teams: ["Senior Assistants", "Junior Assistant", "Data Entry Operators", "Full Stack Developers"],
    },
  ],
};

const OrgStructure = () => (
  <Layout>

    {/* Organisation Structure Title and Subtitle (from PageHero) */}
    <section className="pt-10 pb-2 bg-background">
      <div className="container mx-auto px-4 text-center max-w-7xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-4" style={{ color: '#222', letterSpacing: '-1px' }}>
          Organisation Structure
        </h1>
        <p className="text-lg md:text-xl font-body max-w-6xl mx-auto text-black" style={{ color: '#222' }}>
          Hierarchical command structure of PRISM ensuring effective leadership, coordination, and operational efficiency.
        </p>
      </div>
    </section>

    <section className="py-14 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top hierarchy */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center justify-center rounded-lg border px-8 py-4 w-[550px] max-w-full bg-white">
            <img src={digSir} alt="DIG Sir" className="w-36 h-36 rounded-full object-fill border-4 border-gold/60 shadow-lg mr-6" />
            <div className="text-center">
              <div className="font-heading font-bold text-2xl text-gold mb-2">{orgData.head.title}</div>
              <div className="text-lg font-heading font-bold text-black mb-1">{orgData.head.name}</div>
              <div className="text-sm font-heading font-bold text-black mt-1">{orgData.head.role}</div>
            </div>
          </div>
        </div>

        {/* Connecting line */}
        <div className="flex justify-center mb-5">
          <div className="w-1 h-16 bg-border" />
        </div>

        {/* Divisions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {orgData.divisions.map((div, i) => (
            <div key={i} className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="bg-primary/10 px-4 py-3 border-b border-border">
                <h3 className="font-heading font-semibold text-foreground">{div.title}</h3>
                <p className="text-xs text-muted-foreground font-body">{div.head}</p>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {div.teams.map((team, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      {team}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);
export default OrgStructure;
