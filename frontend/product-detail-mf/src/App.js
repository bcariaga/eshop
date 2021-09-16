import React from 'react';
import PropTypes from 'prop-types';
import Detail from './components/Detail';

const App = ({id, categories}) => {
  return (
    <Detail id={id} categories={categories}/>
  );
};
App.propTypes = {
  id: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
};
export default App;
