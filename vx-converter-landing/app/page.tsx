"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ChevronDown,
  Hash,
  Plus,
  Play,
  Menu,
  X,
  Zap,
  Link2,
  Layers,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const invite =
  "https://discord.com/oauth2/authorize?client_id=1162090895898857662&permissions=223232&integration_type=0&scope=bot";
const community = "https://discord.gg/entmj9fGxH";
const platforms = [
  {
    name: "X / Twitter",
    mark: "𝕏",
    handle: "studio.notes",
    link: "x.com/studionotes/status/18439271",
    caption: "A little space to get lost in. 🌿",
    type: "Photo",
    color: "green",
  },
  {
    name: "TikTok",
    mark: "♪",
    handle: "weekend.studio",
    link: "tiktok.com/@weekend.studio/video/7420198",
    caption: "Your daily dose of outside. ✨",
    type: "Video",
    color: "blue",
  },
  {
    name: "Instagram",
    mark: "◎",
    handle: "slow.sundays",
    link: "instagram.com/p/DA3studio/",
    caption: "Less scrolling. More wandering. ☀️",
    type: "Photo",
    color: "pink",
  },
];
const faqs = [
  [
    "What does VX Converter actually do?",
    "VX Converter detects supported social links in your Discord channels and converts them into rich embeds, so your community can see the content directly in the conversation.",
  ],
  [
    "Which platforms can I share from?",
    "VX Converter supports X (Twitter), TikTok, and Instagram links. Choose a platform in the preview above to see an example.",
  ],
  [
    "Is VX Converter free?",
    "Yes. The core bot is free to add to your Discord server.",
  ],
  [
    "What permissions do I need?",
    "You need permission to invite bots or manage integrations in your server. Discord will show the permissions requested by VX Converter before you authorize it.",
  ],
  [
    "Where can I get help?",
    "Join our Discord community for setup help, bug reports, and feature requests. Use the community link below to get in touch.",
  ],
];

function Brand({ small = false }: { small?: boolean }) {
  return (
    <a
      href="#"
      className={`brand ${small ? "small" : ""}`}
      aria-label="VX Converter home"
    >
      <span className="brand-mark">
        v<span>×</span>
      </span>
      <span>
        vx<span className="brand-light">converter</span>
        <span className="brand-dot">.</span>
      </span>
    </a>
  );
}
function InviteButton({
  className = "",
  label = "Add to Discord",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      className={`button button-primary ${className}`}
      href={invite}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <ArrowUpRight size={18} />
    </a>
  );
}
function Landscape({ variant }: { variant: string }) {
  return (
    <div
      className={`landscape ${variant}`}
      role="img"
      aria-label="Illustrated mountain landscape with a sun, rolling hills, and a river"
    >
      <div className="landscape-grain" />
      <div className="sun" />
      <div className="mountain mountain-back" />
      <div className="mountain mountain-front" />
      <div className="river" />
      <span className="landscape-label">a moment outside.</span>
    </div>
  );
}

