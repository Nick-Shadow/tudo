import { NextPage } from "next"

import Project from "../types/project"
import User from "../types/user"
import Link from "next/link"
import { useState } from "react"
import ProjectList from "../components/ProjectList"
import ProjectEntry from "../components/ProjectEntry"
import TaskList from "../components/TaskList"
import TaskEntry from "../components/TaskEntry"

import appstyles from "/styles/myapp.module.css"

const loremUser: User = {
  id: "1",
  email: "alex.jones@infowars.com",
  passwordHash: "144c9defac04969c7bfad8efaa8ea194",
  projects: [
    {
      id: "1",
      title: "P demo 1",
      desc: "Lorem qui laborum irure commodo exercitation duis dolore voluptate eareprehenderit sunt velit.",
      tasks: [
        {
          id: "1.1",
          title: "Task Title I",
          desc: "Lorem qui laborum irure commodo exercitation duis dolore voluptate eareprehenderit sunt velit.",
          dueDate: "10",
        },
        {
          id: "1.2",
          title: "Task Title I",
          desc: "Lorem qui laborum irure commodo exercitation duis dolore voluptate eareprehenderit sunt velit.",
          dueDate: "10",
        },
        {
          id: "1.3",
          title: "Task Title I",
          desc: "Lorem qui laborum irure commodo exercitation duis dolore voluptate eareprehenderit sunt velit.",
          dueDate: "10",
        },
      ],
    },
    {
      id: "2",
      title: "P demo 2",
      desc: "Lorem qui laborum irure commodo exercitation duis dolore voluptate eareprehenderit sunt velit.",
      tasks: [
        {
          id: "2.1",
          title: "Task Title II",
          desc: "Lorem qui laborum irure commodo exercitation duis dolore voluptate eareprehenderit sunt velit.",
          dueDate: "10",
        },
        {
          id: "2.2",
          title: "Task Title II",
          desc: "Lorem qui laborum irure commodo exercitation duis dolore voluptate eareprehenderit sunt velit.",
          dueDate: "10",
        },
      ],
    },
  ],
}

const TodoApp: NextPage = () => {
  const [user, setUser] = useState(loremUser)
  const [activeProject, setActiveProject] = useState(loremUser.projects[0])

  return (
    <div className={appstyles.wrapper}>
      <div className={appstyles.sideBar}>
        {/*//todo fix, maybe use button like with the others, 
				        needs to be all clickable and not look like link, with icon,
				        and then text */}
        <ProjectList>
          {user.projects.map((project, index) => (
            <ProjectEntry
              key={project.id}
              project={project}
              setActiveProjectHandle={() => {
                setActiveProject(loremUser.projects[index])
              }}
            />
          ))}
        </ProjectList>
        {/*//todo reimplement project list and change state handle to myapp.tsx
         */}
      </div>
      <div>
        <TaskList>
          {activeProject.tasks.map((task, index) => (
            <TaskEntry key={task.id} task={task} />
          ))}
        </TaskList>
      </div>
    </div>
  )
}

export default TodoApp
