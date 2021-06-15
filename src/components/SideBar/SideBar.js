import React from 'react'
import Reader from './Reader'
import Toggle from './Toggle'
import FeedBack from "./FeedBack"
import "./SideBar.css"

const SideBar = () => {
    return (
        <div className="sidebar">
        <Reader />
        <Toggle />
        <FeedBack />   
        </div>
    )
}

export default SideBar
