import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../../ApiKey/APIKEY";
import MovieCredits from "../MovieCredits";
const MovieActors = () => {
    const [viewMore, setViewMore] = useState(false)
    const [actorsInfo, setActorsInfo] = useState({})
    const {movieId} = useParams()
    const getInfo = async () => {
        const url = await axios(`https://api.themoviedb.org/3/person/${movieId}?api_key=${APIKEY}&language=en-US`)
        const {data} = await url
        setActorsInfo(data)
    }



    useEffect(() => {
        getInfo()
    }, [])


    console.log(actorsInfo)

    let {profile_path, biography, name} = actorsInfo

    return (
        <div style={{
            padding:'30px 0'
        }} id="info-actors">
            <div className="container">
                <div className="info" style={{
                    display: 'flex',

                }}>
                    <div style={{
                        margin: '0 30px'
                    }}>
                        {
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`}
                                 alt=""/>
                        }

                    </div>
                    <div style={{
                        color:'black'
                    }} className="about">

                        <h4>{name}</h4>
                        <p style={{
                            paddingTop: '60px'
                        }}>Биография</p>

                        <h4>{biography ? biography.length  < 201 ? biography : (
                            <p style={{
                                display: viewMore ? 'none' : 'block',
                                color:'black'
                            }}>{biography.slice(0,200)}</p>
                        ) : ''}
                            <p onClick={()=> setViewMore(!viewMore)} style={{
                                textDecoration: 'none',
                                color: 'blue',
                                display: viewMore ? 'none' : 'block',
                                cursor: 'pointer'
                            }}>Читать далее...</p>
                            <p style={{
                                display: viewMore ? 'block' : 'none'
                            }}>{biography}</p>
                            <p onClick={()=> setViewMore(!viewMore)} style={{
                                textDecoration: 'none',
                                color: 'blue',
                                display: viewMore ?'block' : 'none',
                                cursor: 'pointer'
                            }}>свернуть</p>
                        </h4>
                    </div>
                </div>

            </div>
            <MovieCredits movieId={movieId}/>
        </div>
    );
};

export default MovieActors;