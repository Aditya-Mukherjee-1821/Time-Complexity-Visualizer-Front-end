import React, { useState } from 'react';
import TimeComplexity from './components/TimeComplexity';
import Codeblock from './components/Codeblock';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const App = () => {
  const [code, setCode] = useState('');
  const [complexity, setComplexity] = useState('');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://time-complexity-visualizer-back-end.onrender.com/analyze',
        {
          code,
        }
      );
      console.log(response);
      setComplexity(response.data.complexity);

      // setChartData({
      //   labels: response.data.chartData
      //     ? response.data.chartData.map((_, index) => `Input Size ${index + 1}`)
      //     : [],
      //   datasets: [
      //     {
      //       label: 'Time Complexity',
      //       data: response.data.chartData || [],
      //       borderColor: 'rgba(75,192,192,1)',
      //       fill: false,
      //     },
      //   ],
      // });
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
        />
      </div>
      <div style={{ width: '50%', height: '100vh' }}>
        <TimeComplexity
          complexity={complexity}
          setComplexity={setComplexity}
        />
      </div>
    </div>
  );
};

export default App;
