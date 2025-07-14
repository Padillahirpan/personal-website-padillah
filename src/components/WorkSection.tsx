import WorkItem from './Work'

type WorkItem = {
  company: string
  logo?: string
  start: string
  end: string
  description: string
  stack: string
}

type WorkSectionProps = {
  workData: {
    title: string
    work: WorkItem[]
  }
}

const WorkSection = ({ workData }: WorkSectionProps) => {
  return (
    <section className="rounded-2xl border border-zinc-100 p-4 sm:p-6 dark:border-zinc-700/40">
      <h2 className="flex text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        {workData.title}
      </h2>
      <ol className="mt-4 sm:mt-6 space-y-4">
        {workData.work.map((item, index) => (
          <WorkItem item={item} key={index} />
        ))}
      </ol>
    </section>
  )
}

export default WorkSection
