import React from 'react';
import {Link} from "react-router-dom";
const AllMovie = ({el}) => {
    return (
        <div>
            <Link to={`/movie/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
            </Link>
            <h4 style={{
                color:'black',
                textAlign:'center',
                width:'150px'
            }}>{el.title}</h4>
        </div>
    );
};

export default AllMovie;