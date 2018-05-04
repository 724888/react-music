import React from 'react'
import {NavLink} from 'react-router-dom'
import './mm-header.scss'

const MmHeader = (props) => {
  const open = function mmHeaderOpenDrawer() {
    props.onOpen(true);
  };
  return (
    <header className="mm-header">
      <div className="mm-header-left" onClick={open}/>
      <div className="mm-header-title">
        <NavLink className="mm-header-item discover" to="/discover"/>
        {/*<NavLink className="mm-header-item video" to="/toplist"/>*/}
        {/*<div className="mm-header-item friends" to="/friends"/>*/}
      </div>
      <div className="mm-header-right"/>
    </header>
  )
};

export default MmHeader
