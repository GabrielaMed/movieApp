import { View, Image, Text } from "react-native";
import { useState, useEffect } from "react";

import { APIKey } from "../config/key";
import { imagePath } from "../Home";
import GoBack from "../../components/GoBack";

export default function Details({route}){
  const {movieId} = route.params;

  const [movie, setMovie] = useState({})

  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`)
        .then(response => response.json())
        .then(data => {

          const { title, overview, poster_path, release_date, video} = data

          const movie = {
            id: JSON.stringify(movieId),
            title,
            overview,
            image: `${imagePath}${poster_path}`,
            releaseDate: release_date,
            teaser: video,
          }
          console.log(id)
          setMovie(movie)
        })
  },
    [id]
  )

  return(
    <View>
      <Image source={movie.image}/>
      <Text>{movie.title}</Text>
      <span>Sinopse: {movie.sinopse}</span>
      <span>Release Date: {movie.releaseDate}</span>
      <GoBack/>
    </View>
  )
}