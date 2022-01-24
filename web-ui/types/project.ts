import task from "./task"

export default interface Project {
  id: string
  title: string
  desc: string
  tasks: task[]
}
