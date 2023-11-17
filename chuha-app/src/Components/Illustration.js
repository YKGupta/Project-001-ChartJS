import React from 'react';
import Grid from './Grid';
import './Illustration.css';
import Button from './Button';

function Illustration(props) 
{
    return (
        <div className="illustration-container">
            <Grid rows={props.parentProps.size} col={props.parentProps.size} onGridButtonClick = { props.parentProps.setFixedKnightPosition } fixedKnightPosition = { props.parentProps.fixedKnightPosition } otherKnightPosition = { props.parentProps.otherKnightPosition }/>
            <div className="illustration-bottom">
                <Button content="Next" idName="nextButton" click={ props.parentProps.setOtherKnightPosition }/>
                <p>{ props.parentProps.fixedKnightPosition === -1 ? '' : props.parentProps.availablePositionsCounter }</p>
            </div>
        </div>
    );
}

export default Illustration;
