import React from 'react';
import './TimeComplexity.css';
import terminal from '../image/terminal.png';
import clock from '../image/clock.png';
import chip from '../image/chip.png';
import graph from '../image/graph.png';

const TimeComplexity = ({ complexity, setComplexity, outputObj }) => {
  const consoleHeaderString = '>_';
  return (
    <div className="paper">
      <div className="header">
        <h4>Output & Analytics</h4>
      </div>
      <div className="terminal-header">
        <img
          className="terminal-img"
          src={terminal}
        />
      </div>
      <div
        style={{ color: outputObj.isError ? '#9E2F3C' : '#198754' }}
        className="console"
      >
        {outputObj.output.split('\n').map((line, index) => (
          <div>
            <span key={index}>{line}</span>
          </div>
        ))}
      </div>
      <div className="time-complexity">
        <div className="stats">
          <img
            className="complexity-icons"
            src={graph}
          />
          <div
            style={{
              marginLeft: '1%',
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
            }}
          >
            <b>Time Complexity: </b>{' '}
            <span style={{ fontSize: '25px' }}>{complexity}</span>
          </div>
        </div>
        <div className="stats">
          <img
            className="complexity-icons"
            src={clock}
          />
          <div
            style={{
              marginLeft: '1%',
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
            }}
          >
            <b>Runtime:</b>{' '}
            <span style={{ fontSize: '25px', marginRight: "3%" }}>{outputObj.executionTime}</span>
            <span>ms</span>
          </div>
        </div>
        <div className="stats">
          <img
            className="complexity-icons"
            src={chip}
          />
          <div
            style={{
              marginLeft: '1%',
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
            }}
          >
            <b>Memory:</b>{' '}
            <span style={{ fontSize: '25px', marginRight: "3%" }}>{outputObj.memoryUsage}</span>
            <span>MB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeComplexity;
