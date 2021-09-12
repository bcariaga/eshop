import React from 'react';
import Search from './components/Search';

const App = ({query, onClickItem}) => {
  console.log({mfQuery: query});
  return (<Search query={query} onClickItem={onClickItem}/>);
};


export default App;
