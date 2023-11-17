import React from 'react';
import './Problem.css';
import Illustration from './Illustration';

function Problem(props) {
  return (
    <div className="problem">
        <div className="statement">
            <h2>Problem</h2>
            
            <p>Your task is to count for number of ways two knights can be placed on a k \times k chessboard so that they do not attack each other.</p>
            
            <p>Input
                The only input line contains an integer n.
                Output
                Print n integers: the results.
                Constraints
                
                1 \le n \le 10000
                
                Example
                Input:
                8
                
                Output:
                0
                6
                28
                96
                252
                550
                1056
                1848</p>
        </div>
        <div className="illustration">
            <h2>Illustration</h2>
            <Illustration parentProps = { props.parentProps }/>
        </div>
    </div>
  )
}

export default Problem;
