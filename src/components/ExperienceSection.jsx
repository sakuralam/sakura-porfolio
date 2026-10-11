import React from "react";
import "../styles/ExperienceSection.css";

const experiences = [

    {
    title: "Cybersecurity Intern – iTrust",
    date: "May 2026 – September 2026",
    bullets: [
      "1.ICS Honeypot",
      "Extended a Honeyd-based ICS honeypot emulating four Siemens S7 PLCs. Exposed S7comm on port 102 through proxy bridging, so emulated devices returned valid S7-1200 identity data to Nmap NSE probes.",
      "Eliminated four deception tells that would reveal the honeypot under inspection: Replaced random-jitter sensor noise with a correlated, deterministic load model; aligned the Modbus and web interfaces so they reported the same values; implemented spec-correct responses for writes (FC 6/16) and exceptions for unsupported function codes.",
      "Diagnosed four silent, cascading faults that had halted the attacker-intelligence pipeline after a migration, including a stale IP filter that discarded 100% of traffic and a file-ordering bug that skipped all new captures, and restored end-to-end event flow.",
      "Designed outbound containment through a gateway using iptables DNAT, FORWARD, and MASQUERADE rules. Attacker traffic for DNS, HTTP, Telnet, SMB, and RDP was redirected to a sinkhole host that returns realistic responses, so it never reached the internet. Each path was verified through logs.",
      "2. Power Grid Digital Twin (CISS26 National ICS Security Exercise)",
      "Deployed and maintained a containerised digital twin of a 7-substation power grid (IEDs, PLCs, SCADA/HMI, historian, pandapower) communicating over IEC 61850 MMS and GOOSE.",
      "Designed CTF challenges built on realistic attacks: false sensor injection that triggered real undervoltage protection logic; spoofed breaker states that created physically impossible historian records; forged GOOSE trip frames crafted with Scapy to impersonate IEDs.",
      "Cross-validated IEC 61850 packet captures against historian records in Wireshark to produce forensic evidence for participants.",
      "Automated parallel SSH health checks across 70 competition nodes."
    ],
    skills: [
      "Python, Docker, Linux, iptables, Honeyd, Scapy, Wireshark, tcpdump, Modbus/TCP, S7comm, IEC 61850 (MMS/GOOSE), pandapower"
    ],
  },
  {
    title: "Fullstack Developer – SUTD",
    date: "October 2025 – January 2026",
    bullets: [
      "Designed a study planner web app that allowed students to plan courses across terms.",
      "Connected Google Sheets via Sheets API so administrators could update tracks and view them directly.",
      "Developed backend logic to evaluate graduation criteria and validate requirements.",
      "Integrated MongoDB to store personalized study plans by student ID.",
      "Created a security system with role-based data selections and validation.",
      "Built a resume builder with a review panel for standardized resume formatting.",
      "Implemented login and session management with JWT tokens, password reset via NodeMailer.",
    ],
    skills: [
      "React", "Express", "MongoDB", "HTML", "CSS", "Backend Iteration", "Javascript", "Hosting Fullstack Project"
    ],
  },
  {
    title: "Web Development Intern – Upsilon AI",
    date: "August – December 2025",
    bullets: [
      "Developed and refined React + Node.js components for the company’s website.",
      "Collaborated on Figma designs for a partner product, translating iterations into prototypes.",
      "Gained hands-on experience in frontend workflows and design iteration.",
    ],
    skills: [
      "React", "Node.js", "Frontend Iteration", "HTML", "CSS", "Figma"
    ],
  },
  {
    title: "Fullstack Development Intern – Chiyoda Kohan Singapore",
    date: "October 2025",
    bullets: [
      "Built and deployed the company’s official website from scratch.",
      "Developed a responsive frontend using Next.js, optimized for clarity and performance.",
      "Implemented backend form handling via Formspree for secure submissions.",
      "Configured DNS and deployed the site to chiyodakohan.sg via Vercel.",
    ],
    skills: [
      "React", "Javascript", "HTML", "CSS", "Hosting Domain", "Node.js"
    ],
  },


];

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">Work or Relevant Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-date">{exp.date}</p>
            <ul className="experience-bullets">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className="experience-skills">
              <strong>Skills picked up:</strong> {exp.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
