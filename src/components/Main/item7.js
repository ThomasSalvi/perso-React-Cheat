import React from 'react';

const Item3 = ({counter}) => (
  <div className="items">
    <h1 className="items-title">Vue conditionnelle</h1>
    <p>Afficher un composant si la condition loading vaut true </p>
    <pre>
      <code className="language-jsx">
  {`
    const Blog = () => {

      return (
        <div className="blog">
          <Header />
          {loading && <Main />}
          <Footer />
        </div>
      );
    };
  `}
      </code>
  </pre>
  </div>
);

export default Item3;
