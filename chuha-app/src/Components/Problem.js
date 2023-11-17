import React, { StrictMode } from 'react';
import './Problem.css';
import Illustration from './Illustration';
import Button from './Button';

function Problem(props) {
  return (
    <div className="problem">
        <div className="statement">
            <div className="statement-inner">
              <h2>Problem</h2>
              
              <p>Your task is to count for number of ways two knights can be placed on a k x k chessboard so that they do not attack each other.</p>
              <br />
              <p><strong>Input</strong><br />
                  The only input line contains an integer n.<br />
                  <strong>Output</strong><br />
                  Print n integers: the results.<br />
                  <br />
                  <strong>Example</strong><br />
                  <strong>Input :</strong><br />
                  8<br />
                  <strong>Output :</strong><br />
                  0<br />
                  6<br />
                  28<br />
                  96<br />
                  252<br />
                  550<br />
                  1056<br />
                  1848<br />
                </p>
            </div>
        </div>
        <div className="illustration">
            <div className="illustration-header">
              <h2>Illustration</h2>
              <Button content="Reset" click={ props.parentProps.resetIllustration }/>
            </div>
            <Illustration parentProps = { props.parentProps }/>
        </div>
    </div>
  )
}

export default Problem;
