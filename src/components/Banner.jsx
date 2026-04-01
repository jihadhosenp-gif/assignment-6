import bannerImg from "../assets/bannerImg.png"; 

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <h1>Supercharge Your Digital Workflow</h1>
        <p>Access premium AI tools in one place.</p>

        <button className="btn">Explore Products</button>
        <button className="Watch">Watch Demo</button>
      </div>

      <img src={bannerImg} alt="banner"/> 
    </div>
  );
};

export default Banner;