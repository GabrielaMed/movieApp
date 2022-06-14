import { Text, View, StyleSheet, Button} from "react-native";
import { useState, useEffect } from "react";
import { APIKey } from "../config/Key";

export const imagePath = 'https://image.tmdb.org/t/p/w200'

export default function Home(){
    const [movies, setMovies] = useState([])

    useEffect(() => { //consumindo API
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}`) //se quiser em pt só colocar '&language=pt-br' no final
            .then(response => response.json())
            .then(data => {  
                setMovies(data.results)
            })

    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.title}> 
                Movies
            </Text>
            <View style={styles.films}>
                {movies.map(movie => {
                    return(
                        <View style={styles.film} key={movie.id}>
                            <Button 
                                onPress={() =>
                                    navigation.navigate('Details',{
                                        movieId: movie.id,
                                })
                            }>
                                <img 
                                    src={`${imagePath}${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </Button>
                                <Text style={styles.filmTitle}>{movie.title}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#111',
    },
    
    title:{
        fontSize: 40,
        color: 'black',
        backgroundColor: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },

    films:{
        padding: 40,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    film:{
        width: 300,
        margin: 40,
        alignItems: 'center',
    },

    filmTitle:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
    }
})