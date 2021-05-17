import React from 'react';

const Item14 = () => (
  <div className="items">
    <h1 className="items-title">Scss</h1>
    <p>On défini les variables dans un fichier _vars.scss (src/styles)</p>
    <pre>
      <code className="language-scss">
  {`
    $primaryColor: #ecf0f1;
    $SecondaryColor: #f2f2f2;
    $darkBorder: #ebeff0;
    $gutter: 0.5rem;
  `}
      </code>
    </pre>
    <p>On appelle ce fichier dans le scss d'un composant</p>
    <pre>
      <code className="language-scss">
  {`
    @use 'src/styles/vars';

    .header{
      width:100%;

      &-title{
        color: vars.$primaryColor;
        padding: vars.$gutter auto;

        &:hover{
          color: vars.$secondaryColor;
        }
      }
    }

  `}
      </code>
    </pre>
  </div>
);

export default Item14;
