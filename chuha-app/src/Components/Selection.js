import React from 'react';
import { MathComponent } from 'mathjax-react';
import './Selection.css';

function Selection() 
{
  return (
    <div className="selection">
      <h2>Selection</h2>      
      <p>
        Total number of ways to place two knights on a <MathComponent tex={String.raw`n \times n`} display={false} /> grid <MathComponent tex={String.raw`= \displaystyle{}^{n \times n}C_{2} = {}^{n^2}C_{2} = \displaystyle\frac{n^2!}{2!(n^2-2)!} = \displaystyle\frac{n^2 \cdot (n^2-1) \cdot (n^2-2)!}{2 \cdot (n^2-2)!} = \displaystyle\frac{n^2 \cdot (n^2 - 1)}{2}`} display={false} />
        
      </p>
    </div>
  )
}

export default Selection;
