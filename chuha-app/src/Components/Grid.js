import React from 'react';
import Row from './Row';
import './Grid.css'

function Grid(props) 
{
    let rows = [];
    for(let i = 0; i < props.rows; i++)
    {
        rows.push(<Row col={props.col} onButtonClick = { props.onGridButtonClick } fixedKnightPosition = { props.fixedKnightPosition } otherKnightPosition = { props.otherKnightPosition } rowNumber = {i+1} key={i}/>);
    }

    return (
        <div className="grid-container">
            {rows}
        </div>
    )
}

export default Grid;
