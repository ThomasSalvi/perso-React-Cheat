import React from 'react';

const Item9 = ({counter}) => (
  <div className="items">
    <h1 className="items-title">Link et NavLink</h1>
    <p>Génère un lien avec preventDefault et history.pushState automatique </p>
    <pre>
      <code className="language-jsx">
  {`
    import { Link, NavLink } from 'react-router-dom';

    <Link to="/page-1">Page 1</Link>
  `}
      </code>
  </pre>
  <p>NavLink se comporte de la même façon avec la possibilité d'ajouter une classe active </p>
  <pre>
      <code className="language-jsx">
  {`
    import { Link, NavLink } from 'react-router-dom';

    <NavLink activeClassName="current" to="/contact">Contactez-nous</Link>
  `}
      </code>
  </pre>
  </div>
);

export default Item9;
