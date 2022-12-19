import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then(setMovies);
  }, []);

  return (
    <Wrapper>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Movie key={movie.id}>
            <Box>
              <h2>{movie.title}</h2>
              <p>
                <em>Genre: {movie.genre}</em>
                &nbsp;·&nbsp;
                <cite>Year: {movie.year}</cite>
              </p>
              <p>
                Director: {movie.director}
              </p>
              <ReactMarkdown>{movie.director}</ReactMarkdown>
            </Box>
          </Movie>
        ))
      ) : (
        <>
          <h2>No Movies Found</h2>
          <Button as={Link} to="/new">
            Add a New Movie
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Movie = styled.article`
  margin-bottom: 24px;
`;

export default MovieList;
