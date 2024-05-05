import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode, inputs) => { // Accept inputs as an array
  try {
    const response = await API.post("/execute", {
      language: language,
      version: LANGUAGE_VERSIONS[language],
      files: [
        {
          content: sourceCode,
        },
      ],
      stdin: inputs // Join the inputs array with newlines
    });
    return response.data;
  } catch (error) {
    // Handle errors if any
    console.error("Error executing code:", error);
    throw error;
  }
};
