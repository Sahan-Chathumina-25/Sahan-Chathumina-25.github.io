import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Menu, X, Network,
  ShieldCheck, Server, Terminal, Code2, ExternalLink, ChevronRight,
  Cpu, Database, LockKeyhole, Activity, Layers3, Sparkles
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Sahan Chathumina",
  role: "Network Engineer & Cybersecurity Enthusiast",
  location: "Sri Lanka",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  email: "hello@example.com",
};

const skills = [
  { icon: Network, title: "Networking", text: "Routing, switching, VLANs, subnetting, DNS, DHCP, HAProxy and network troubleshooting." },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Ethical hacking fundamentals, security hardening, traffic analysis, access control and defensive practices." },
  { icon: Server, title: "Linux & Systems", text: "Rocky/CentOS administration, Apache, BIND, SSH, firewalls, auditd and system hardening." },
  { icon: Code2, title: "Development", text: "Web, software and automation projects with a practical, problem-solving mindset." },
  { icon: Database, title: "Database Security", text: "MySQL security, permissions, authentication, backups, replication and secure configurations." },
  { icon: Terminal, title: "Tools", text: "Git, GitHub, Nmap, Burp Suite, Wireshark/tshark, Linux CLI and virtualization labs." },
];

const projects = [
  {
    number: "01",
    title: "Secure Linux Baseline",
    category: "SYSTEM SECURITY",
    description: "A practical hardened Linux baseline using firewall controls, SSH key authentication, automatic updates, audit logging, ACLs and kernel security settings.",
    tags: ["Rocky Linux", "firewalld", "auditd", "SSH"],
  },
  {
    number: "02",
    title: "Network Infrastructure Lab",
    category: "NETWORKING",
    description: "Multi-service infrastructure lab covering DNS, DHCP, Apache virtual hosts, TLS certificates and load balancing in a virtualised environment.",
    tags: ["BIND", "DHCP", "Apache", "HAProxy"],
  },
  {
    number: "03",
    title: "Database Security Lab",
    category: "DATABASE",
    description: "Security-focused MySQL environment exploring privileges, authentication, hardening, replication, backups and failure monitoring.",
    tags: ["MySQL", "RBAC", "Backups", "Security"],
  },
  {
    number: "04",
    title: "GitHub Automation",
    category: "AUTOMATION",
    description: "Automated developer-profile statistics and portfolio data pipeline designed to keep public GitHub metrics current without manual editing.",
    tags: ["GitHub API", "Node.js", "Automation"],
  },
];

