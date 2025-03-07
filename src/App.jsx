import React, { useState } from "react";
import "./App.css";
import me from "./assets/img/my_avatar.png";
import netflix from "./assets/img/netflix.jpg";
import ecom from "./assets/img/ecom.jpg";
import wordpress from "./assets/img/wordpress.jpg";
import git from "./assets/img/git.jpg";
import linkedin from "./assets/img/linkedin.jpg";

const cards = [
  {
    id: "01_card",
    name: "Interactive Portfolio",
    image: me,
    url: "https://portfolio-repo-swart.vercel.app/",
    description:
      "This isn’t your typical portfolio—it’s a mobile-first, blog-style experience! Packed with projects, an 'About Me' section (everyone’s favorite, hehe), and a fresh way to showcase my work. Grab your phone and check it out—it’s a whole new experience!",
  },
  {
    id: "02_card",
    name: "Netflix Like (No Login Hassle!)",
    image: netflix,
    url: "https://netflix-like-tawny.vercel.app/",
    description:
      "Skipped the login/auth pages—this Netflix clone takes you straight to the fun! Featuring cool sliders, Top 10 lists, a search bar, and even a watchlist that actually stores your picks. It’s not just a showcase; it’s interactive!",
  },
  {
    id: "03_card",
    name: "E-commerce Store (Slow but Steady!)",
    image: ecom,
    url: "https://your-ecommerce-store-url.com/",
    description:
      "Built with Render as the server, so apologies if it’s a bit slow to load. But hey, it’s got cool features like a dummy PayPal checkout. Try adding items to your cart and pretend to buy something—it’s fun!",
  },
  {
    id: "04_card",
    name: "WordPress MealPrep Site",
    image: wordpress,
    url: "https://balancedbiteprep.com/",
    description:
      "I’ve always wanted to create a WordPress site, and I combined my love for cooking and meal prep into this project. It’s a blend of WordPress, Shopify, and Wix vibes—check it out!",
  },
  {
    id: "05_card",
    name: "GitHub Repo",
    image: git,
    url: "https://github.com/jonaDJ",
    description:
      "My GitHub repository is home to all my projects and code samples. Nothing fancy to say here—just dive in and explore!",
  },
  {
    id: "06_card",
    name: "LinkedIn Profile",
    image: linkedin,
    url: "https://www.linkedin.com/in/jonathd/",
    description:
      "My LinkedIn profile for professional networking. Connect with me if you’d like to chat about opportunities or collaborations!",
  },
];

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="app-container">
      <div className="content-container">
        <h1 className="main-heading">Urls</h1>
        <p className="main-description">
          These are some of my important links and projects. Instead of
          constantly updating my resume or relying on free servers that may
          expire, I decided to use GitHub.io as a central hub for all my links.
          This way, I can easily update them in one place—fast, free, and
          efficient. Pretty cool, right? Feel free to explore!
        </p>
        <p className="main-note">
          <strong>Tip:</strong> Check out the descriptions on the cards—they’ll
          guide you on how to use the apps/websites better!
        </p>
      </div>
      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${hoveredCard === card.id ? "card-hovered" : ""}`}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <a href={card.url} target="_blank" rel="noopener noreferrer">
              <img src={card.image} alt={card.name} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{card.name}</h3>
                <p
                  className={`card-description ${
                    hoveredCard === card.id ? "show" : ""
                  }`}
                >
                  {card.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
