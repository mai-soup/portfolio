import ss from "../assets/images/NAME.png";
import Button from "../Button";

const listClasses = "text-left w-2/3 mx-auto space-y-4 md:w-11/12";

const PROJECT = () => {
  return (
    <div className="flex flex-col gap-4 pb-4 md:gap-8 md:pb-8">
      <img src={ss} alt="Screenshot of the landing page of PROJECT" />
      <p className="md:text-off-white md:text-2xl md:mx-auto">Tech stack</p>
      <p>Lorem ipsum dolor sit amet</p>
      <div className="flex flex-row justify-evenly md:justify-start md:gap-8">
        <Button href="#">View Code</Button>
        <Button href="#">View Live</Button>
      </div>
      <h2>Goals</h2>
      <ul className={listClasses}>
        <li>Lorem</li>
        <li>Ipsum</li>
      </ul>

      <h2>Spotlight</h2>

      <h2>Continued development</h2>

      <h2>What I learned</h2>

      <ul className={listClasses}>
        <li>Sit</li>
        <li>Amet</li>
      </ul>
    </div>
  );
};

export default PROJECT;
