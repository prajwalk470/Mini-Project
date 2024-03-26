import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { LANGUAGE_VERSIONS } from "../constants";
  
  const languages = Object.entries(LANGUAGE_VERSIONS);
  const ACTIVE_COLOR = "blue.400";
  
  const LanguageSelector = ({ language, onSelect }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
      // Additional logic if needed with the selected file
    };
    return (
      <Box ml={2} mb={4}>
        <div className="container" display="flex" flex-direction="row">
        <Text mb={2} fontSize="lg" >
          Language:
        </Text>
        <Menu isLazy>
          <MenuButton as={Button}>{language}</MenuButton>
          <MenuList bg="#110c1b">
            {languages.map(([lang, version]) => (
              <MenuItem
                key={lang}
                color={lang === language ? ACTIVE_COLOR : ""}
                bg={lang === language ? "gray.900" : "transparent"}
                _hover={{
                  color: ACTIVE_COLOR,
                  bg: "gray.900",
                }}
                onClick={() => onSelect(lang)}
              >
                {lang}
                &nbsp;
                <Text as="span" color="gray.600" fontSize="sm">
                  ({version})
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <input type="file" onChange={handleFileSelect} style={{ display: 'none'}} id="fileInput" />
      <Button ml={4} onClick={() => document.getElementById('fileInput').click()}>Upload File</Button>
        </div>
      </Box>
    );
  };
  export default LanguageSelector;