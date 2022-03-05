import { ProjectCard } from '../../components/ProjectCard';
import { TitleContent } from '../../components/TitleContent';

export default function Projects() {
  return (
    <div>
      <TitleContent title="Projects" description="My Projects is Here." />
      <div className="-m-4 flex flex-wrap">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
