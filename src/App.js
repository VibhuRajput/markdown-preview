import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './style.css';

export default function App() {
  const [markdown, setMarkdown] = useState('#markdown preview');

  return (
    <main>
      <section className="mardown">
        <textarea
          className="input"
          value={markdown}
          onClick={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}
