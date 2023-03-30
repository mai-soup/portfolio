import ss from "../assets/images/mai-soup-large.png";
import gallerySs from "../assets/images/mai-soup-gallery.png";
import snippetSs from "../assets/images/mai-soup-snippet.png";
import Button from "../Button";

const listClasses = "text-left w-2/3 mx-auto space-y-4 md:w-11/12";

const PersonalWebsite = () => {
  return (
    <div className="flex flex-col gap-4 pb-4 md:gap-8 md:pb-8">
      <img src={ss} alt="Screenshot of the landing page of my personal site" />
      <p className="md:text-off-white md:text-2xl md:mx-auto">
        HTML, CSS, SCSS, Bootstrap, Jekyll
      </p>
      <p>
        My first "public" web dev project, and one I use regularly. I am able to
        add and remove various pages and posts, link them together, and display
        them with a consistent theme.
      </p>
      <p>
        All of the design was made by me - while I did use Bootstrap to help me,
        I customised the default components heavily.
      </p>
      <div className="flex flex-row justify-evenly md:justify-start md:gap-8">
        <Button href="https://github.com/mai-soup/mai-soup.github.io">
          View Code
        </Button>
        <Button href="https://mai-soup.github.io">View Live</Button>
      </div>
      <h2>Goals</h2>
      <ul className={listClasses}>
        <li>Easily add and move content</li>
        <li>
          Be able to write content in Markdown and have it rendered in HTML
        </li>
        <li>
          Use a consistent and original style throughout the site without
          needing to make up styles on the spot when using an HTML element for
          the first time
        </li>
        <li>Responsive design</li>
      </ul>
      <p>
        Initially made to hold a record of software development courses I've
        completed and computing-related books I've read that inspired me to
        become a better developer, it has expanded to be even more
        autobiographical. Design-wise inspired by my love for retro technology
        and digital minimalism.
      </p>
      <p>
        The design process happened quite organically, I had an idea of what I
        wanted the landing page to look like and, while working on that, ended
        up with the colourful link styles. I really liked them, and so decided
        to base the design on a sort of retro/monospace feel, using the three
        primary colours in the colour palette, red and blue on links and a light
        yellow background.
      </p>
      <p>
        I considered adding a bit of Markdown-style look to headings by
        prefixing them with hash symbols, but decided against it in the end, as
        the initial target audience was my friends, not many of whom were
        familiar with Markdown.
      </p>
      <h2>Spotlight</h2>
      <img
        src={gallerySs}
        alt="Screenshot showing the Instagram-like gallery on the site"
      />
      <p>
        One of the parts I enjoyed making the most was the Instagram-esque
        gallery page! I quit most social media a while ago, Instagram included,
        yet still wanted a place to put the pictures I really liked.
      </p>
      <img
        src={snippetSs}
        alt="Screenshot showing a test blog post with lorem ipsum text and a simple code snippet in Javascript. Syntax highlighting can be seen."
      />
      <p>
        I also added syntax highlighting to code snippets in blog posts with a
        Gruvbox-like colour scheme! Very happy with how that one turned out.
      </p>

      <h2>Continued development</h2>

      <p>
        There's several things I'd do differently if I rebuilt it! For one, I
        don't believe anymore that Bootstrap is the best UI framework to use for
        this project, it just happened to be the only one I knew at the time.
        Out of Bootstrap's default styling, I essentially only left spacing
        untouched. Nowadays I might use Tailwind.
      </p>

      <p>
        I also feel like, especially with the large amount of whitespace on
        desktop, this might translate very nicely into a single-page application
        with some calmer animated transitions between routes. Currently the jump
        between pages could be a bit jarring.
      </p>

      <p>
        I might also remove the blog feature altogether and instead redirect it
        to dev.to or something similar, the only reason being more exposure, as
        I don't yet have a following in the software side of the Internet. I
        would miss the little details I put in the design, though.
      </p>

      <h2>What I learned</h2>

      <ul className={listClasses}>
        <li>Static site !== easy to build</li>
        <li>
          The list of commonly used HTML elements (or at least those Markdown
          can translate to) is quite big!
        </li>
        <li>Lots of quirks of Liquid templates</li>
        <li>
          Understood flexboxes better and actually ended up liking them a lot.
        </li>
      </ul>
    </div>
  );
};

export default PersonalWebsite;
