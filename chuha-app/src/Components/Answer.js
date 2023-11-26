import React from 'react';
import {MathComponent} from 'mathjax-react';
import Image from '../Images/Answer.png';
import './Answer.css';

function Answer() 
{
    return (
        <div className="answer">
            <h2>Answer</h2>
            <MathComponent tex={String.raw`f(n) = \displaystyle\frac{n^2(n^2 -1)}{2} - 4(n-1)(n-2)`} display={true} />
        </div>
    )
}

export default Answer;
