import React from 'react';


const Item3 = ({counter}) => (
  <div className="items">
    <h1 className="items-title">Bind this</h1>
    <p>Permet de lier le contexte à une méthode</p>
    <pre>
      <code className="language-jsx">
  {`
    class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          counter: 1,
        };
        this.changeNav = this.changeNav.bind(this);
      }
  `}
      </code>
  </pre>
  </div>
);

export default Item3;
