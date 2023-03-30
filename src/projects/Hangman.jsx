import ss from "../assets/images/hangman-large.png";
import Button from "../Button";

const listClasses = "text-left w-2/3 mx-auto space-y-4 md:w-11/12";

const Hangman = () => {
  return (
    <div className="flex flex-col gap-4 pb-4 md:gap-8 md:pb-8">
      <img src={ss} alt="Screenshot of the Hangman game" />
      <p className="md:text-off-white md:text-2xl md:mx-auto">
        HTML, CSS, React, Tailwind
      </p>
      <p>A simple Hangman game.</p>
      <div className="flex flex-row justify-evenly md:justify-start md:gap-8">
        <Button href="https://github.com/mai-soup/hangman">View Code</Button>
        <Button href="https://hangman-two-psi.vercel.app/">View Live</Button>
      </div>
      <h2>Goals</h2>
      <ul className={listClasses}>
        <li>Get a random word from a wordlist</li>
        <li>
          Reveal the word incrementally if the user guesses a letter correctly
        </li>
        <li>Update UI upon an incorrect guess</li>
        <li>
          End game when either the word is guessed correctly or max number of
          mistakes is reached
        </li>
        <li>Display results and allow to start a new game with a new word</li>
        <li>Responsive design</li>
      </ul>

      <h2>Continued development</h2>

      <p>
        One of the things I found myself trying to do and realise I haven't
        implemented is use keyboard input to guess letters. It would definitely
        make the gameplay faster for users who prefer to do so.
      </p>

      <p>
        The design could use some work too - I tried to go for something similar
        as in the colour palette app, but now like neither one anymore. Maybe
        something that makes it look more pen-and-paper-like would be nice.
      </p>

      <h2>What I learned</h2>

      <ul className={listClasses}>
        <li>
          Tailwind! This project was created to get me started in it, and now I
          am in love with it and have used it in every project since.
        </li>
        <li>Image sizing, particularly scaling below the original size.</li>
        <li>Styling rows of (relatively) small buttons responsively.</li>
      </ul>
    </div>
  );
};

export default Hangman;
