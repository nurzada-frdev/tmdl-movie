import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
// import headerImg from "../img/Logo-tmdb-1.png"
import {BsSearch} from "react-icons/bs"
const Header = () => {
    const [value, setValue] = useState("")
    const navigate = useNavigate()
    const handleClick = (name) => {
        navigate(`/movie/movie-search/${name}`)
    }
    return (
        <div id="header" style={{
            background: '#031d33',
            // display: dark ? 'yellow' : 'red',
        }}>
            <div className="container">
                <div className="header-logo">
                    {/*<NavLink to={'/'}><img src={headerImg} width="150px" height="90px" alt=""/></NavLink>*/}
                    <div className="header-movie"
                         style={{
                             display: 'flex',
                             alignItems: 'center',
                         }}>
                        <input onChange={(event) => setValue(event.target.value)} style={{
                            padding: '10px 10px',
                            outline: 'none',
                            borderRadius: '10px',
                            margin: '0 5px',
                            color:'white',
                            background: "none",
                            border: "1px solid white"
                        }} onKeyDown={(event)=>{
                            if(event.key==='Enter')handleClick(value)
                        }} type="text" placeholder="search movie..."/>

                        <button className="where" onClick={() => handleClick(value)} style={{
                            padding: '10px',
                            outline: 'none',
                            borderRadius: '7px',
                            border: '1px solid white',
                            background: 'none',
                            cursor: 'pointer'
                        }}><h3 style={{
                            color:'white',
                            fontSize:'10px',
                        }}><BsSearch/></h3></button>
                    </div>
                    {/*<button onClick={() => setDark(!dark)} style={{*/}
                    {/*    color: 'black',*/}
                    {/*    padding: '10px',*/}
                    {/*    outline: 'none',*/}
                    {/*    borderRadius: '5px',*/}
                    {/*    border: 'none',*/}
                    {/*    cursor: 'pointer'*/}
                    {/*}}><h1><BsCloudSunFill/></h1>*/}
                    {/*}}><h1><BsCloudSunFill/></h1>*/}
                    {/*</button>*/}
                    <div className="nav">
                        <NavLink to={'/popular'}>Popular</NavLink>
                        <NavLink to={'/Now playing'}>Now playing</NavLink>
                        <NavLink to={'/Top rated'}>Top rated</NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
