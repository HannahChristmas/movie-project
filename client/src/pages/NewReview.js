import { useState } from "react";
// import { useParams } from "react-router";


function NewReview({ userId, movieId, onAddMovie }) {
  const [review, setReview] = useState("");
//   const [movieId, setMovieId] = useState(movieId);
//   const [movies, setMovies] = useState([]);
  const [errors, setErrors] = useState([]);

//   const { id } = useParams();



  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      movie_id: movieId,
      user_id: userId,
      review: review,
    };
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((movie) => {
          setReview("");
        //   setMovieId("");
          setErrors([]);
          onAddMovie(movie);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Review</h2>
      {/* <div>
        <label htmlFor="movie">Movie</label>
        <select
          id="movie"
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
        >
          <option value="">Select movie...</option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
      </div> */}
      <div>
        <label htmlFor="review">Review</label>
        <input
          type="text"
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      {errors.map((err) => (
        <p key={err} style={{ color: "red" }}>
          {err}
        </p>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewReview;
