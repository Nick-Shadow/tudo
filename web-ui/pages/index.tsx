import type { NextPage } from "next"
import Head from "next/head"
import { Col, Container, Row } from "react-bootstrap"
import HomeSlideShow from "../components/web_components/HomeSlideShow"
import WebSiteLayout from "../components/web_components/WebLayout"
import TextSection from "../components/web_components/TextSection"

const Home: NextPage = () => {
  return (
    <WebSiteLayout>
      <Head>
        <title>Tudo Landing</title>
        <meta name="description" content="Open Source Todo list" />
        <link rel="icon" href="/icons/box_unchecked.svg" />
      </Head>
      <h1>Tudo</h1>
      <HomeSlideShow />
      <Container>
        <Row>
          <Col sm>
            <TextSection title="Ywhay">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              ex porta mi tempor vestibulum nec quis augue. Morbi ultrices quis
              ipsum non cursus. Sed vel feugiat turpis. Nullam diam arcu,
              egestas quis condimentum a, iaculis et lorem. Pellentesque
              eleifend mauris luctus, volutpat augue vel, lobortis sapien. Donec
              et ipsum eros. Etiam quam mauris, gravida eu ex quis, congue
              elementum elit. Aenean rutrum ut erat ac lacinia. Sed eu velit sed
              libero imperdiet scelerisque. Nullam magna purus, condimentum sit
              amet rutrum non, maximus vel ligula. Aenean dictum imperdiet
              gravida. Nunc sodales finibus neque. Curabitur fermentum cursus
              ligula eget interdum.{" "}
            </TextSection>
          </Col>
          <Col sm>
            <TextSection title="Oalsgay">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              ex porta mi tempor vestibulum nec quis augue. Morbi ultrices quis
              ipsum non cursus. Sed vel feugiat turpis. Nullam diam arcu,
              egestas quis condimentum a, iaculis et lorem. Pellentesque
              eleifend mauris luctus, volutpat augue vel, lobortis sapien. Donec
              et ipsum eros. Etiam quam mauris, gravida eu ex quis, congue
              elementum elit. Aenean rutrum ut erat ac lacinia. Sed eu velit sed
              libero imperdiet scelerisque. Nullam magna purus, condimentum sit
              amet rutrum non, maximus vel ligula. Aenean dictum imperdiet
              gravida. Nunc sodales finibus neque. Curabitur fermentum cursus
              ligula eget interdum.{" "}
            </TextSection>
          </Col>
        </Row>
      </Container>
    </WebSiteLayout>
  )
}

export default Home
