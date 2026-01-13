import React, { useState, useRef } from "react";
import CodeEditor from "./components/codeeditor";
import CodePreview from "./components/codepreview";
import DownloadButton from "./components/downloadbutton";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const previewRef = useRef(null);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Code Editor with PDF Export</h1>
      </header>

      <main className="app-main">
        <div className="editor-container">
          <CodeEditor
            code={code}
            language={language}
            onCodeChange={handleCodeChange}
            onLanguageChange={handleLanguageChange}
          />
        </div>

        <div className="preview-container">
          <h2>Code Preview</h2>
          <div className="preview-wrapper" ref={previewRef}>
            <CodePreview code={code} language={language} />
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <DownloadButton
          previewRef={previewRef}
          isGeneratingPDF={isGeneratingPDF}
          setIsGeneratingPDF={setIsGeneratingPDF}
          filename="code-export.pdf"
        />
      </footer>
    </div>
  );
}

export default App;
