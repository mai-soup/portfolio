import ss from "../assets/images/yelpcamp.png";
import mapSs from "../assets/images/yelpcamp-map.png";
import fileSs from "../assets/images/yelpcamp-files.png";
import Button from "../Button";

const listClasses = "text-left w-2/3 mx-auto space-y-4 md:w-11/12";

const YelpCamp = () => {
  return (
    <div className="flex flex-col gap-4 pb-4 md:gap-8 md:pb-8">
      <img src={ss} alt="Screenshot of the landing page of YelpCamp" />
      <p className="md:text-off-white md:text-2xl md:mx-auto">
        HTML, CSS, Node, Express, EJS, MongoDB, Bootstrap
      </p>
      <p>
        My first full-stack project, made to finish Colt Steele's Web Dev
        Bootcamp. Users are able to browse campsites, read reviews, and
        add/edit/delete their own after signup.
      </p>
      <div className="flex flex-row justify-evenly md:justify-start md:gap-8">
        <Button href="https://github.com/mai-soup/yelpcamp">View Code</Button>
        <Button href="https://yelpcamp-aqzy.onrender.com/">View Live</Button>
      </div>
      <p>
        NB: The live version takes a couple minutes to start the server up since
        I'm using a free service to host it. Apologies for any inconvenience.
      </p>
      <h2>Goals</h2>
      <ul className={listClasses}>
        <li>Users are able to add new campsites</li>
        <li>Users are able to edit and delete campsites they own</li>
        <li>
          Users are able to leave ratings and manage the ratings they've posted
        </li>
        <li>User authentication</li>
        <li>
          Logged out guests are able to view information but not create/edit it
        </li>
        <li>Image upload</li>
        <li>Display all campsites</li>
        <li>Responsive design</li>
      </ul>
      <h2>Spotlight</h2>
      <img
        src={mapSs}
        alt="Screenshot showing a list of campgrounds with an interactive map above them."
      />
      <p>
        One of the most fun things I did was use the MapBox API to implement an
        interactive cluster map displaying all the campgrounds! Since it takes
        the data from the database the camps are stored in, it updates once they
        are edited.
      </p>
      <p>
        The user doesn't need to know the coordinates while adding a camp
        either, since I use MapBox's Geocoding API to determine it from the
        human-readable string they input for the location.
      </p>
      <img
        src={fileSs}
        alt="Screenshot showing a file selection dialog for uploading images for a campground. Several images are selected."
      />
      <p>
        Another cool thing I implemented was (multiple) file upload to a CDN -
        in this case, Cloudinary! It was a bit of a challenge, but seeing the
        end result work was extremely satisfying.
      </p>

      <p>
        (And yes, they do get deleted from the CDN when they're removed from the
        site!)
      </p>

      <h2>Continued development</h2>

      <p>
        I would really love to remake the design of the site from scratch, as I
        feel I could much improve upon the basic Bootstrap styles I used
        initially.
      </p>

      <p>
        User profiles that display a profile picture, short bio, and the
        campsites they own/reviews they've posted could also be an improvement.
      </p>

      <p>
        Some kind of campsite filtering also might be nice - currently the user
        can view campsites at a certain location with the map, but if additional
        attributes were added to campsites (e.g. is there phone reception in the
        area, are there electric outlets available), users should be able to
        filter them according to their needs.
      </p>

      <h2>What I learned</h2>

      <ul className={listClasses}>
        <li>
          Form validation in Express (which can get tedious without any
          libraries to help out)
        </li>
        <li>How to implement user authentication in Express</li>
        <li>EJS syntax (kind of reminded me of Jinja in Flask)</li>
        <li>Exchanging data with APIs</li>
        <li>Data visualisation in JavaScript felt similar to D3</li>
        <li>
          How to mitigate basic security risks - for instance, the popups on the
          map initially were vulnerable to XSS
        </li>
        <li>How to actually deploy a Node app</li>
      </ul>
    </div>
  );
};

export default YelpCamp;
