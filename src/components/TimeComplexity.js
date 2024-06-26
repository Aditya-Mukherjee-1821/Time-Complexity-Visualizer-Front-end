import React from 'react';
import './TimeComplexity.css';

const TimeComplexity = ({ complexity, setComplexity }) => {
  return (
    <div className="paper">
      <div className="header">
        <h4>Code Editor</h4>
      </div>
      <div className="time-complexity">
          {complexity?.length>0 ?<h6>Time Complexity: {complexity}</h6>:<h6>Submit code to analyze time complexity</h6>}

      </div>
    </div>
  );
};

export default TimeComplexity;
