import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import MarkdownSyntax from './MarkdownSyntax.jsx'
import  gfm from 'remark-gfm'

function App() {
  const [markdown, setMarkdown] = useState('## markdown preview');
  return (
  <main>
    <section className="markdown">
      <textarea className="input" value={markdown} onChange={(e) => setMarkdown(e.target.value)}>
      </textarea>
      <article className="result">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </section>
    <MarkdownSyntax/>
  </main>
  );
}

export default App;
