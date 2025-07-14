import './App.css'
import workData from './data/work.json'
import projectData from './data/project.json'
import Summary from './components/Summary'
import WorkSection from './components/WorkSection'
import ProjectSection from './components/ProjectSection'
import FooterSection from './components/Footer'

function App() {
  return (
    <>
      <div className="max-w-3xl mx-auto min-h-screen flex flex-col items-start gap-4 mb-6 px-2 sm:px-4">
        <Summary />
        <WorkSection workData={workData} />
        <ProjectSection
          title={projectData.title}
          projectItem={projectData.project.map((p) => ({ item: p }))}
        />
        <FooterSection />
      </div>
    </>
  )
}

export default App
