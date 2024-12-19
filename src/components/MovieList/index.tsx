'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "../MovieCard"
import { Movie } from "@/types/movie"


export default function MovieList () {

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '1a89f5e5752b13dad56e5e53fead7b4e',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results)
        })
    }

    
    return (
        <ul className="{movie-list}">
            {movies.map((movie) => 
           <MovieCard 
                key={movie.id}
                movie={movie}
           />
           )}
        </ul>
    )
}