import { useState, useEffect } from "react";
import api from "../../services/api";
import { Background, Container, Info, Poster } from "./styles";
import Button from "../../components/Button";

function Home() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[1]);
    }

    getMovies();
  }, []);

  return (
    <>
      {movie && (
        <Background
          img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <div>
                <Button></Button>
              </div>
            </Info>
            <Poster>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="capa-do-filme"
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  );
}

export default Home;
