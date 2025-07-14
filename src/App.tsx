import './App.css'
import workData from './data/work.json'
import WorkItem from './components/Work'
import projectData from './data/project.json'
import ProjectItem from './components/Projects'

function App() {
  return (
    <>
      <div className="max-w-3xl mx-auto min-h-screen flex flex-col items-start gap-4 mb-6 px-2 sm:px-4">
        <section className="flex flex-col items-start gap-4 pt-4">
          <h1 className="text-xl sm:text-xl font-medium text-left">
            Hi, I'm Irpan👋
          </h1>
          <div className="text-base sm:text-xl font-extralight text-left text-gray-600">
            Software engineer & android developer who turns complex problems
            into simple, elegant apps. I love building intuitive experiences in
            Android and web development. I am always exploring new ideas to make
            technology feel more human.
          </div>
          <div className="text-base sm:text-xl font-extralight text-left text-gray-600">
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
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/padillahirpan/"
                target="_blank"
                className="text-xs md:text-sm text-black border-b border-gray-200 font-medium hover:border-gray-500 transition-all duration-300 ease-in-out"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
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
        <section className="w-full flex flex-col items-start gap-2">
          <a
            href="/resume.pdf"
            className="border(gray-100 2) inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
          >
            Download formal resume here
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
            >
              <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </section>
        <section className="border-zinc-100 pt-6 dark:border-zinc-700/40">
          <h2 className="flex text-xl font-semibold text-zinc-800 dark:text-zinc-100">
            {projectData.title}
          </h2>
          <div className="grid grid-cols-1 gap-x-4 mt-4 sm:mt-6 space-y-4 sm:space-y-2 sm:grid-cols-2">
            {projectData.project.map((item, index) => (
              <ProjectItem item={item} key={index} />
            ))}
          </div>
        </section>
        <section className="w-full p-4 sm:p-6">
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} Irpan Padillah. All rights reserved.
          </p>
        </section>
      </div>
    </>
  )
}

export default App
