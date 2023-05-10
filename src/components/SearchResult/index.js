import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {APIKEY} from "../../ApiKey/APIKEY";
import AllMovie from "../allMovie";
const SearchResult = () => {
    const [result, setResult] = useState([])
    const {movieName} = useParams()
    const getResults = async () => {
        try {
            const url = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${movieName}`)
            const {data} = await url
            setResult(data.results)
        } catch (e) {
            console.log(e, 'error')
        }
    }
    useEffect(() => {
        getResults(movieName, APIKEY)
    }, [result])
    console.log(result)
    return (
        <div className="container">
            <div className="popular">
                {
                    result.map(el => <AllMovie el={el}/>)
                }
                {

                }
            </div>
        </div>
    );
};
export default SearchResult;