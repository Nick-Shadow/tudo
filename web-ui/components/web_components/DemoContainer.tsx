import SideNavigation from "../SideNavigation"

interface Props {
  children?: any
  props?: any[]
}
const ContainerizedDemoApp = (props: Props) => {
  return (
    <div {...props}>
      <div style={{ border: "5px solid navy" }}></div>
    </div>
  )
}

export default ContainerizedDemoApp
