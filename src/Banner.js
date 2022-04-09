import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from './requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetfilxOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie)


    return (
        <header>

        </header>
    )
}

export default Banner
