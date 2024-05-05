import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, HStack, Input } from "@chakra-ui/react"; 
import ImageToTextConverter from "./Img_to_text";
import './CodeCompiler.css'; // Import CSS file for component styling

const CodeCompiler = () => {
  const [languageOptions, setLanguageOptions] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [processedData, setProcessedData] = useState("");
  const [ver, setVer] = useState('');

  // useEffect(() => {
  //   const fetchLanguages = async () => {
  //     try {
  //       const options = {
  //         method: 'GET',
  //         url: 'https://online-code-compiler.p.rapidapi.com/v1/languages/',
  //         headers: {
  //           'X-RapidAPI-Key': 'ec227547f5msh42b13be97494ff4p15b878jsn1066c09bfb67',
  //           'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
  //         }
  //       };
  //       const response = await axios.request(options);
  //       console.log('Response:', response); // Log the entire response object
  //       if (response.data && Array.isArray(response.data)) {
  //         setLanguageOptions(response.data);
  //         setSelectedLanguage(response.data[0]?.id); // Select the id of the first language by default
  //       } else {
  //         console.error('Invalid response data:', response.data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching languages:', error);
  //     }
  //   };
  //   fetchLanguages();
  // }, []); 
  const predefinedLanguages = [
    { id: 'ada', name: 'Ada' , version: "GNATMAKE 11.1.0"},
    { id: 'c99', name: 'C-99' ,version: "GCC 11.1.0"},
    { id: 'cpp17', name: 'C++ 17' ,version:"g++ 17 GCC 11.1.0"},
    { id: 'python3', name: 'Python 3' ,version:"3.9.9"},
    { id: 'java', name: 'Java' ,version:"JDK 17.0.1"},
    { id: 'objc', name: 'Objective C', version:"GCC 11.1.0"}
    // Add more languages as needed
  ];

  useEffect(() => {
    // No need to fetch languages from API, use predefined languages directly
    setSelectedLanguage(predefinedLanguages[0]?.id); // Select the id of the first language by default
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
      // console.log(response.data);
    } catch (error) {
      console.error('Error compiling code:', error);
      setError('An error occurred while compiling the code.');
    }
  };

  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}> 
    <div className="container">
  <div className="left-panel">
    {/* Language Selector */}
    <select value={selectedLanguage} onChange={(e) => {setSelectedLanguage(e.target.value);setVer(predefinedLanguages.find(lang => lang.id === e.target.value)?.version || '') }}>
  {predefinedLanguages.map(language => (
    <option key={language.id} value={language.id}>
      {language.name}
    </option>
    
  ))}
  {/* {languageOptions.map(language => (
    <option key={language.id} value={language.id}>
      {language.name}
    </option>
  ))} */}
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
    
    {/* <CodeEditor/> */}
  </Box>
  );
};

export default CodeCompiler;
