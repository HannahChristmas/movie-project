import { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
import { useParams } from "react-router";
// import { Link } from "react-router-dom";
import styled from "styled-components";
// import { Box, Button } from "../styles";
import { Box } from "../styles";

import NewReview from "./NewReview";
// import {Pencil} from "@styled-icons/evil/Pencil";

function MovieCard({user}) {
  const [{ data: movie, error, status }, setMovie] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/movies/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((movie) =>
          setMovie({ data: movie, error: null, status: "resolved"})
          );
      } else {
        r.json().then((err) =>
          setMovie({ data: null, error: err.error, status: "rejected" })
          );
        }
      });
  }, [id]);

  function handleAddMovie(newMovie) {
    setMovie({
      error,
      status,
      data: {
        ...movie,
        reviews: [...movie.reviews, newMovie],
      },
    });
  }

  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "rejected") return <h2>Error: {error}</h2>;


  return (
    <Wrapper>
      <Box>
        <h1>{movie.title}</h1>
        <h1>{movie.genre}</h1>
        <h1>{movie.year}</h1>
        {/* <h1>{movie.reviews}</h1> */}
        {movie.reviews.map((review) => (
          <Box key={review.id}>
            {review.review}<br></br>
            {review.user_id}
          </Box>
        ))}
        <NewReview onAddMovie={handleAddMovie} movieId={movie.id} userId={user.id}/>
      </Box>
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

// const Movie = styled.article`
//   margin-bottom: 24px;
// `;

// const SmallPencil = styled(Pencil)`
//   height: 2.5rem;
// `

export default MovieCard;
