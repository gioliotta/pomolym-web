import screenshotOneImg from "../assets/screenshot-one.webp";
import screenshotTwoImg from "../assets/screenshot-two.webp";

function Mockups() {
  return (
    <figure className="container-mockups">
      <img
        src={screenshotOneImg}
        alt="PomoLym Screenshot One"
        className="mockup"
      />
      <img
        src={screenshotTwoImg}
        alt="PomoLym Screenshot Two"
        className="mockup"
      />
    </figure>
  );
}

export default Mockups;
