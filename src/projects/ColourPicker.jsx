import ss from "../assets/images/react-colour-picker-large.png";
import dragSs from "../assets/images/react-colour-picker-drag.png";
import shadesSs from "../assets/images/react-colour-picker-shades.png";
import Button from "../Button";

const listClasses = "text-left w-2/3 mx-auto space-y-4 md:w-11/12";

const ColourPicker = () => {
  return (
    <div className="flex flex-col gap-4 pb-4 md:gap-8 md:pb-8">
      <img src={ss} alt="Screenshot of the landing page of the colour picker" />
      <p className="md:text-off-white md:text-2xl md:mx-auto">
        HTML, CSS, React, React Router, Material UI
      </p>
      <p>
        A palette creator with various colour manipulation options. Created
        while finishing Colt Steele's Modern React Bootcamp.
      </p>
      <div className="flex flex-row justify-evenly md:justify-start md:gap-8">
        <Button href="https://github.com/mai-soup/react-colour-picker">
          View Code
        </Button>
        <Button href="https://react-colour-picker.vercel.app/">
          View Live
        </Button>
      </div>
      <h2>Goals</h2>
      <ul className={listClasses}>
        <li>View palettes</li>
        <li>Copy colour codes of specific colours in hex, rgb, rgba</li>
        <li>See various shades of a colour or palette</li>
        <li>Allow users to create and delete palettes</li>
        <li>Save palettes to local storage</li>
        <li>Responsive design</li>
      </ul>

      <h2>Spotlight</h2>

      <img
        src={dragSs}
        alt="Screenshot of the palette creation screen, a coloured square is being dragged to reposition it among others"
      />

      <p>
        The drag-and-drop functionality on the palette creation screen was a bit
        finicky to implement (there was some weird whitespace in certain
        scenarios) but the end result felt very fun, I spent a lot more time
        than necessary testing (read: playing around with) this part.
      </p>

      <img
        src={shadesSs}
        alt="Screenshot of various shades of a single colour"
      />

      <p>
        Calculating the different shades and whether to display text on them in
        white or black was a very interesting challenge. Ended up quite deep
        into accessibility docs on MDN.
      </p>

      <h2>Continued development</h2>
      <p>
        The design could definitely use some reworking, I'm not a massive fan of
        how it ended up, but it is functional and I really don't consider myself
        a good designer, if I were to redesign the site it'd take way too much
        time, so I'll let myself be okay with a functional one.
      </p>

      <p>
        Exporting whole palettes at once might be useful, e.g. as CSS variables
        or for putting into Tailwind config. This would need some research on
        what formats are most common and for what use.
      </p>

      <h2>What I learned</h2>

      <ul className={listClasses}>
        <li>
          This was my first bigger project using React, it sort of tied up
          everything I had learned about the framework up until then
        </li>
        <li>MUI components such as drawers and dialogs</li>
        <li>
          A lot of colour and accessibility theory, in particular about
          luminance and colour contrast ratios. I even got to use this knowledge
          a couple weeks later, while giving feedback to a friend about their
          project!
        </li>
      </ul>
    </div>
  );
};

export default ColourPicker;
