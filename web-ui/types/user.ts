import Project from "./project"

export default interface User {
  id: string
  email: string
  passwordHash: string
  projects: Project[]
}
