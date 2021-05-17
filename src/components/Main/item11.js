import React from 'react';

const Item11 = () => (
  <div className="items">
    <h1 className="items-title">Map sur un tableau</h1>
    <p>Equivalent à un forEach</p>
    <pre>
      <code className="language-jsx">
  {`
    const Results = ({resluts}) => {

      return (
        <div>
          {results.map((result) => (
            <Result key={result.id} result={result} />
          ))}
        </div>
      );
    };
  `}
      </code>
    </pre>
  </div>
);

export default Item11;
