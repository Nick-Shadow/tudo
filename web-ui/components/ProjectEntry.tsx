import { useState } from "react"
import Project from "../types/project"

import projectStyles from "/styles/projects.module.css"

interface Props {
  children?: any
  props?: any[]
  setActiveProjectHandle: () => void
  project: Project
  key: string
}
const ProjectEntry = (props: Props) => {
  const [project, setProject] = useState<Project>(props.project)
  return (
    <button
      type="button"
      key={props.key}
      onClick={props.setActiveProjectHandle}
      className={projectStyles.entry}
    >
      {project.title}
    </button>
  )
}

export default ProjectEntry
