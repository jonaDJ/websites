import "./App.css";
import me from "./assets/img/my_avatar.png";
import netflix from "./assets/img/netflix.jpg";
import ecom from "./assets/img/ecom.jpg";
import wordpress from "./assets/img/wordpress.jpg";
import brainotopus from "./assets/img/brainotopus.png";
import jobAutofill from "./assets/img/job_autofill.jpg";

const recruiterLinks = {
  linkedin: "https://www.linkedin.com/in/jonathd/",
  github: "https://github.com/jonaDJ",
};

const projects = [
  {
    id: "portfolio",
    title: "Interactive Portfolio",
    image: me,
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
    title: "Job Autofill Extension",
    image: jobAutofill,
    category: "Chrome extension",
    status: "Open source",
    url: "https://github.com/jonaDJ/job-autofill-extension",
    description:
      "Chrome extension that auto-fills repetitive job form fields with one click to speed up application workflows.",
  },
];

function App() {
  return (
    <main className="hub">
      <section className="hero-panel">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Frontend + Responsive Web Developer</p>
            <h1>Project Hub Built for Recruiters</h1>
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
                href={recruiterLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Contact on LinkedIn
              </a>
              <a
                href={recruiterLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Review GitHub
              </a>
            </div>
          </div>

          <aside className="hero-note">
            <h2>Quick review path</h2>
            <ol>
              <li>Open live projects from the cards below</li>
              <li>Review implementation details on GitHub</li>
              <li>Connect with me for role discussion</li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="projects-section" aria-label="Projects">
        <div className="section-heading">
          <h2>Selected Work</h2>
          <p>Real projects with practical frontend and responsive outcomes.</p>
        </div>

        <div className="card-grid">
          {projects.map((project, index) => (
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
                <div className="project-meta">
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
                  Open Project
                </a>
              ) : (
                <span className="card-link card-link-disabled">Link Updating</span>
              )}
            </article>
          ))}
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
