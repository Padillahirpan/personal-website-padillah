type ProjectItemProps = {
  item: {
    name: string
    ss: string
    description: string
  }
}

const Projects = ({ item }: ProjectItemProps) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4">
        <img
          src={
            item.ss
              ? new URL(`../assets/projects/${item.ss}`, import.meta.url).href
              : ''
          }
          alt={item.name}
        />
      </div>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl text-left font-medium tracking-tight text-gray-900 dark:text-white">
            {item.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default Projects
