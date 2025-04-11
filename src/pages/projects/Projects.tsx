import ProjectCard from "./ProjectCard";

const Projects = () => {
  const details = [
    {
      emoji: "🌐",
      title: "Hackernews-Server",
      projectUrl: "https://github.com/abrar1411/hackernews-server",
      description: "Developed Hackernews server clone",
    },
    {
      emoji: "🐞",
      title: "Areca Nut Disease DEtection",
     
      description:
        "Developed Deep learning model using ResNet50 + TensorFlow . It identifies the type of Areca Nut Disease",
    },
    {
      emoji: "🎗️",
      title: "Legal Outcome Predictions",
      
      description:
        "With the help Hierarcheal Attention model, we can predict the outcome of the case",
    },
    {
      emoji: "💻⚙️",
      title: "Industrial Database management system",
      
      description: "Developed a database management system for an industrial company using PostgreSQL",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-4 max-w-screen-md mx-auto px-4">
      <div>
        <h1 className="text-white md:w-35 md:sticky-10 font-medium text-start md:text-center">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-evenly py-2 px-4">
        {details.map((item, index) => (
          <ProjectCard
            key={index}
            emoji={item.emoji}
            title={item.title}
            projectUrl={item.projectUrl}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
