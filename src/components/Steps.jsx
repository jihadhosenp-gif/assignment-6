import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";

function Steps() {
  return (
    <section className="steps">
      <h2>Get Started In 3 Steps</h2>
      <p>Start using premium digital tools in minutes, not hours.</p>

      <div className="steps-container">

        <div className="step">
          <img src={step1} alt="Create Account" />
          <h3>Create Account</h3>
          <p>Sign up for free in seconds. No credit card required.</p>
        </div>

        <div className="step">
          <img src={step2} alt="Choose Products" />
          <h3>Choose Products</h3>
          <p>Browse our catalog and select tools that fit your needs.</p>
        </div>

        <div className="step">
          <img src={step3} alt="Start Creating" />
          <h3>Start Creating</h3>
          <p>Download and start using your tools immediately.</p>
        </div>

      </div>
    </section>
  );
}

export default Steps;