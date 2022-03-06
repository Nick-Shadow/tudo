import React, { useState } from "react"
import Task from "../types/task"

import taskStyles from "/styles/tasks.module.css"

interface Props {
  task: Task
  save?: (task: Task) => void //
  children?: any
  props?: any[]
  key: string
}

const TaskEntry = (props: Props) => {
  const [task, setTask] = useState<Task>(props.task)
  const [expanded, setExpanded] = useState(false)

  const changeTitle = (newTitle: string) =>
    setTask({ ...task, title: newTitle })

  const changeDueDate = (newDueDate: string) =>
    setTask({ ...task, dueDate: newDueDate })
  return (
    <li className={taskStyles.taskentry}>
      <button
        className={taskStyles.taskentry}
        //todo fix multibutton registry issue
        onClick={() => setExpanded(!expanded)}
      >
        <div className={taskStyles.taskentrywrapper}>
          <button className={taskStyles.checkbox}>
            <img
              className={taskStyles.checkbox}
              src="/icons/box_unchecked.svg"
            />
          </button>
          <input
            type="text"
            onChange={(e) => changeTitle(e.target.value)}
            value={task.title}
            placeholder="Task title"
          />
          <input
            type="date"
            onChange={(e) => changeDueDate(e.target.value)}
            style={{ display: expanded ? "none" : "inline" }}
            value={task.dueDate}
          />
          <div style={{ display: expanded ? "block" : "none" }}>
            <p>{task.desc}</p>
            <div>
              <input
                type="date"
                onChange={(e) => changeDueDate(e.target.value)}
                value={task.dueDate}
              />
            </div>
          </div>
        </div>
      </button>
    </li>
  )
}

export default TaskEntry
