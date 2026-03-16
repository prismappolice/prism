import Layout from "@/components/Layout";
import { Link as LinkIcon } from "lucide-react";
import { useState } from "react";
const projects = [
  {
    title: "AP Police OSINT Website",
    date: "05 Jun 2025",
    description: "A comprehensive Open Source Intelligence (OSINT) platform for AP Police, enabling advanced data collection and analysis.",
    links: [
      { url: "https://appoliceosint.com", label: "Visit AP Police OSINT Site" },
    ]
  },
  {
    title: "PRISM App",
    date: "15 Aug 2025",
    description:  "A mobile application for AP Police personnel, similar to WhatsApp, enabling secure communication and access to PRISM resources on the go.",
    links: [
      { url: "https://prism-appolice.in", label: "Visit PRISM App Portal" },
    ]
  },
  {
    title: "File Management System",
    date: "01 Sep 2025",
    description: "A secure file management system for AP Police, enabling efficient document handling and access control.",
    links: [
      { url: "https://fms.prismappolice.in", label: "Visit File Management System" },
    ]
  },
  {
    title: "AP Police Training Portal",
    date: "20 Dec 2025",
    description: "A portal for AP Police training, including new recruit training, reporting dates, and training center information.",
    links: [
      { url: "https://training.prismappolice.in", label: "Visit Training Portal" },
    ]
  },
  {
    title: "Control Room DSR Management",
    date: "01 Mar 2026",
    description: "A web application for Andhra Pradesh Police to manage and report Control Room DSRs, supporting district and admin logins.",
    links: [
      { url: "https://controlroom.prismappolice.in/", label: "Visit Control Room DSR" },
    ]
  },
      {
      title: "Rakshak AI",
      date: "10 Mar 2026",
      description: "AI-driven document intelligence platform for law enforcement, supporting AP Police with advanced AI assistant capabilities.",
      links: [
        { url: "https://rakshakai.prismappolice.in", label: "Visit Rakshak AI" },
      ]
    },
      {
    title: "AP Police Training ID Card Management System",
    date: "16 Mar 2026",
    description: "A secure portal for managing training ID cards for AP Police personnel, supporting multiple training centers and admin roles.",
    links: [
      { url: "https://trainingidcard.prismappolice.in", label: "Visit Training ID Card System" },
    ]
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;
  const totalPages = Math.ceil(projects.length / rowsPerPage);
  const paginatedProjects = projects.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <Layout>
      <section className="py-14 bg-background">
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full bg-card rounded-lg border border-blue-300 shadow-md">
            <thead className="bg-muted">
              <tr>
                <th colSpan={4} className="px-2 py-3 text-center bg-muted text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-black border border-border" style={{ color: '#222', letterSpacing: '-1px' }}>
                  Projects
                  <div className="mt-2 text-lg md:text-xl font-body text-black font-normal" style={{ color: '#222' }}>
                    Empowering AP Police with technology-driven solutions for modern policing.
                  </div>
                </th>
              </tr>
              <tr className="sticky top-0 bg-blue-900 text-white">
                <th className="px-4 py-3 min-w-[80px] text-center text-lg font-extrabold text-white border border-blue-200 whitespace-nowrap">S No</th>
                <th className="px-4 py-3 min-w-[220px] text-center text-lg font-extrabold text-white border border-blue-200 whitespace-nowrap">Name of the Project</th>
                <th className="px-4 py-3 min-w-[400px] text-center text-lg font-extrabold text-white border border-blue-200 whitespace-nowrap">About</th>
                <th className="px-4 py-3 min-w-[180px] text-center text-lg font-extrabold text-white border border-blue-200 whitespace-nowrap">Link</th>
              </tr>
            </thead>
            <tbody>
              {paginatedProjects.map((project, idx) => (
                <tr key={idx}>
                  <td className="px-3 py-2 text-[13px] font-bold text-blue-800 border border-blue-200 text-center">{(currentPage - 1) * rowsPerPage + idx + 1}</td>
                  <td className="px-3 py-2 text-[14px] font-bold text-blue-800 border border-blue-200 text-center">{project.title}</td>
                  <td className="px-3 py-2 text-[13px] text-foreground border border-blue-200 text-center">{project.description}</td>
                  <td className="px-3 py-2 border border-blue-200 text-center">
                    {project.links && project.links.map(link => (
                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-500 font-medium hover:text-blue-600 transition-colors text-[13px]">
                        <LinkIcon className="w-4 h-4 text-orange-500" />
                        {link.label}
                      </a>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination controls */}
          <div className="flex justify-center mt-6">
            <nav className="flex items-center gap-2">
              <button
                className="px-2 py-1 rounded border border-border bg-muted text-yellow-500 font-bold hover:bg-yellow-100"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >&lt;&lt;</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                <button
                  key={num}
                  className={
                    `px-3 py-1 rounded border border-border font-bold ` +
                    (currentPage === num
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-muted text-yellow-500 hover:bg-yellow-100")
                  }
                  onClick={() => setCurrentPage(num)}
                >{num}</button>
              ))}
              <button
                className="px-2 py-1 rounded border border-border bg-muted text-yellow-500 font-bold hover:bg-yellow-100"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              >&gt;&gt;</button>
            </nav>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
