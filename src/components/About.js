import food from "../Assets/burger.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
        </h1>
        <h4>
          "Elevate your senses with each bite, <span>deliciousness awaits!</span>"
        </h4>
      </div>
      <div className="about-right">
        <img src={food} alt="Food Image" />
      </div>
    </div>
  );
};

export default About;
