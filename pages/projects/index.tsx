import { ProjectCard } from '../../components/ProjectCard';
import { TitleContent } from '../../components/TitleContent';
import projectsData from '../../data/projectsdata';

export default function Projects() {
  return (
    <div>
      <TitleContent title="Projects" description="My Projects is Here." />
      <div className="-m-4 flex flex-wrap">
        {projectsData.map((data) => (
          <ProjectCard
            key={data.title}
            title={data.title}
            description={data.description}
            src={data.imgSrc}
            href={data.href}
          />
        ))}
      </div>
    </div>
  );
}
