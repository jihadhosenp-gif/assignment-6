export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-left">
        <span className="badge">🔥 New: AI-Powered Tools Available</span>

        <h1>Supercharge Your Digital Workflow</h1>

        <p>
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        <div className="banner-buttons">
          <button className="primary-btn">Explore Products</button>
          <button className="outline-btn">▶ Watch Demo</button>
        </div>
      </div>

      <div className="banner-right">
        <img src="https://i.ibb.co/0y8FtyF/ai-hand.jpg" alt="banner"/>
      </div>
    </section>
  );
}