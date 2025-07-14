import ProjectItem from './Projects'
import type { ProjectItemProps } from './Projects'

type ProjectSectionProps = {
  title: string
  projectItem: ProjectItemProps[]
}

const ProjectSection = ({ title, projectItem }: ProjectSectionProps) => {
  return (
    <section className="border-zinc-100 pt-6 dark:border-zinc-700/40">
      <h2 className="flex text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-x-4 mt-4 sm:mt-6 space-y-4 sm:space-y-2 sm:grid-cols-2">
        {projectItem.map((project, index) => (
          <ProjectItem item={project.item} key={index} />
        ))}
      </div>
    </section>
  )
}
export default ProjectSection
