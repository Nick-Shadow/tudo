import { useState } from "react"
import Project from "../types/project"
import Task from "../types/task"
import TaskEntry from "./TaskEntry"

import taskStyles from "/styles/tasks.module.css"

interface Props {
  children?: any
  props?: any[]
}
const TaskList = (props: Props) => {
  return <ul className={taskStyles.tasklist}>{props.children}</ul>
}

export default TaskList
