import ss from "../assets/images/acnh-large.png";
import Button from "../Button";

const listClasses = "text-left w-2/3 mx-auto space-y-4 md:w-11/12";

const AcnhPlayer = () => {
  return (
    <div className="flex flex-col gap-4 pb-4 md:gap-8 md:pb-8">
      <img src={ss} alt="Screenshot of the audio player" />
      <p className="md:text-off-white md:text-2xl md:mx-auto">
        HTML, CSS, React, Tailwind
      </p>
      <p>
        A music player app, querying the ACNH API for the background music
        corresponding to the user's local time. Updates next song at the top of
        the hour, and has weather selection.
      </p>
      <div className="flex flex-row justify-evenly md:justify-start md:gap-8">
        <Button href="https://github.com/mai-soup/acnh-player">
          View Code
        </Button>
        <Button href="https://acnh-player.vercel.app/">View Live</Button>
      </div>
      <h2>Goals</h2>
      <ul className={listClasses}>
        <li>Get user's local time</li>
        <li>Get user's preferred weather option</li>
        <li>Query the API for the appropriate background track</li>
        <li>
          Play it on loop until the hour changes or a different weather is
          selected
        </li>
        <li>Update UI to reflect the current track and play state</li>
        <li>Responsive design</li>
      </ul>

      <h2>Continued development</h2>

      <p>
        One idea I had was asking the user for permission to access their
        location, then determining the local weather with another API, and
        setting the weather option automatically with it (or keeping it on
        manual selection if the user doesn't grant permission or just prefers to
        do so).
      </p>

      <h2>What I learned</h2>

      <ul className={listClasses}>
        <li>
          I had no idea that the native{" "}
          <span className="font-mono bg-dark-grey">audio</span> component
          couldn't really be styled!
        </li>
        <li>
          The logic behind playing audio was similar to how it was in Flutter
          for mobile.
        </li>
        <li>How to style components that are imported from libraries</li>
      </ul>
    </div>
  );
};

export default AcnhPlayer;
