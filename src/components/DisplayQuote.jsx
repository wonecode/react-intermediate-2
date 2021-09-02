import React from 'react';
import './DisplayQuote.css';

function DisplayQuote({ quote }) {
  return (
    quote && (
      <figure className='QuoteCard'>
        <img src={quote.image} alt={quote.character} />
        <figcaption>
          <blockquote>{quote.character}</blockquote>
          <p>
            <cite>{quote.quote}</cite>
          </p>
        </figcaption>
      </figure>
    )
  );
};

export default DisplayQuote;