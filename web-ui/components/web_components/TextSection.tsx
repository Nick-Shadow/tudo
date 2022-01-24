import React from "react"

const TextSection = ({
  title,
  children,
  ...props
}: {
  title: string
  children?: any
  props?: any[]
}) => {
  return (
    <div {...props}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  )
}

export default TextSection
