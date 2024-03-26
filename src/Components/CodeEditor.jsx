import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import ImageToTextConverter from "./Img_to_text"; // Import the ImageToTextConverter component

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [processedData, setProcessedData] = useState(""); // State to store processed data

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  // Function to handle processed data from ImageToTextConverter
  const handleProcessedData = (data) => {
    setProcessedData(data);
    // Additional logic if needed with processed data
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        {/* Pass handleProcessedData function to ImageToTextConverter */}
        <ImageToTextConverter onDataProcessed={handleProcessedData} />
        {/* Render Output component and pass processedData */}
        <Output editorRef={editorRef} language={language} processedData={processedData} />
      </HStack>
    </Box>
  );
};
export default CodeEditor;
