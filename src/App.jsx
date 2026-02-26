import { useState } from "react";
import "./App.css";
import desktopAvatar from "./assets/img/avatar/avatar_3445.png";
import mobileAvatar from "./assets/img/avatar/avatar_3447.png";
import portfolioPreview from "./assets/img/portfolio.png";
import netflix from "./assets/img/netflix.jpg";
import ecom from "./assets/img/ecom.jpg";
import wordpress from "./assets/img/wordpress.jpg";
import brainotopus from "./assets/img/brainotopus.png";
import jobAutofill from "./assets/img/job_autofill.jpg";

const profileLinks = {
  linkedin: "https://www.linkedin.com/in/jonathd/",
  github: "https://github.com/jonaDJ",
};

const projects = [
  {
    id: "portfolio",
    title: "Interactive Portfolio",
    image: portfolioPreview,
    category: "Portfolio",
    status: "Live production",
    url: "https://portfolio-repo-swart.vercel.app/",
    description:
      "A blog-style portfolio with project walkthroughs, personal story, and a layout designed for phones first.",
  },
  {
    id: "netflix-clone",
    title: "Netflix-Style Streaming UI",
    image: netflix,
    category: "Frontend clone",
    status: "Live demo",
    url: "https://netflix-like-tawny.vercel.app/",
    description:
      "Streaming-style interface with sliders, search, and a persistent watchlist to demonstrate component-driven state.",
  },
  {
    id: "brainotopus",
    title: "BrainoTopus Puzzle Hub",
    image: brainotopus,
    category: "Game site",
    status: "Unlimited rounds",
    url: "https://braino-topus.vercel.app/",
    description:
      "A game site I created to replicate NYT-style puzzle gameplay with unlimited rounds and replay value.",
  },
  {
    id: "ecommerce",
    title: "E-commerce Store",
    image: ecom,
    category: "Online store",
    status: "Demo link updating",
    url: "",
    description:
      "Storefront, cart flow, and checkout simulation backed by a hosted server. Demo link is currently being refreshed.",
  },
  {
    id: "wordpress",
    title: "WordPress Food Blog",
    image: wordpress,
    category: "Food + lifestyle",
    status: "Production",
    url: "https://balancedbiteprep.com/",
    description:
      "A production WordPress food blog/business site focused on content publishing, branding, and conversion-friendly sections.",
  },
  {
    id: "job-autofill",
    title: "Job Autofill Chrome Extension",
    image: jobAutofill,
    category: "Productivity tool",
    status: "Open-source repository",
    url: "https://github.com/jonaDJ/job-autofill-extension",
    ctaLabel: "View Repository",
    description:
      "A Chrome extension that pre-fills repetitive application fields in one click, reducing manual input during job applications.",
  },
];

function App() {
  const [showQuickGuide, setShowQuickGuide] = useState(false);

  return (
    <main className="hub">
      <section className="hero-panel">
        <div className="hero-grid">
          <div>
            <div className="hero-top-row">
              <div className="hero-top-text">
                <p className="eyebrow">Frontend + Responsive Web Developer</p>
                <div className="hero-headline">
                  <h1>Project Hub Built for Fast Review</h1>
                </div>
              </div>
              <img
                src={mobileAvatar}
                alt="jonaDJ avatar"
                className="hero-avatar-compact"
                loading="lazy"
              />
            </div>
            <p className="hero-copy">
              This is a direct path through my work. Each project card links to
              a live product demo, production site, or source repository so you
              can evaluate both design decisions and implementation quality fast.
            </p>
            <div className="hero-tags">
              <span>UI Engineering</span>
              <span>Responsive Systems</span>
              <span>Production Delivery</span>
            </div>
            <div className="hero-actions">
              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Contact on LinkedIn
              </a>
              <a
                href={profileLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Review GitHub
              </a>
              <button
                type="button"
                className="btn btn-tertiary"
                onClick={() => setShowQuickGuide((prev) => !prev)}
                aria-expanded={showQuickGuide}
                aria-controls="quick-guide"
              >
                {showQuickGuide ? "Back to Avatar" : "Show Quick Guide"}
              </button>
            </div>
          </div>

          <aside
            id="quick-guide"
            className={`review-rail ${showQuickGuide ? "review-rail-visible" : "review-rail-hidden"}`}
            aria-label="Quick review guide"
          >
            <div className="review-placeholder" aria-hidden={showQuickGuide}>
              <img
                src={desktopAvatar}
                alt="jonaDJ avatar"
                className="placeholder-avatar"
                loading="lazy"
              />
            </div>

            <div className="review-guide" aria-hidden={!showQuickGuide}>
              <p className="review-label">Quick Shortcut</p>
              <h2>60-Second Review Flow</h2>
              <ul className="review-list">
                <li>
                  <span className="review-index">01</span>
                  <div>
                    <h3>Open a Live Demo</h3>
                    <p>Use any project card to quickly review the shipped product experience.</p>
                  </div>
                </li>
                <li>
                  <span className="review-index">02</span>
                  <div>
                    <h3>Check the Code</h3>
                    <p>Inspect implementation details, structure, and technical decisions on GitHub.</p>
                  </div>
                </li>
                <li>
                  <span className="review-index">03</span>
                  <div>
                    <h3>Start a Conversation</h3>
                    <p>Connect on LinkedIn if any project aligns with your goals.</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="projects-section" aria-label="Projects">
        <div className="section-heading">
          <h2>Selected Work</h2>
          <p>Real projects with practical frontend and responsive outcomes.</p>
        </div>

        <div className="card-grid">
          {projects.map((project, index) => {
            const isLiveStatus = /live|production/i.test(project.status);

            return (
              <article
                className={`project-card ${
                  project.url ? "" : "project-card-disabled"
                }`}
                key={project.id}
                style={{ "--delay": `${index * 75}ms` }}
              >
                <div className="project-media">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <span className="media-label">{project.category}</span>
                </div>

                <div className="project-body">
                  <div className={`project-meta ${isLiveStatus ? "project-meta-live" : ""}`.trim()}>
                    <span className="status-dot" aria-hidden="true" />
                    <span>{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    {project.ctaLabel ?? "Open Project"}
                  </a>
                ) : (
                  <span className="card-link card-link-disabled">Link Updating</span>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <footer className="hub-footer">
        <h2>Why this hub</h2>
        <div className="footer-points">
          <span>One index for all core projects</span>
          <span>Mobile and desktop friendly navigation</span>
          <span>Direct links for quick technical review</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
