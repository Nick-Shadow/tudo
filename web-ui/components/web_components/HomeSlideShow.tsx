import React from "react"
import { Carousel } from "react-bootstrap"

const HomeSlideShow = ({
  children,
  ...props
}: {
  children?: any
  props?: any[]
}) => {
  // auto gen filler images
  const items = []
  const gImgWidth = 1000
  const gImgHeight = 200
  for (let i = 0; i < 4; i++) {
    items.push(
      <Carousel.Item key={i} style={{ textAlign: "center" }}>
        <img src={`https://picsum.photos/${gImgWidth}/${gImgHeight}?i=${i}`} />
        <Carousel.Caption
          style={{
            textShadow: "0px 0px 4px black",
          }}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }

  children = items
  return (
    <Carousel
      {...props}
      style={{
        margin: "20px 0px",
        backgroundColor: "rgba(33,37,41)",
      }}
    >
      {children}
    </Carousel>
  )
}

export default HomeSlideShow
