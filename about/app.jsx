/* About — app shell: tabs, hash routing, footer. */
const ATABS = [
  { id: "who", label: "Who We Are", Comp: () => <window.WhoWeArePage /> },
  { id: "team", label: "Our Team", Comp: () => <window.TeamPage /> },
  { id: "reviews", label: "Customer Reviews", Comp: () => <window.ReviewsPage /> },
];
const AppIc = window.SIcon;

function readAboutHash() {
  const h = (window.location.hash || "").replace("#", "");
  return ATABS.some((t) => t.id === h) ? h : "who";
}

function AboutApp() {
  const [tab, setTab] = React.useState(readAboutHash());

  React.useEffect(() => {
    const onHash = () => setTab(readAboutHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (id) => {
    if (id === tab) return;
    window.location.hash = id;
    setTab(id);
    window.scrollTo({ top: 0, behavior: "auto" });
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
            <a className="sol-tab" href="Homepage.html">Home</a>
            <a className="sol-tab" href="Solutions.html">Solutions</a>
            {ATABS.map((t) => (
              <button key={t.id} className={`sol-tab${tab === t.id ? " active" : ""}`} onClick={() => go(t.id)}>
                {t.label}
              </button>
            ))}
          </nav>
          <a className="sol-nav-cta" href="Contact.html">
            <AppIc name="phone" /> Contact Us
          </a>
        </div>
      </header>

      <main>
        {ATABS.map((t) => (
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
            <a href="Solutions.html">Solutions</a>
            <a href={window.CONTACT} target="_blank" rel="noopener">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("about-root")).render(<AboutApp />);
