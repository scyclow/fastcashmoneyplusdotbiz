import React from 'react';

// Could probably abstract this into it's own component
const SectionText = ({ content }) => (
  <div>
    {content.map((text, i) => (
      <p
        key={i}
        style={{
          padding: 5,
          fontSize: 16
        }}
      >{text}</p>
    ))}
  </div>
);

const LegalJargon = ({ copy }) => (
  <div>
    {copy.map((section, i) =>
      <div key={i}>
        <h4 style={{
          fontSize: 25,
          padding: 10
        }}>{section.title}</h4>
        <SectionText content={section.content} />
      </div>
    )}
  </div>
);

export default LegalJargon;
