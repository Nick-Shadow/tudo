import Link from "next/link"
import { useState } from "react"
import Project from "../types/project"
import ProjectEntry from "./ProjectEntry"

import projectStyles from "/styles/projects.module.css"

import appstyles from "/styles/myapp.module.css"

interface Props {
  children?: any
  props?: any[]
}
const ProjectList = (props: Props) => {
  return (
    <div>
      <Link href="/">
        <a>
          <h3 className={appstyles.heading}>Tudo</h3>
        </a>
      </Link>
      <ul
        style={{
          listStyle: "none",
          margin: "0",
          padding: "0",
        }}
      >
        {props.children}
      </ul>
    </div>
  )
}

export default ProjectList
