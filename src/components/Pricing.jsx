const Pricing = () => {
  return (
    <section className="pricing-section">
      <h2>Simple, Transparent Pricing</h2>
      <p className="sub">Choose the plan that fits your needs.</p>

      <div className="pricing-grid">
        <div className="price-card">
          <h3>Starter</h3>
          <h2>$0<span>/Month</span></h2>
          <ul>
            <li>✔ Access to free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
          </ul>
          <button className="btn">Get Started Free</button>
        </div>

        <div className="price-card active">
          <h3>Pro</h3>
          <h2>$29<span>/Month</span></h2>
          <ul>
            <li>✔ All premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
          </ul>
          <button className="btn white">Start Pro Trial</button>
        </div>

        <div className="price-card">
          <h3>Enterprise</h3>
          <h2>$99<span>/Month</span></h2>
          <ul>
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Dedicated support</li>
          </ul>
          <button className="btn">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;