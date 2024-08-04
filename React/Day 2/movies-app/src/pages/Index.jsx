import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MovieCard from "../components/MovieCard/MovieCard";
import movies_list_from_api from "../data/movies";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../components/Spinner/Spinner"

export default function Index () {
    const [movies_list, setMoviesList] = useState([])
    const [error] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    useEffect(()=>{
        setTimeout(()=>{
            // setError(true)
            setMoviesList(movies_list_from_api)
        }, 3000)
    },[])
    return <>
        <Navbar setSearchValue={setSearchValue}/>

        <div className="container">
            { movies_list.length ? 
                <div className="d-flex justify-between gap-4 py-4 flex-wrap">
                    {movies_list.filter(movie => {
                        return (movie.Title + movie.Plot).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                    }).map((movie, index) => {
                        // return <MovieCard title={movie.Title} description={movie.Plot} image={movie.Images[0]}/>
                        return <React.Fragment key={index}>
                            <MovieCard movie={movie}/>
                        </React.Fragment>
                    })}
                </div>
                :
                error ? 
                    <div className="mt-5">Couldn't Fetch Data!</div>
                :
                <Spinner/>
            }
            
        </div>
    </>
}