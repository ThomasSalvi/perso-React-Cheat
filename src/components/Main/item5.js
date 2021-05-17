import React from 'react';


const Item3 = ({counter}) => (
  <div className="items">
    <h1 className="items-title">Memo</h1>
    <p>Comparaison de surface pour les fonctions, équivalent de pureComponent pour les classes</p>
    <pre>
      <code className="language-jsx">
  {`
    export default React.memo(Blog);
  `}
      </code>
  </pre>
  </div>
);

export default Item3;
