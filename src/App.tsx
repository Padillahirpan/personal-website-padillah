import './App.css'

function App() {
  return (
    <>
      <div className="w-3xl h-screen flex flex-col items-left gap-4">
        <section className="flex flex-col items-left gap-4 p-4">
          <h1 className="text-3xl font-medium text-left">Hi👋</h1>
          <div className="text-xl font-extralight text-left text-gray-600">
            I'm Irpan Padillah - Software engineer & android developer who turns
            complex problems into simple, elegant apps. I love building
            intuitive experiences in Android and web development. I am always
            exploring new ideas to make technology feel more human.
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
      </div>
    </>
  )
}

export default App