const architecture = [
  { label: "INTERNET", icon: Network, x: "50%", y: "9%" },
  { label: "FIREWALL", icon: ShieldCheck, x: "50%", y: "30%" },
  { label: "LOAD BALANCER", icon: Activity, x: "50%", y: "51%" },
  { label: "WEB / APP", icon: Server, x: "24%", y: "78%" },
  { label: "DATABASE", icon: Database, x: "50%", y: "78%" },
  { label: "MONITORING", icon: Cpu, x: "76%", y: "78%" },
];

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ["home", "about", "skills", "architecture", "projects", "certifications", "contact"];
      let current = "home";
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 180) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const year = new Date().getFullYear();

  const nav = ["about", "skills", "architecture", "projects", "certifications", "contact"];

  return (
    <div className="site">
      <div className="noise" />
      <div className="grid-bg" />

      <header className={scrolled ? "header scrolled" : "header"}>
        <a className="brand" href="#home" onClick={() => setMenu(false)}>
          <span className="brand-mark">SC</span>
          <span>SAHAN<span className="accent">.</span></span>
        </a>
        <nav className={menu ? "nav open" : "nav"}>
          {nav.map(item => (
            <a key={item} className={active === item ? "active" : ""} href={`#${item}`} onClick={() => setMenu(false)}>
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenu(false)}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setMenu(v => !v)}>
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="pulse" /> AVAILABLE FOR PROJECTS</div>
            <h1>Building the <span>network.</span><br/>Securing the <em>future.</em></h1>
            <p className="hero-text">
              I'm <strong>Sahan Chathumina</strong>, a network engineering student and cybersecurity enthusiast focused on secure infrastructure, Linux systems and practical technology.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="btn ghost" href="#contact">Get in touch</a>
            </div>
            <div className="hero-meta">
              <span><b>01</b> Network Engineering</span>
              <span><b>02</b> Cybersecurity</span>
              <span><b>03</b> Linux Systems</span>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="orb">
              <div className="orb-ring ring-a" />
              <div className="orb-ring ring-b" />
              <div className="orb-ring ring-c" />
              <div className="orb-core"><Network size={38}/></div>
              {["01","02","03","04","05","06"].map((n,i) => (
                <span key={n} className={`orbit-node n${i+1}`}>{n}</span>
              ))}
            </div>
            <div className="terminal-card">
              <div className="terminal-top"><span/><span/><span/><label>~/sahan</label></div>
              <div className="terminal-body">
                <p><i>$</i> whoami</p><p className="out">network_engineer</p>
                <p><i>$</i> system.status</p><p className="ok">● all systems operational</p>
                <p><i>$</i> secure --everything</p><p className="out">hardening infrastructure...</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section split">
          <div className="section-label">01 / ABOUT</div>
          <div className="section-content">
            <h2>Curious by nature.<br/><span>Technical by choice.</span></h2>
            <div className="about-grid">
              <p className="lead">I enjoy understanding how systems communicate, where they fail, and how to make them stronger.</p>
              <div>
                <p>My focus sits at the intersection of <strong>network engineering, Linux administration and cybersecurity</strong>. I learn by building real labs, breaking down problems and documenting practical solutions.</p>
                <p>Currently pursuing a BSc(Hons) in Ethical Hacking & Network Security, with an HND in Network Engineering. My portfolio is a living record of the systems, experiments and projects I build along the way.</p>
              </div>
            </div>
            <div className="stats">
              <div><strong>03+</strong><span>Core disciplines</span></div>
              <div><strong>∞</strong><span>Things to learn</span></div>
              <div><strong>24/7</strong><span>Curiosity</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">02 / SKILLS</div>
          <div className="section-content">
            <div className="section-head">
              <div><h2>Tools for <span>real problems.</span></h2><p>A practical toolkit built through coursework, labs and independent projects.</p></div>
              <span className="mono">STACK_2026</span>
            </div>
            <div className="skills-grid">
              {skills.map((s,i) => <article className="skill-card" key={s.title}>
                <div className="card-index">0{i+1}</div>
                <s.icon size={25}/>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="card-line"/>
              </article>)}
            </div>
          </div>
        </section>

        <section id="architecture" className="section architecture-section">
          <div className="section-label">03 / ARCHITECTURE</div>
          <div className="section-content">
            <div className="section-head">
              <div><h2>Think in <span>systems.</span></h2><p>An interactive visual of the way I approach secure infrastructure.</p></div>
            </div>
            <div className="architecture">
              <div className="scanline" />
              <svg className="connections" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M50 15 L50 30 L50 51 L24 78 M50 51 L50 78 M50 51 L76 78" />
              </svg>
              {architecture.map((a,i) => {
                const Icon = a.icon;
                return <div key={a.label} className={`arch-node node-${i+1}`} style={{left:a.x,top:a.y}}>
                  <div className="node-icon"><Icon size={21}/></div><span>{a.label}</span>
                </div>
              })}
              <div className="arch-caption"><LockKeyhole size={14}/> ZERO-TRUST MINDSET / DEFENCE IN DEPTH</div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-label">04 / PROJECTS</div>
          <div className="section-content">
            <div className="section-head"><div><h2>Built, tested, <span>documented.</span></h2><p>A selection of hands-on technical work.</p></div><a className="text-link" href={profile.github} target="_blank">View GitHub <ArrowUpRight size={15}/></a></div>
            <div className="projects">
              {projects.map(p => <article className="project" key={p.number}>
                <div className="project-num">{p.number}</div>
                <div className="project-main">
                  <span className="category">{p.category}</span>
                  <h3>{p.title} <ChevronRight size={21}/></h3>
                  <p>{p.description}</p>
                  <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                </div>
                <ExternalLink className="project-arrow" size={20}/>
              </article>)}
            </div>
          </div>
        </section>

        <section id="certifications" className="section split">
          <div className="section-label">05 / EDUCATION</div>
          <div className="section-content">
            <h2>Learning is part of<br/><span>the infrastructure.</span></h2>
            <div className="timeline">
              <div className="timeline-item">
                <span className="year">CURRENT</span><div><h3>BSc(Hons) Ethical Hacking & Network Security</h3><p>Building a deeper foundation across cybersecurity, networking, systems and secure computing.</p></div>
              </div>
              <div className="timeline-item">
                <span className="year">COMPLETED</span><div><h3>Higher National Diploma in Network Engineering</h3><p>Networking, infrastructure, administration and hands-on technical labs.</p></div>
              </div>
              <div className="timeline-item">
                <span className="year">COURSE</span><div><h3>Red Hat System Administration I</h3><p>Linux administration fundamentals, system management and command-line operations.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="github-strip">
          <div><Github size={25}/><div><span>OPEN SOURCE / GITHUB</span><strong>Code is where the work becomes visible.</strong></div></div>
          <a className="btn ghost" href={profile.github} target="_blank">Visit GitHub <ArrowUpRight size={16}/></a>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-inner">
            <div className="section-label">06 / CONTACT</div>
            <div className="contact-copy">
              <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
              <h2>Let's build something<br/><span>worth securing.</span></h2>
              <p>Whether it's infrastructure, automation, a technical collaboration or a creative project through VEEDIZ — I'm open to interesting challenges.</p>
              <a className="btn primary" href={`mailto:${profile.email}`}>Start a conversation <Mail size={16}/></a>
            </div>
            <div className="contact-links">
              <a href={profile.github} target="_blank"><Github/><span>GitHub</span><ArrowUpRight/></a>
              <a href={profile.linkedin} target="_blank"><Linkedin/><span>LinkedIn</span><ArrowUpRight/></a>
              <a href={`mailto:${profile.email}`}><Mail/><span>{profile.email}</span><ArrowUpRight/></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {year} SAHAN CHATHUMINA</span>
        <span>DESIGNED & BUILT WITH CURIOSITY <Sparkles size={13}/></span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
