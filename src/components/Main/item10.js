import React from 'react';

const Item10 = () => (
  <div className="items">
    <h1 className="items-title">useLocation (hook)</h1>
    <p>Retourne un objet représentant l’url actuelle et entraînera à nouveau rendu du composant qui l’utilise chaque fois que l’adresse change </p>
    <pre>
      <code className="language-jsx">
  {`
    import { useLocation } from 'react-router-dom';

    const App = () => {
      const location = useLocation();
      useEffect(() => {
        Prism.highlightAll();
      }, [location]);

      return (
        <div>
          <Header />
          <Main />
        </div>
      );
    };
  `}
      </code>
  </pre>
  <h1 className="items-title">useParam (hook)</h1>
  <p>Retourne le paramètre d'une url paramétrée </p>
  <pre>
      <code className="language-jsx">
  {`
    <Route path="/article/:id">
      <Article />
    </Route>

    import { useParams } from 'react-router-dom';

    const Article = () => {
      const { id } = useParams();
  `}
      </code>
  </pre>
  </div>
);

export default Item10;
