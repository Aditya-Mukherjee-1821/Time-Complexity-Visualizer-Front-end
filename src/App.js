import React, { useState } from 'react';
import TimeComplexity from './components/TimeComplexity';
import Codeblock from './components/Codeblock';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { codeSnippet } from './utils/helper';

const App = () => {
  const [code, setCode] = useState(codeSnippet);
  const [complexity, setComplexity] = useState('');
  const [outputObj, setOutputObj] = useState({
    output: '',
    executionTime: '',
    memoryUsage: '',
    isError: false,
  });
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/analyze', {
        code,
      });
      // console.log(response);
      setComplexity(response.data.complexity);
    } catch (error) {
      console.error('Error analyzing code:', error);
    }
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '50%', height: '100vh' }}>
        <Codeblock
          code={code}
          setCode={setCode}
          handleSubmit={handleSubmit}
          setOutputObj={setOutputObj}
          outputObj={outputObj}
        />
      </div>
      <div style={{ width: '50%', height: '100vh' }}>
        <TimeComplexity
          outputObj={outputObj}
          complexity={complexity}
          setComplexity={setComplexity}
        />
      </div>
    </div>
  );
};

export default App;
