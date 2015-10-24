import React from 'react';

const sectionStyle = {
  fontSize: 16,
  padding: 5
};

const jargonStyle = {
  fontSize: 25,
  padding: 10
};

const SectionText = ({ content }) => (
  <div>
    {content.map((text, i) => (
      <p key={i} style={sectionStyle}>
        {text}
      </p>
    ))}
  </div>
);

const LegalJargon = ({ copy }) => (
  <div>
    {copy.map((section, i) =>
      <div key={i}>
        <h4 style={jargonStyle}>{section.title}</h4>
        <SectionText content={section.content} />
      </div>
    )}
  </div>
);

export default LegalJargon;
