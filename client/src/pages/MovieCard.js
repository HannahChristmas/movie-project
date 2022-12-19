import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
// import {Pencil} from "@styled-icons/evil/Pencil";

function MovieCard() {
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
                <img className="poster" src={movie.image_url}/>
              <h2>{movie.title}</h2>
              <p>
                <em><b>Genre:</b> {movie.genre}</em>
                &nbsp;·&nbsp;
                <cite><b>Year:</b> {movie.year}</cite>
                &nbsp;·&nbsp;
                <cite><b>Director:</b> {movie.director}</cite>
              </p>
              {/* <ReactMarkdown>{movie.director}</ReactMarkdown> */}
              <Link to={`/movies/${movie.id}`}>Reviews</Link>

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
  text-align: center;
`;

// const Poster = styled.div`
//   width: 20px;
//   margin: 40px auto;
// `;

const Movie = styled.article`
  margin-bottom: 24px;
`;

// const SmallPencil = styled(Pencil)`
//   height: 2.5rem;
// `

export default MovieCard;
