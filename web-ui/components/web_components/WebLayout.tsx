import React from "react"
import Container from "react-bootstrap/Container"
import TopNavigation from "./topNavigation"

interface Props {
  children?: any
  props?: any[]
} //todo move styles to _.module.css
const WebSiteLayout = (props: Props) => {
  return (
    <div style={{ margin: "0", padding: "0" }}>
      <TopNavigation />
      <Container
        style={{
          minHeight: "calc(100vh - 200px)",
          padding: "2rem 0",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 56 /*The size of the nav bar*/ + 16,
        }}
      >
        <main>{props.children}</main>
      </Container>
      <footer
        style={{
          display: "flex",
          flex: 1,
          padding: "3rem 0",
          borderTop: "1px solid #eaeaea",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="https://github.com/Nick-Shadow/open-todo"
          target="_blank"
          rel="noopener noreferrer"
        >
          We are open source on github{" "}
        </a>
      </footer>
    </div>
  )
}

export default WebSiteLayout
