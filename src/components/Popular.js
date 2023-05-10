import React from 'react';
import {useState,useEffect} from "react";
import axios from "axios";
import {APIKEY} from '../ApiKey/APIKEY';
import {Link} from "react-router-dom";
const Popular = () => {
    const [popular, setPopular] = useState([])
    const getPopular = async () => {
        const url = await
            axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await url
        setPopular(data.results)
    }
    useEffect(()=>{
        getPopular()
    },[])
    return (
        <div className="container">
            <div className="popular" >
                {
                    popular.map(el => (
                        <div className="box" style={{
                            border:'3px solid green',
                            padding:'10px 0',
                            margin:'0 6px',
                            borderRadius:'22px'
                        }} key={el.id}>
                            <Link to={`/movie/${el.id}`}>
                                <img style={{
                                    background: 'orangered'
                                }} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                            </Link>
                            <div className="title" style={{
                                color:"black",
                                textAlign: 'start',
                                marginLeft: '21px',
                                width: '150px'}}>
                                <p >{el.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Popular;