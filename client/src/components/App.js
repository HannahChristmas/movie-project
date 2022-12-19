import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import NavBar from "./NavBar";
import MovieList from "../pages/MovieList";
import NewMovie from "../pages/NewMovie";
import MovieCard from "../pages/MovieCard";



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    })
  }, []);

  if (!user) return <Login onLogin={setUser}/>;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
      <Routes>
          <Route path="/new" element={<NewMovie user={user}/>}/>
          <Route path="/" element ={<MovieList user={user}/>}/>
          <Route path="/movies" element ={<MovieList user={user}/>}/>
          <Route path="/movies/:id" element ={<MovieCard user={user}/>}/>
      </Routes>
        
      </main>
    </>
  );
}

export default App;
