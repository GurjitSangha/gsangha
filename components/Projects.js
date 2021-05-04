import Card from "./Card";

export default function Projects({ projects }) {
  return (
    <div id="projects" className="flex flex-col items-center mb-8">
      <h3 className="text-4xl pb-4">Projects</h3>
      {projects.map((project) => (
        <Card data={project} />
      ))}
    </div>
  );
}
