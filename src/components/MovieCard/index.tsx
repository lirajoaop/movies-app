import { Movie } from "@/types/movie"
import StarRating from "../StarRating"

export interface Props {
    movie: Movie
}

export default function MovieCard(props: Props) {
    const movie = props.movie
  return (
    <li className="text-white">
        <div className="{movie-poster}">
            <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title} 
            />
        </div>

        <StarRating rating={movie.vote_average}/>

        <div className="{movie-infos}">
            <p className="{movie-title}">
                {movie.title}
            </p>
            <div className="{hidden-content}">
                <p className="text-[#fff000]">
                    {movie.overview}    
                </p>
            </div>
        </div>
    </li>
  )
}
