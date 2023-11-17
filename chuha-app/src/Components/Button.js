import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button className="btn" id={ props.idName } onClick={() => 
      {
        if(props.click !== undefined)
          props.click(props.number);
      }
    }>{ props.content }</button>
  )
}

export default Button;
