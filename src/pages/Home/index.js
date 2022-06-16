import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
import { useState, useEffect } from 'react'
import { APIKey } from '../config/Key'

export const imagePath = 'https://image.tmdb.org/t/p/w500'

export function Home({ prop }) {
  // console.log(props)

  const [movies, setMovies] = useState([])

  useEffect(() => {
    //consumindo API
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}`) //se quiser em pt só colocar '&language=pt-br' no final
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies</Text>
      <View style={styles.films}>
        <ScrollView>
          {movies.map(movie => {
            return (
              <View style={styles.film} key={movie.id}>
                <TouchableOpacity
                  style={styles.film}
                  color="transparent"
                  onPress={() =>
                    prop.setGlobalState({ page: 'detail', movieId: movie.id })
                  }
                >
                  <Image
                    source={{ uri: `${imagePath}${movie.poster_path}` }}
                    style={styles.poster}
                    alt={movie.title}
                  ></Image>
                  <Text style={styles.movietitle}>{movie.title}</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    paddingVertical: 20,
    flex: 1
  },

  title: {
    fontSize: 40,
    color: '#FCFCFC',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FCFCFC',
    padding: 10
  },

  film: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  poster: {
    width: 200,
    height: 300,
    borderRadius: 10,
    justifyContent: 'center'
  },

  movietitle: {
    fontSize: 18,
    color: '#FCFCFC',
    textAlign: 'center',
    marginTop: 10
  }
})
