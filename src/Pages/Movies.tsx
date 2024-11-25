import React, { useEffect, useState } from 'react'
import { GetMovies } from '../services/apiService'
import CardMovie from '../Components/Cards/CardMovie';
import { Container,Col, Row } from 'reactstrap';





export default function Movies() {

  const [loading, setloading] = useState<boolean>(false)
  const [movies, setmovies] = useState<MovieApiResponse | undefined>(undefined)

  const LOADING_RESOURCE = "https://i.sstatic.net/kOnzy.gif";



  async function GetAllMovies() {
    setloading(true)
    const movieResponse = await GetMovies()
    setmovies(movieResponse);

    setloading(false)
  }

  useEffect(() => {
    GetAllMovies()
  }, [])


  //console.log(movies)

  if (loading) {
    return (
      <div> consultando...</div>
    )
  }
  else {
    return (
      <>
      <Container>
      <Row>
          {movies && movies.results && movies.results.length > 0 &&

            movies.results.map((v, i) => {
              return (
                <Col sm={3} key={"Col " + i}>
                  <CardMovie
                    key={i + " Movie"}
                    titulo={v.title}
                    fecha={v.release_date}
                  />
                </Col>

              )
            })

          }
        </Row>
      </Container>
        

      </>
    )
  }


}
