const About = () => {
  return (
    <div className="w-full  flex flex-col md:flex-row items-center md:items-start justify-center gap-7 max-w-screen-md mx-auto  px-4 ">
      <div>
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          About
        </h1>
      </div>
      <div className="text-white flex-wrap flex flex-col gap-2  text-start ">
        <p>I'm Abrar Azeem, a creative and detail-oriented Fullstack Developer crafting web applications from front to back</p>
        <p>
          Dealing and learning in machine learning and artifical intelligence
          technologies. I have a strong foundation in web development and
          programming languages, with a focus on building user-friendly applications
        </p>
        <p>Technologies like React, Tailwind CSS, Node.js, and PostgreSQL.</p>
        <p>
          I enjoy working on projects that challenge me to think outside the box and
          push the boundaries of what is possible with technology.
        </p>
        <p>
          Other than coding , I love to watch movies, and explore new technologies.
        </p>
        
      </div>
    </div>
  );
};

export default About;
