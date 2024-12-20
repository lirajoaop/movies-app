import React from 'react';
import { Movie } from "@/types/movie"
import StarRating from "../StarRating"

export interface Props {
    movie: Movie
}

export default function MovieCard(props: Props) {

    const movie = props.movie

  return (

    <li className="text-white w-full h-full rounded-lg overflow-hidden relative group cursor-pointer">
        <div className="w-full h-full object-cover opacity-100 group-hover:opacity-30 transition-opacity duration-[500] ">
            <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title} 
            />
        </div>


        <div className={`absolute bottom-0 bg-[linear-gradient(#00000000,#000000_90%)] w-full flex flex-col justify-end p-[10px] transition-all duration-[600] ${
      movie.overview
        ? "group-hover:h-[100px] h-[50px]"
        : "group-hover:h-[50px] h-[50px]"
    }`}
         >
            <p className="text-[#f1f5f9] text-xs mb-1">
                {movie.title}
            </p>

            {movie.vote_average > 0 &&
            <StarRating
                 rating={movie.vote_average}
            />
            }

            <div className="text-[#f1f5f9] text-xs mt-2 h-0 opacity-0 group-hover:opacity-100 group-hover:h-[100px] transition-all duration-[600]">
                {movie.overview &&
                <p className="text-[#fff000]">
                    {movie.overview.length > 100
                        ? `${movie.overview.substring(0,100)}...`
                        : movie.overview
                    }   
                </p>
                }

                <button className="bg-[#6016ff] py-[6px] px-2 rounded-[4px] mt-[10px] text-white border-none cursor-pointer w-full">
                    Ver mais
                </button>
            </div>
        </div>
    </li>
  )
}
