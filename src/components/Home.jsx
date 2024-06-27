import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="nav-btns">
                <NavLink to={`/single-player`} className="btn">
                    Play
                </NavLink>
                <NavLink to={`/multi-player`} className="btn">
                    Play With Friend
                </NavLink>
            </div>
        </>
    );
};

export default Home;
