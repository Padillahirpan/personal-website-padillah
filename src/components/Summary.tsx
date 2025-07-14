const Summary = () => {
  return (
    <section className="flex flex-col items-start gap-4 pt-4">
      <h1 className="text-xl sm:text-xl font-medium text-left">
        Hi, I'm Irpan👋
      </h1>
      <div className="text-base sm:text-xl font-extralight text-left text-gray-600">
        Software engineer & android developer who turns complex problems into
        simple, elegant apps. I love building intuitive experiences in Android
        and web development. I am always exploring new ideas to make technology
        feel more human.
      </div>
      <div className="text-base sm:text-xl font-extralight text-left text-gray-600">
        now expanding into Fullstack web development. This year, I'm diving deep
        into building modern websites using React, TypeScript, and backend tools
        — aiming to create seamless, end-to-end digital experiences.
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
  )
}

export default Summary
