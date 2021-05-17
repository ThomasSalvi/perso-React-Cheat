import React from 'react';

const Item3 = ({counter}) => (
  <div className="items">
    <h1 className="items-title">Condition ternaire</h1>
    <p>Ternaire pour définir une classe </p>
    <pre>
      <code className="language-jsx">
  {`
    const Post = ({ zen }) => {

      return (
        <Link to="/article" className={zen ? "post post-zen" : "post"}>
          <article />
        </Link>
      );
    };
  `}
      </code>
  </pre>
  </div>
);

export default Item3;
