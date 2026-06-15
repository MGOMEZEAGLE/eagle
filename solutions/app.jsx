/* Solutions — app shell: tabs, hash routing, footer. */
const TABS = [
  { id: "managed", label: "Managed IT Support", Comp: () => <window.ManagedPage /> },
  { id: "cybersecurity", label: "Cybersecurity", Comp: () => <window.CyberPage /> },
  { id: "hardware", label: "Hardware & Physical Security", Comp: () => <window.HardwarePage /> },
  { id: "strategic", label: "Strategic IT", Comp: () => <window.StrategicPage /> },
];
const NavIcon = window.SIcon;

function readHash() {
  const h = (window.location.hash || "").replace("#", "");
  return TABS.some((t) => t.id === h) ? h : "managed";
}

function SolutionsApp() {
  const [tab, setTab] = React.useState(readHash());

  React.useEffect(() => {
    const onHash = () => setTab(readHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (id) => {
    if (id === tab) return;
    window.location.hash = id;
    setTab(id);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  };

  window.useReveal(tab);

  return (
    <>
      <header className="sol-header">
        <div className="container sol-header-inner">
          <a className="sol-logo" href="Homepage.html" aria-label="Eagle Network Solutions home">
            <img src="assets/eagle-logo.png" alt="Eagle Network Solutions" />
          </a>
          <nav className="sol-tabs">
            {TABS.map((t) => (
              <button key={t.id} className={`sol-tab${tab === t.id ? " active" : ""}`} onClick={() => go(t.id)}>
                {t.label}
              </button>
            ))}
          </nav>
          <a className="sol-nav-cta" href="Contact.html">
            <NavIcon name="phone" /> Contact Us
          </a>
        </div>
      </header>

      <main>
        {TABS.map((t) => (
          <div key={t.id} className={`page${tab === t.id ? " active" : ""}`}>
            {tab === t.id && <t.Comp />}
          </div>
        ))}
      </main>

      <footer className="sol-footer">
        <div className="container sol-footer-inner">
          <a href="Homepage.html"><img src="assets/eagle-logo.png" alt="Eagle Network Solutions" /></a>
          <p>© 2026 Eagle Network Solutions · Bedford, NH and Scarborough, ME</p>
          <div className="links">
            <a href="Homepage.html">Home</a>
            <a href={window.CONTACT} target="_blank" rel="noopener">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("sol-root")).render(<SolutionsApp />);
