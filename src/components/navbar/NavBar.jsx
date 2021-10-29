import React, { useState, useEffect } from 'react';
import Logo from "./aerolab-logo.svg";
import coin from "./coin.svg"
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/actions"
import "./NavBar.css"


function NavBar() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser())
    }, [])

    const user = useSelector(state => state.user)
    return (
        <header className="box">
            <div>
                <img  src={Logo} width="50" height="50" style={{padding:"10px"}} alt="" />
            </div>
            <div className="info">
                <p className="name">{user?.name}</p>
                <div className="coins">
                    <p className="points" >{user?.points}</p>
                    <img src={coin}  alt="not fount" />
                </div>
            </div>
        </header>
    )
}

NavBar.propTypes = {

}

export default NavBar

