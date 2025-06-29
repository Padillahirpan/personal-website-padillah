import './App.css'
import workData from './data/work.json'
import WorkItem from './components/Work'
import projectData from './data/project.json'
import ProjectItem from './components/Projects'

function App() {
  return (
    <>
      <div className="w-3xl h-screen flex flex-col items-left gap-4 mb-6">
        <section className="flex flex-col items-left gap-4 p-4">
          <h1 className="text-3xl font-medium text-left">Hi, I'm Irpan👋</h1>
          <div className="text-xl font-extralight text-left text-gray-600">
            Software engineer & android developer who turns complex problems
            into simple, elegant apps. I love building intuitive experiences in
            Android and web development. I am always exploring new ideas to make
            technology feel more human.
          </div>
          <div className="text-xl font-extralight text-left text-gray-600">
            now expanding into Fullstack web development. This year, I'm diving
            deep into building modern websites using React, TypeScript, and
            backend tools — aiming to create seamless, end-to-end digital
            experiences.
          </div>

          <div className="flex flex-wrap items-center gap-x-3 w-fit">
            <div>
              <a
                href="https://github.com/padillahirpan"
                target="_blank"
                className="text-xs md:text-sm text-black border-b border-gray-200 font-medium hover:border-gray-500 transition-all duration-300 ease-in-out"
              >
                Github
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/padillahirpan/"
                target="_blank"
                className="text-xs md:text-sm text-black border-b border-gray-200 font-medium hover:border-gray-500 transition-all duration-300 ease-in-out"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
        <section className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <h2 className="flex text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            {workData.title}
          </h2>
          <ol className="mt-6 space-y-4">
            {workData.work.map((item, index) => (
              <WorkItem item={item} key={index} />
            ))}
          </ol>
        </section>
        <section className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <h2 className="flex text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            {projectData.title}
          </h2>
          <div className="grid grid-cols-1 gap-x-4 mt-6 space-y-4 sm:grid-cols-2 ">
            {projectData.project.map((item, index) => (
              <ProjectItem item={item} key={index} />
            ))}
          </div>
        </section>
        <section className="w-full p-6">
          <p>
            © {new Date().getFullYear()} Irpan Padillah. All rights reserved.
          </p>
        </section>
      </div>
    </>
  )
}

export default App
