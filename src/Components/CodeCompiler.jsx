import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from "@chakra-ui/react";
import ImageToTextConverter from "./Img_to_text";
import './CodeCompiler.css';

const CodeCompiler = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [processedData, setProcessedData] = useState("");
  const [ver, setVer] = useState('');

  const predefinedLanguages = [
    { id: 'ada', name: 'Ada', version: "GNATMAKE 11.1.0" },
    { id: 'c99', name: 'C-99', version: "GCC 11.1.0" },
    { id: 'cpp17', name: 'C++ 17', version: "g++ 17 GCC 11.1.0" },
    { id: 'python3', name: 'Python 3', version: "3.9.9" },
    { id: 'java', name: 'Java', version: "JDK 17.0.1" },
    { id: 'objc', name: 'Objective C', version: "GCC 11.1.0" }
  ];

  useEffect(() => {
    setSelectedLanguage(predefinedLanguages[0]?.id);
  }, []);

  const handleProcessedData = (data) => {
    setProcessedData(data);
  };

  const compileCode = async () => {
    try {
      const options = {
        method: 'POST',
        url: 'https://online-code-compiler.p.rapidapi.com/v1/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'ec227547f5msh42b13be97494ff4p15b878jsn1066c09bfb67',
          // 76727b3a5bmshee78e149110891cp17a7ccjsn6e37daedd1d2
          'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
        },
        data: {
          language: selectedLanguage,
          version: ver,
          code: code,
          input: null
        }
      };
      const response = await axios.request(options);
      setOutput(response.data.output);
    } catch (error) {
      console.error('Error compiling code:', error);
      setError('An error occurred while compiling the code.');
    }
  };

  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <div className="container">
        <div className="left-panel">
          <h3 className='lang'>Select Language:</h3>
          <select value={selectedLanguage} onChange={(e) => { setSelectedLanguage(e.target.value); setVer(predefinedLanguages.find(lang => lang.id === e.target.value)?.version || '') }} className='sellang'>
            {predefinedLanguages.map(language => (
              <option key={language.id} value={language.id}>
                {language.name}
              </option>

            ))}
          </select>

          {/* Code Input */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-input"
            placeholder="Enter your code here"
          ></textarea>

          {/* Compile Button */}
          <button onClick={compileCode} className="submit-btn">
            Compile Code
          </button>

          {/* Output */}
          <div className="output">{output || error}</div>
        </div>


        <div className="right-panel">
          <ImageToTextConverter onDataProcessed={handleProcessedData} />
        </div>
      </div>
    </Box>
  );
};

export default CodeCompiler;
