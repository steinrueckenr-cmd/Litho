"use client";

import { FormEvent, useState } from "react";

const portfolioItems = [
  {
    title: "Portraits",
    href: "#portraits",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=88",
    alt: "Editorial-Portrait einer Frau im weichen Fensterlicht",
  },
  {
    title: "Couples",
    href: "#couples",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=88",
    alt: "Inniger Moment eines Paares",
  },
  {
    title: "Weddings",
    href: "#weddings",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=88",
    alt: "Brautpaar auf dem Weg zu seiner Hochzeit",
  },
];

const services = [
  {
    number: "01",
    title: "Portrait Sessions",
    text: "Zeitlose Portraits, die Persönlichkeit sichtbar machen. Natürlich, modern und individuell.",
  },
  {
    number: "02",
    title: "Couple Shoots",
    text: "Intime Paarshootings in Köln und Umgebung. Authentisch, verbunden und echt.",
  },
  {
    number: "03",
    title: "Wedding Stories",
    text: "Reportagen voller Gefühl – von den leisen Momenten bis zu den großen Augenblicken.",
  },
];

const navItems = [
  ["Home", "#home"],
  ["Portfolio", "#portfolio"],
  ["Weddings", "#weddings"],
  ["Portraits", "#portraits"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LITHO Fotografie",
  description: "Portrait-, Paar- und Hochzeitsfotografie in Köln und NRW.",
  areaServed: ["Köln", "Nordrhein-Westfalen"],
  serviceType: ["Portraitfotografie", "Paarfotografie", "Hochzeitsfotografie"],
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="LITHO – Startseite">
          LITHO
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Hauptnavigation"
        >
          {navItems.map(([label, href], index) => (
            <a
              key={label}
              className={index === 0 ? "active" : ""}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">Portraits · Couples · Weddings</p>
            <h1 id="hero-title">LITHO</h1>
            <p className="hero-subtitle">
              Portrait &amp; Wedding Photography Studio — Cologne
            </p>
            <p className="hero-claim">Quiet moments, honestly told.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#portfolio">
                Portfolio ansehen
              </a>
              <a className="button button-outline" href="#contact">
                Anfrage senden
              </a>
            </div>
          </div>
          <a className="scroll-cue" href="#portfolio" aria-label="Zum Portfolio scrollen">
            <span>Scroll</span>
            <i />
          </a>
        </section>

        <section className="portfolio-section content-shell" id="portfolio">
          <div className="section-intro">
            <p>
              LITHO dokumentiert moderne Portraits,
              <br />
              intime Paarmomente und emotionale
              <br />
              Hochzeiten mit ruhiger, zeitloser Bildsprache.
            </p>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <a
                className="portfolio-card"
                id={index === 0 ? "portraits" : index === 1 ? "couples" : "weddings"}
                href={item.href}
                key={item.title}
              >
                <div className="portfolio-image-wrap">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </div>
                <div className="portfolio-card-footer">
                  <h2>{item.title}</h2>
                  <span aria-hidden="true">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="about-section content-shell" id="about">
          <div className="about-image" role="img" aria-label="Fotograf mit Kamera am Fenster" />
          <div className="about-copy">
            <p className="eyebrow">About</p>
            <span className="small-rule" />
            <h2>Fotografie, die sich nach euch anfühlt.</h2>
            <p>
              Ich fotografiere Menschen so, wie sie sich wirklich anfühlen:
              ruhig, ehrlich und nahbar. Meine Arbeit verbindet moderne
              Editorial-Ästhetik mit emotionalem Storytelling.
            </p>
            <a className="button button-sand" href="#contact">
              Mehr über mich
            </a>
          </div>
        </section>

        <section className="services-section content-shell" aria-labelledby="services-title">
          <div className="section-label">
            <span />
            <p className="eyebrow" id="services-title">
              Meine Leistungen
            </p>
            <span />
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <span className="service-number" aria-hidden="true">
                  {service.number}
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner content-shell">
            <div className="contact-copy">
              <p className="eyebrow">Get in touch</p>
              <h2 id="contact-title">Erzähl mir von deiner Geschichte.</h2>
              <span className="small-rule" />
              <p>Ich freue mich, mehr über euch und eure Pläne zu erfahren.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span>Name</span>
                <input name="name" placeholder="Name" autoComplete="name" required />
              </label>
              <label>
                <span>E-Mail</span>
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  autoComplete="email"
                  required
                />
              </label>
              <label>
                <span>Shooting-Art</span>
                <select name="shooting" defaultValue="" required>
                  <option value="" disabled>
                    Shooting-Art
                  </option>
                  <option>Portrait</option>
                  <option>Couple</option>
                  <option>Wedding</option>
                </select>
              </label>
              <label>
                <span>Wunschtermin</span>
                <input type="date" name="date" aria-label="Wunschtermin" />
              </label>
              <label className="full-width">
                <span>Ort</span>
                <input name="location" placeholder="Ort" autoComplete="address-level2" />
              </label>
              <label className="full-width">
                <span>Nachricht</span>
                <textarea name="message" placeholder="Nachricht" rows={4} required />
              </label>
              <button className="form-submit full-width" type="submit">
                Anfrage senden
              </button>
              <p className={submitted ? "form-success is-visible" : "form-success"} role="status">
                Danke – deine Anfrage ist vorgemerkt. Verbinde das Formular vor dem
                Livegang noch mit deinem E-Mail-Dienst.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner content-shell">
          <div>
            <a className="wordmark footer-wordmark" href="#home">
              LITHO
            </a>
            <p>Portrait &amp; Wedding Photography Studio</p>
            <p>Cologne / NRW</p>
          </div>

          <div className="social-links" aria-label="Social Media">
            <a href="#contact">Instagram</a>
            <a href="#contact">Pinterest</a>
            <a href="mailto:hello@litho-studio.de">E-Mail</a>
          </div>

          <p className="copyright">© {new Date().getFullYear()} LITHO — Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </>
  );
}
