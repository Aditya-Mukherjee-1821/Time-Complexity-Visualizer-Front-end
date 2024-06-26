import React from 'react';
import './Codeblock.css';

const Codeblock = ({
  code,
  setCode,
  handleSubmit,
  setOutputObj,
  outputObj,
}) => {
  const runCode = () => {
    let capturedOutput = '';
    const originalConsoleLog = console.log;
    const startTime = performance.now();

    // Capture console.log output
    console.log = (...args) => {
      capturedOutput += args.join(' ') + '\n';
    };

    try {
      eval(code); // Assuming 'code' is defined somewhere
      const endTime = performance.now();
      const executionTime = endTime - startTime;

      // Get memory usage
      const memoryUsage = performance.memory
        ? performance.memory.usedJSHeapSize / (1024 * 1024)
        : 0; // in MB

      setOutputObj({
        output: capturedOutput,
        executionTime: executionTime.toFixed(2),
        memoryUsage: memoryUsage.toFixed(2),
        isError: false,
      });
    } catch (error) {
      capturedOutput += 'Error: ' + error.message;
      setOutputObj({ output: capturedOutput, isError: true });
    }

    // Restore console.log
    console.log = originalConsoleLog;
    console.log(capturedOutput);
  };

  const generateLineNumbers = () => {
    const lines = code.split('\n');
    return lines.map((line, index) => (
      <div
        key={index}
        className="line-number"
      >
        {index + 1}
      </div>
    ));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault(); // Prevent default tab behavior
      const textarea = event.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      // Set textarea value to: text before caret + 4 spaces + text after caret
      setCode(code.substring(0, start) + '    ' + code.substring(end));

      // Put caret at right position again
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 4;
      }, 0);
    }
  };

  return (
    <div className="paper">
      <div className="header">
        <h4>Code Editor</h4>
      </div>
      <div className="code-editor">
        <div className="text-area-container">
          <div className="line-numbers">{generateLineNumbers()}</div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows="10"
            cols="50"
            className="form-control custom-text-area"
            placeholder="Enter your JavaScript code here"
            onKeyDown={handleKeyDown}
            spellCheck={false}
          />
        </div>

        <button
          className="btn btn-success custom-button"
          onClick={() => {
            handleSubmit();
            runCode();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Codeblock;
