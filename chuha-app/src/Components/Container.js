import React from 'react';
import Problem from './Problem';
import RawData from './RawData';
import './Container.css';

function Container(props) {
  return (
    <div className = "container">
        <Problem parentProps = { props }/>
        <RawData n="20" />
    </div>
  )
}

export default Container;
