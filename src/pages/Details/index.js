import { View, Image, Text, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { APIKey } from '../config/Key'
import { imagePath } from '../Home'
import { ScrollView } from 'react-native-web'

export function Details({ prop }) {
  const { movieId } = prop.globalState

  const [movie, setMovie] = useState({})

  useEffect(() => {
    if (movieId) {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKey}`)
        .then(response => response.json())
        .then(data => {
          const { title, overview, poster_path, release_date, vote_average } =
            data

          const movie = {
            id: movieId,
            title,
            overview,
            image: `${imagePath}${poster_path}`,
            releaseDate: release_date,
            rating: vote_average
          }
          setMovie(movie)
        })
    }
  }, [movieId])

  return (
    <View style={styles.container}>
      <Icon
        name="arrow-left"
        color="white"
        size={16}
        onPress={() => prop.setGlobalState({ page: 'home' })}
      />
      <View style={styles.content}>
        <Image
          source={{
            uri: movie.image
          }}
          style={styles.poster}
          alt={movie.title}
        />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
        <Text style={styles.release}>Release date: {movie.releaseDate}</Text>
        <Text style={styles.release}>Vote Average: {movie.rating}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    paddingHorizontal: 20,
    paddingVertical: 40,
    flex: 1
  },

  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },

  poster: {
    width: 200,
    height: 300,
    borderRadius: 10
  },

  title: {
    fontSize: 24,
    marginVertical: 20,
    color: '#FCFCFC',
    textAlign: 'center'
  },

  overview: {
    fontSize: 16,
    color: '#FCFCFC',
    textAlign: 'justify',
    marginVertical: 10
  },

  release: {
    fontSize: 16,
    color: '#FCFCFC',
    alignSelf: 'flex-start'
  }
})
