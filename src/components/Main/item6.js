import React from 'react';

const Item3 = ({counter}) => (
  <div className="items">
    <h1 className="items-title">Router</h1>
    <p>Dans l'index de src</p>
    <pre>
      <code className="language-jsx">
  {`
    import { BrowserRouter as Router } from 'react-router-dom';

    const rootComponent = (
      <Router>
        <Blog />;
      </Router>
    );
    
    const target = document.getElementById('root');
    render(rootComponent, target);
  `}
      </code>
  </pre>
  <p>On défini les routes dans le composant concerné par les différents affichages</p>
  <pre>
      <code className="language-jsx">
  {`
    import { Route, Switch } from 'react-router-dom';

    const Blog = () => {

    return (
      <div className="blog">
        <Header />
        <Switch>
          <Route path="/Principal">
            <Accueil />
          </Route>
          <Route path="/Props">
            <Main />
          </Route>
          <Route path="/Bind">
            <Main />
          </Route>
          <Route path="/Find">
            <Main />
          </Route>
        </Switch>
        )}
        <Footer />
      </div>
    );
  };

  `}
      </code>
  </pre>
  <p>On défini les liens dans le composant concerné (souvent header, nav ...)</p>
  <pre>
      <code className="language-jsx">
  {`
    import { NavLink } from 'react-router-dom';
    import './styles.scss';
    
    const Menu = () => (
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink exact to="/principal">Composant principal <span className="fct">F</span> <span>C</span></NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink exact to="/props">Validation de props <span className="fct">F</span> <span>C</span></NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink exact to="/bind">Bind this <span>C</span></NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink exact to="/find">array.find() <span className="fct">F</span></NavLink>
          </li>
        </ul>
      </nav>
    );

  `}
      </code>
  </pre>
  </div>
);

export default Item3;
