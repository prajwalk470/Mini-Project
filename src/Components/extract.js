// const extractCppCode = (text) => {

//     const pattern = /(?:^|\n)(?:\s*\/\/.*|\/\*(?:.|\n)*?\*\/|\s*)*(?:[^\/"':]|"[^"]*"|'[^']*')*?\n(?:.*?\n)*?(?:.*?{\n(?:.*?\n|\n)*?}|\n\s*(?:if|for|while|do)\s*\((?:.|\n)*?\)\s*(?:.*?\n)*?(?:.*?{\n(?:.*?\n|\n)*?}|\n.*?;|\n\s*(?:else|else\s+if)\s*(?:.*?\n)*?(?:.*?{\n(?:.*?\n|\n)*?}|\n.*?;))*(?=\n|$)/g;
  
  
//     const codeBlocks = text.match(pattern);
  
//     const extractedCode = codeBlocks ? codeBlocks.join('\n') : '';
  
//     return extractedCode;
// };

// export default extractCppCode;