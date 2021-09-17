import React from 'react';
import SearchBox from './components/SearchBox';


const dummySearch = (query) =>
  console.warn('onSearch prop was not passed to search-box-mf!!!', query);

const App = ({onSearch = dummySearch, current}) =>
  (<SearchBox {...{onSearch, current}}/>);

export default App;

App.propTypes = SearchBox.propTypes;
