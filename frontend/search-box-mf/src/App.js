import React from 'react';
import SearchBox from '../components/SearchBox';

const dummySearch = (query) =>
  console.warn('onSearch prop was not passed to search-box-mf!!!', query);
const App = ({onSearch = dummySearch}) => (<SearchBox />);

export default App;
