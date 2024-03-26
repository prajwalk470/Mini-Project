import React, { useState } from "react";
import { createWorker }  from "tesseract.js";
// import extractCppCode from "./extract";

const ImageToTextConverter = () => {
  const [text, setText] = useState([]);
  const [cppCode, setCppCode] = useState('');

 const result="";
  const convertImageToText = async (image) => { 

    const worker = await createWorker('eng');

    const result = await worker.recognize(image);

    const lines = result.data.text.split('\n'); 
    setText(lines);
    // console.log(lines);
    await worker.terminate();
  };
//   const handleExtractCppCode = () => {
//     const extractedCode = extractCppCode(result);
//     setCppCode(extractedCode);
//   };
  return (
    <div>
      <input type="file" onChange={(e) => convertImageToText(e.target.files[0])} /> 
      <div>
        {text.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <br />
      {/* <button onClick={handleExtractCppCode}>Extract C++ Code</button> */}
      <br />
      <pre>{cppCode}</pre>
    </div>
  );
};

export default ImageToTextConverter;