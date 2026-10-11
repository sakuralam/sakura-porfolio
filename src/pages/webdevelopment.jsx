import React from "react";
import "../styles/WebDevelopment.css";
import headerImg from "../assets/webdevelopment.png";
import chiyodaImg from "../assets/chiyodakohanwensite.png"; // check this filename spelling
import upsilonImg from "../assets/upsilonaiwebsite.png";

const WebDevelopment = () => {
  return (
    <section className="webdev-section">
      {/* Section Header */}
      <div className="webdev-header">
        <img
          src={headerImg}
          alt="Web Development Banner"
          className="webdev-banner"
        />
        <h1 className="webdev-title">Web Development Projects</h1>
      </div>

      {/* Project 1: Chiyoda Kohan Singapore */}
      <div className="webdev-project">
        <img
          src={chiyodaImg}
          alt="Chiyoda Kohan Website"
          className="webdev-image"
        />

        <div className="webdev-details">
          <h2 className="webdev-name">Chiyoda Kohan Singapore</h2>

          <p className="webdev-description">
            I built and deployed Chiyoda Kohan Singapore’s official company
            website from the ground up, handling both frontend and backend
            workflows as well as hosting. The site features a responsive,
            modular Next.js frontend optimized for clarity and performance,
            with secure contact form handling via Formspree to avoid server
            overhead. I deployed the project on Vercel and managed DNS
            configuration and domain propagation for their branded domain,{" "}
            <strong>chiyodakohan.sg</strong>, delivering a polished and
            professional online presence.
          </p>

          <div className="webdev-links">
            <a
              href="https://chiyodakohan.sg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website Link
            </a>
            <a
              href="https://github.com/sakuralam03/chiyodakohanwebsite"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </a>
          </div>
        </div>
      </div>

      {/* Project 2: Upsilon AI */}
      <div className="webdev-project">
        <img
          src={upsilonImg}
          alt="Upsilon AI Website"
          className="webdev-image"
        />

        <div className="webdev-details">
          <h2 className="webdev-name">Upsilon AI</h2>

          <p className="webdev-description">
            I built the Upsilon AI website using React and Vite, which gave me
            valuable hands-on experience in modern frontend development.
            Through this project, I learned how to structure a clean and
            scalable folder architecture, making the codebase more modular and
            maintainable. I also gained practical knowledge in hosting
            workflows, from configuring builds to deploying the site live,
            which helped me understand the full lifecycle of a web
            application—from development to deployment.
          </p>

          <div className="webdev-links">
            <a
              href="https://upsilonai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website Link
            </a>
            <a
              href="https://github.com/sakuralam03/upsilonai"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </a>
          </div>
        </div>
      </div>

      {/* Project 3: AI-Powered Literacy Reporting System */}
      <div className="webdev-project">
        <iframe
          className="webdev-video"
          src="https://www.youtube.com/embed/2svZMRs3QVk"
          title="AI-Powered Literacy Reporting System Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="webdev-details">
          <h2 className="webdev-name">AI-Powered Literacy Reporting System</h2>

          <p className="webdev-description">
            Developed a full-stack reporting system featuring AI-powered
            literacy progress reports for parents and therapists. Integrated
            the Anthropic Claude API with database-backed assessment data to
            generate parent-friendly summaries and clinical reports in PDF,
            TXT, and DOCX formats. Implemented Express.js API endpoints,
            parameterised SQL queries to prevent SQL injection, report caching,
            and request timeouts to improve reliability. Also developed an
            AI-powered parent dashboard profile card featuring student progress
            summaries and peer-average comparisons. Built a comprehensive
            testing suite covering unit, integration, component, and fuzz
            testing to validate functionality, error handling, and robustness.
          </p>

          <div className="webdev-links">
            <a
              href="https://youtu.be/2svZMRs3QVk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Demo on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;