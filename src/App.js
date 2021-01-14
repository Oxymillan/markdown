import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import MarkdownSyntax from "./components/MarkdownSyntax";
import NavigationBar from "./components/NavigationBar";

// import  gfm from 'remark-gfm'

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <div>
    <a id='markdown' href="/#markdown">
    <NavigationBar />
    </a>
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
          <a id='syntax' href="/#syntax"> </a>
          <MarkdownSyntax />
      </main>
    </div>
  );
}

export default App;
