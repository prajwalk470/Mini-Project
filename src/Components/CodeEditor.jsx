import { useRef, useState } from "react";
import { Box, HStack, Input } from "@chakra-ui/react"; // Import Input from Chakra UI
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import ImageToTextConverter from "./Img_to_text";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [processedData, setProcessedData] = useState("");
  const [inputValue, setInputValue] = useState(""); // State for input value

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleProcessedData = (data) => {
    setProcessedData(data);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="60%">
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
        <Input width="300px"
          placeholder="Enter input here"
          value={inputValue}
          onChange={handleInputChange}
        />
        <ImageToTextConverter onDataProcessed={handleProcessedData} />
        <Output editorRef={editorRef} language={language} processedData={processedData} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
