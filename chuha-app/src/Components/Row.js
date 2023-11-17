import React from 'react';
import './Row.css';

function Row(props) 
{
    let columns = [];
    for(let i = 0; i < props.col; i++)
    {
        const position = (props.rowNumber - 1) * props.col + (i+1);
        columns.push(<div className={`cell ${position === props.fixedKnightPosition ? 'fixed' : ''} ${position === props.otherKnightPosition ? 'other' : ''}`} key={i} onClick=
        { 
            () => 
            {
                if(props.fixedKnightPosition === -1 ) 
                    props.onButtonClick(position);
            } 
        }>{props.fixedKnightPosition === -1 ? position : ''}</div>);
    }

    return (
        <div className="row">
            {columns}
        </div>
    );
}

export default Row;
