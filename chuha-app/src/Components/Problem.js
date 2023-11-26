import React from 'react';
import { MathComponent } from 'mathjax-react';
import './Problem.css';
import Illustration from './Illustration';
import Button from './Button';

function Problem(props) {
  const statement = ``;
  return (
    <div className="problem">
        <div className="statement">
            <div className="statement-inner">
              <h2>Problem</h2>
              <p>Your task is to count for <MathComponent tex={String.raw`k = 1,2,\ldots,n`} display={false} /> number of ways two knights can be placed on a <MathComponent tex={String.raw`k \times k`} display={false} /> chessboard so that they do not attack each other.</p>
              <br />
              <p><strong>Input</strong><br />
                  The only input line contains an integer <MathComponent tex={String.raw`n`} display={false} />.<br />
                  <strong>Output</strong><br />
                  Print <MathComponent tex={String.raw`n`} display={false} /> integers: the results.<br />
                  <br />
                  <strong>Constrains</strong>
                  <br />
                  <MathComponent tex={String.raw`1 \leq n \leq 10000`} display={false} />
                  <br />
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
