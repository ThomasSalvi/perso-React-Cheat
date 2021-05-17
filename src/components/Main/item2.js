import React from 'react';
import Prism from 'prismjs';


const Item2 = ({counter}) => (
  <div className="items">
    <h1 className="items-title">Validation de props</h1>
    <pre>
      <code className="language-jsx">
  {`
    import PropTypes from 'prop-types';
    const Tasks = ({ listOfTasks, counter, toggleTask }) => ()

    Tasks.propTypes = {
      listOfTasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })).isRequired,
      counter: PropTypes.number.isRequired,
      toggleTask: PropTypes.bool.isRequired,
    };
  `}
      </code>
  </pre>
  </div>
);

export default Item2;
