import React, { useEffect, useState } from 'react';
import axios from './axios.js';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition/variable


    useEffect(() => {
        // if [], run once when the row loads, and don't run again

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;

        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);

    return (
        <div className='row'>
            {/* title */}
            <h2>{title}</h2>

            {/* container -> posters */}
            <div className='row__posters'>
                {/* several row__posters */}
                {movies.map(movie => {
                    return <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`
                        }
                        alt={movie.name} />
                })}
            </div>
        </div>
    )
}

export default Row
