import React from 'react';

const Item12 = () => (
  <div className="items">
    <h1 className="items-title">onClick, onSubmit</h1>
    <p>Si pas besoin de l'event, pas de handlers</p>
    <pre>
      <code className="language-jsx">
  {`
    const Results = ({ fonction }) => {
      return (
        <div>
          <Button onClick={fonction}> Afficher les résultats </Button>
        </div>
      );
    };
  `}
      </code>
    </pre>
    <p>Avec une fonction handler (besoin de l'event pour le preventDefault() et passer la valeur)</p>
    <pre>
      <code className="language-jsx">
  {`
    const Results = ({ fonction }) => {
      const handleClick = (event) => {
        event.preventDefault();
        const index = event.target.value
        fonction(index);
      };
      return (
        <div>
          <Button onClick={handleClick}> Afficher les résultats </Button>
        </div>
      );
    };
  `}
      </code>
    </pre>
  </div>
);

export default Item12;
