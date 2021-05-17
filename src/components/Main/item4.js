import React from 'react';


const Item3 = ({counter}) => (
  <div className="items">
    <h1 className="items-title">useState</h1>
    <p>L'import dans l'index du composant principal</p>
    <pre>
      <code className="language-jsx">
  {`
    import React, { useState } from 'react';
  `}
      </code>
  </pre>
  <p>Les states</p>
  <pre>
      <code className="language-jsx">
  {`
    const zenMode = useState(false);
    // Renvoi un tableau avec l'état initial et la fonction Setter
    zenMode[0] // Renvoi false
    zenMode[1](true) // Change false en true
  `}
      </code>
  </pre>
  <p>Notation en destructuring</p>
  <pre>
      <code className="language-jsx">
  {`
    const [zen, setZen] = useState(false);
    setZen(true); // change la valeur
  `}
      </code>
  </pre>
  </div>
);

export default Item3;