export default function Home() {
  const [platform, setPlatform] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [converted, setConverted] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const current = platforms[platform];
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="header">
        <div className="container header-inner">
          <Brand />
          <nav
            id="mobile-navigation"
            className={menuOpen ? "navigation open" : "navigation"}
            aria-label="Main navigation"
          >
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How it works
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
            <a href={community} target="_blank" rel="noopener noreferrer">
              Support <ArrowUpRight size={12} />
            </a>
            <InviteButton className="mobile-invite" />
          </nav>
          <InviteButton className="header-invite" />
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> SMALL BOT. BETTER CONVERSATIONS.
            </div>
            <h1>
              Good links.
              <br />
              Great{" "}
              <span className="accent-word">
                embeds.
                <svg
                  viewBox="0 0 420 16"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M3 12 Q180 -3 416 9" />
                </svg>
              </span>
            </h1>
            <p>
              Your favorite content deserves more than a URL.
              <br className="desktop-break" /> Turn social links into rich
              Discord embeds.
              <br className="desktop-break" /> Automatically. Effortlessly.
            </p>
            <div className="hero-actions">
              <InviteButton label="Add to your server" />
              <a className="button button-quiet" href="#demo">
                <span className="play-icon">
                  <Play size={11} fill="currentColor" />
                </span>
                See it in action
              </a>
            </div>
            <div className="hero-notes">
              <span>
                <Check size={14} /> Free to use
              </span>
              <span>
                <Check size={14} /> No commands needed
              </span>
              <span>
                <Check size={14} /> Set up in seconds
              </span>
            </div>
          </div>
          <div className="hero-visual" id="demo">
            <div className="preview-note">
              <Sparkles size={15} /> A little link magic <span>↘</span>
            </div>
            <div className="discord-window">
              <div className="window-top">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>YOUR SERVER, BUT BETTER</span>
                <span className="window-corner">↗</span>
              </div>
              <div className="channel-bar">
                <Hash size={20} />
                <strong>share-something-good</strong>
                <span className="channel-divider" />
                <span>the good stuff lives here</span>
              </div>
              <div className="chat-body">
                <div className="chat-message">
                  <div className="avatar human">j</div>
                  <div>
                    <div className="message-author">
                      jules <span>Today at 10:24 AM</span>
                    </div>
                    <p>okay, you need to see this</p>
                    <span className="chat-link">https://{current.link}</span>
                  </div>
                </div>
                <div className="conversion-line">
                  <span />
                  <button
                    onClick={() => setConverted(!converted)}
                    aria-pressed={converted}
                  >
                    <Zap size={12} />
                    {converted ? "VX did its thing" : "Click to convert"}
                    <ArrowRight size={12} />
                  </button>
                  <span />
                </div>
                <div
                  className={`chat-message bot-message ${converted ? "" : "unconverted"}`}
                >
                  <div className="avatar bot">v×</div>
                  <div className="bot-content">
                    <div className="message-author">
                      VX Converter <span className="app-badge">✓ APP</span>
                      <span>Today at 10:24 AM</span>
                    </div>
                    {converted ? (
                      <div className="embed-card">
                        <div className="embed-meta">
                          <span className="platform-mark">{current.mark}</span>
                          <strong>{current.handle}</strong>
                          <ArrowUpRight size={13} />
                        </div>
                        <p>{current.caption}</p>
                        <Landscape variant={current.color} />
                        <div className="embed-bottom">
                          <span>
                            {current.name} · {current.type}
                          </span>
                          <span>
                            <MessageCircle size={11} /> 24 <span>♡ 128</span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="pending-embed">
                        <Link2 size={22} />
                        <p>A link is just the beginning.</p>
                        <button onClick={() => setConverted(true)}>
                          Show the rich embed <ArrowRight size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="message-input">
                  <Plus size={17} />
                  <span>Message #share-something-good</span>
                  <span className="input-smile">☺</span>
                </div>
              </div>
            </div>
            <div
              className="platform-tabs"
              role="group"
              aria-label="Choose a preview platform"
            >
              {platforms.map((item, index) => (
                <button
                  key={item.name}
                  aria-pressed={platform === index}
                  onClick={() => {
                    setPlatform(index);
                    setConverted(true);
                  }}
                  className={platform === index ? "active" : ""}
                >
                  <span>{item.mark}</span>
                  {item.name}
                </button>
              ))}
            </div>
            <div className="preview-caption">
              Interactive preview · try a different platform
            </div>
          </div>
        </section>
        <section className="platform-strip">
          <div className="container platform-strip-inner">
            <span>
              FROM YOUR FEED.
              <br />
              <strong>INTO YOUR CONVERSATION.</strong>
            </span>
            <div>
              <span className="social-logo">𝕏</span>Twitter / X
            </div>
            <div>
              <span className="social-logo">♪</span>TikTok
            </div>
            <div>
              <span className="social-logo">◎</span>Instagram
            </div>
            <span className="strip-end">
              One bot. All the good stuff.
              <ArrowUpRight size={18} />
            </span>
          </div>
        </section>
        <section className="features container section-space" id="features">
          <div className="section-heading">
            <div>
              <div className="eyebrow">LESS FRICTION. MORE CONNECTION.</div>
              <h2>
                Made for the way
                <br />
                you actually share.
              </h2>
            </div>
            <p>
              No more broken previews or “open the link.”
              <br />
              Just the content, right where the conversation is.
            </p>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">
                <Layers size={22} />
              </div>
              <span className="feature-number">01 /</span>
              <h3>One bot. Your favorite platforms.</h3>
              <p>
                From a tweet worth sharing to a TikTok you can’t stop watching.
                Bring X, TikTok, and Instagram into one place.
              </p>
              <div className="mini-platforms">
                <span>𝕏</span>
                <span>♪</span>
                <span>◎</span>
                <ArrowRight size={18} />
                <span className="mini-vx">v×</span>
              </div>
            </article>
            <article className="feature-card featured">
              <div className="feature-icon">
                <Sparkles size={22} />
              </div>
              <span className="feature-number">02 /</span>
              <h3>Links with a little more life.</h3>
              <p>
                Photos, videos, and context in rich embeds. Give your community
                something to react to, without leaving Discord.
              </p>
              <div className="mini-embed">
                <span className="mini-image" />
                <div>
                  <i />
                  <i />
                  <i />
                </div>
                <span className="mini-heart">♡</span>
              </div>
            </article>
            <article className="feature-card">
              <div className="feature-icon">
                <Zap size={22} />
              </div>
              <span className="feature-number">03 /</span>
              <h3>Share it. We’ll handle the rest.</h3>
              <p>
                Paste a link like you always do. VX Converter picks it up
                automatically. No extra commands, no extra steps.
              </p>
              <div className="mini-auto">
                <span>
                  <Link2 size={17} /> Paste a link
                </span>
                <ArrowRight size={17} />
                <span className="auto-check">
                  <Check size={17} />
                </span>
              </div>
            </article>
          </div>
        </section>
        <section className="setup-section" id="how-it-works">
          <div className="container setup-inner">
            <div className="setup-copy">
              <div className="eyebrow">THREE STEPS. THAT’S IT.</div>
              <h2>
                A better server.
                <br />
                In a few clicks.
              </h2>
              <p>
                Less time setting up.
                <br />
                More time sharing something good.
              </p>
              <InviteButton />
            </div>
            <div className="steps">
              {[
                {
                  title: "Make yourself at home.",
                  text: "Invite VX Converter to your Discord server and approve the requested permissions.",
                  icon: Plus,
                },
                {
                  title: "Drop a link.",
                  text: "Share an X, TikTok, or Instagram link in your channel. Just like you normally would.",
                  icon: Link2,
                },
                {
                  title: "Let the conversation happen.",
                  text: "VX turns your link into a rich embed. Your community takes it from there.",
                  icon: MessageCircle,
                },
              ].map((step, index) => (
                <div className="step" key={step.title}>
                  <span className="step-count">0{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                  <step.icon size={21} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="faq-section container section-space" id="faq">
          <div>
            <div className="eyebrow">GOOD QUESTIONS.</div>
            <h2>
              A little more
              <br />
              context.
            </h2>
            <p>Still curious about something?</p>
            <a
              href={community}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Let’s chat on Discord <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div className="faq-item" key={question}>
                <h3>
                  <button
                    aria-expanded={openFaq === index}
                    aria-controls={`answer-${index}`}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    {question}
                    <ChevronDown
                      size={18}
                      className={openFaq === index ? "rotated" : ""}
                    />
                  </button>
                </h3>
                <div id={`answer-${index}`} hidden={openFaq !== index}>
                  <p>{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="container closing-section">
          <div className="closing-card">
            <span className="closing-star" aria-hidden="true">
              ✳
            </span>
            <div className="eyebrow">
              YOUR NEXT GOOD CONVERSATION STARTS HERE.
            </div>
            <h2>
              Give your links
              <br />a better landing.
            </h2>
            <InviteButton label="Bring VX to your server" />
            <p>Free to add. Easy to love.</p>
            <div className="closing-decoration" aria-hidden="true">
              <Link2 />
              <ArrowUpRight />
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <div className="footer-top">
          <div>
            <Brand small />
            <p>A little bot for better sharing.</p>
          </div>
          <div className="footer-links">
            <a href={community} target="_blank" rel="noopener noreferrer">
              Community <ArrowUpRight size={13} />
            </a>
            <a
              href="https://docs.google.com/document/d/1lDNjxq60lZmUBwi0RXHSKhAAoRyc1se35gkNd8d2ZSk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy policy
            </a>
            <a
              href="https://docs.google.com/document/d/1EfyWvaYlDk6xzF7MqABlBBl-L9nE2S9ZwN9uA-ab5F8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of service
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} VX Converter</span>
          <span>
            Made for your corner of the internet.{" "}
            <span className="footer-spark">✳</span>
          </span>
        </div>
      </footer>
    </>
  );
}
