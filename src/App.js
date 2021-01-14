import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import MarkdownSyntax from "./components/MarkdownSyntax";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.css";

// import  gfm from 'remark-gfm'

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <div>
      <NavigationBar />
      <main>
        <section className="markdown">
          <textarea
            className="input"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          ></textarea>
          <article className="result">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </section>
          <a id='syntax'><MarkdownSyntax /></a>
      </main>
    </div>
  );
}

export default App;
