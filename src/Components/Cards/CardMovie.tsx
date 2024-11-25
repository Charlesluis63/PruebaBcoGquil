import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import "../../../src/assets/Styles/CardMovie.css"

export type CardMovieProps = {
    titulo:string,
    fecha:string
}

export default function CardMovie(props:CardMovieProps) {


    const stylename =  props.titulo.charAt(0).toLocaleUpperCase() === "V" ? "red" :"normal"

  return (
    <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5" className={stylename}>
      {props.titulo}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      {props.fecha}
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
  )
}
