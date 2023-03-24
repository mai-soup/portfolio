import skills from "./assets/skills";

const TechSection = () => {
  return (
    <div className="py-8 flex flex-row w-full flex-wrap justify-evenly text-center md:text-left">
      {skills.map(skill => (
        <div
          className="flex-1 basis-full md:basis-1/2 lg:basis-1/3 my-4"
          key={skill.title}
        >
          <h3 className="my-3">{skill.title}</h3>
          {/* <p className="body-text text-light-grey">
            {skill.years} Years Experience
          </p> */}
        </div>
      ))}
    </div>
  );
};

export default TechSection;
