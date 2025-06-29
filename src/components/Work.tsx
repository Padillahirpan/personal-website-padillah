type WorkItemProps = {
  item: {
    company: string
    logo?: string
    start: string
    end: string
    description: string
    stack: string
  }
}

const WorkItem = ({ item }: WorkItemProps) => {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <img
          src={item.logo}
          alt={item.company}
          className="h-9 w-9 rounded-full"
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">{item.logo}</dt>
        <dd className="w-full text-sm font-medium text-left text-zinc-900 dark:text-zinc-100">
          {item.company}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="w-full text-xs text-left text-zinc-500 dark:text-zinc-400"
          aria-label="2024 until Present"
        >
          <time dateTime="2024">{item.start}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime="2025">{item.end}</time>
        </dd>
        <dt className="sr-only">Description</dt>
        <dd className="text-sm font-light text-left mt-2">{item.stack} </dd>
      </dl>
    </li>
  )
}

export default WorkItem
