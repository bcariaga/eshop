import React from 'react';
import Search from './components/Search';
import PropTypes from 'prop-types';

const App = ({query, onClickItem, onSearch}) => {
  console.log({mfQuery: query});
  return <Search query={query} onClickItem={onClickItem} onSearch={onSearch} />;
};

App.propTypes = {
  query: PropTypes.string,
  onClickItem: PropTypes.func,
  onSearch: PropTypes.func,
};

export default App;
