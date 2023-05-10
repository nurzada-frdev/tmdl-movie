import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../ApiKey/APIKEY";
// import "./detail.scss";
import Trailers from "./Trailer/Trailers";
import Actors from "./Actors";
import {AiOutlineUnorderedList} from 'react-icons/ai';
import {AiFillHeart} from 'react-icons/ai';
import {BsFillBookmarkFill} from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';
const DetailPage = () => {
    const movieId = useParams()
    const [detail, setDetail] = useState({})
    const getDetail = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${APIKEY}&language=en-US`)
        const {data} = await response
        await setDetail(data)
    }
    console.log(detail)


    useEffect(() => {
        getDetail()
    }, [])

    const {backdrop_path, poster_path, title, overview, genres, runtime, release_date, vote_average} = detail

    return (
        <section   id="detail" style={{    background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}) no-repeat,center/cover`,
            minHeight: '100vh',   filter: "grayscale(40%)"
        }}>
            <div className="container">
                <div className="detail">
                    {
                        <img style={{
                            width:"430px",
                            height:"430px"
                        }
                        } src={`https://www.themoviedb.org/t/p/w220_and_h330_face//${detail.poster_path}`} alt=""/>
                    }
                    <div className="two">
                        <div className="with">
                            <h1>{title}</h1>
                            <h1 className="date">{release_date}</h1>
                        </div>
                        <p>{Math.floor(runtime / 60)}h {runtime % 60}m</p>
                        {
                            genres ? genres.map(el => (<div>{el.name}</div>)) : ''
                        }
                        <div className="reit">
                            <div className="circle">
                                <button className='vote'>{Math.floor(vote_average * 10)}%</button>
                            </div>
                            <h2 className="how">Рейтинг</h2>
                            <div className="small"><h3><AiOutlineUnorderedList/></h3></div>
                            <div className="small"><h3><AiFillHeart/></h3></div>
                            <div className="small"><h3><BsFillBookmarkFill/></h3></div>
                            <div className="small"><h3><AiFillStar/></h3></div>
                            <div className="play">
                                <h1><BsFillPlayFill/></h1>
                                <h3>Воспроизвести трейлер </h3>
                            </div>
                        </div>
                        <div>
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>
                <Actors movieId={movieId}/>
                <Trailers movieId={movieId}/>
            </div>
        </section>
    );
};

export default DetailPage;