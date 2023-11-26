import React from 'react';
import Problem from './Problem';
import './Container.css';
import Concepts from './Concepts';

function Container(props) {
  return (
    <div className = "container">
        <Problem parentProps = { props }/>
        <Concepts conceptOptions = { props.conceptOptions } currentConcept = { props.currentConcept } setCurrentConcept = { props.setCurrentConcept } concepts = { props.concepts }/>
    </div>
  )
}

export default Container;
