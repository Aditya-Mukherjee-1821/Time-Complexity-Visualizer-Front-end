import React, { useState } from 'react';
import './Codeblock.css';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Codeblock = ({code, setCode, handleSubmit}) => {
  
  return (
    <div className="paper">
      <div className="header">
        <h4>Code Editor</h4>
      </div>
      <div className="code-editor">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows="10"
          cols="50"
          className='form-control'
          placeholder="Enter your JavaScript code here"
        />
        <button className='btn btn-success custom-button' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Codeblock;
