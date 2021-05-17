import React from 'react';
import Prism from "prismjs";

const Item1 = () => {
  Prism.highlightAll();
  return (
    <div className="items">
      <h1 className="items-title">Composant principal (Fonction)</h1>
      <pre>
        <code className="language-jsx">
    {`
      // == Import npm
      import React from 'react';
      import Currencies from 'src/components/Currencies';
      import Amount from 'src/components/Amount';
      
      // == Import
      import './styles.css';
      
      const Converter = () => (
        <div className="converter">
          <Currencies />
          <Amount />
        </div>
      );

      // == Export
      export default Converter;
    `}
        </code>
    </pre>
      <h1 className="items-title">Composant principal (Class)</h1>
      <pre>
        <code className="language-jsx">
    {`
      // == Import npm
      import React from 'react';
      import Header from 'src/components/Header';
      import Main from 'src/components/Main';
      
      // == Import
      import './styles.css';
      
      // == Composant
      class App extends React.Component {
        constructor(props) {
          super(props);
          // on initialise le state
          this.state = {
            newTaskLabel: '',
            tasks: '',
          };
        }
        
        render() {
          return (
            <div>
              <Header />
              <Main />
            </div>
          );
        }
      }
      
      // == Export
      export default App;
    `}
        </code>
    </pre>
    </div>
  )};

export default Item1;
