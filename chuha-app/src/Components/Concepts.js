import React from 'react';
import Button from './Button';
import './Concepts.css';

function Concepts(props) 
{
    const ar = [];

    for(let i = 0; i < props.conceptOptions.length; i++)
    {
        ar[i] = <Button content={props.conceptOptions[i]} idName={`concept-button-${i}`} click = { props.setCurrentConcept } number={i} key={i}/>;
    }

    return (
        <>
            <div className="concept">
                <div className="buttons">
                    { ar }
                </div>
                { props.concepts[props.currentConcept] }
            </div>
        </>
    )
}

export default Concepts;
