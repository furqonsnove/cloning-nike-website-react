import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center w-full min-h-screen gap-10 xl:flex-row max-container"
    >
      <div className="relative flex flex-col items-start justify-center w-full xl:2/5 max-xl:padding-x pt-28">
        <p>Our Summer collections</p>
        <h1>
          <span>The New Arrivals</span>
          <br />
          <span>Nike Shoes</span>
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconUrl={arrowRight} />
      </div>
    </section>
  );
};

export default Hero;
