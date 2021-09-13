import React, {useState, useEffect} from 'react';
import {createUseStyles} from 'react-jss';
import PropTypes from 'prop-types';


const SearchBox = ({onSearch, current}) => {
  const [searchQuery, setSearchQuery] = useState(current);
  const {nav, searchForm, searchInput, searchButton, logo} = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    if (search) {
      setSearchQuery(search);
    }
  };
  // TODO: pass the function by props
  const handleLogoClick = () => window.location.href = '/';
  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery]);


  return (
    <nav className={nav}>
      <div className={logo} onClick={handleLogoClick}></div>
      <form onSubmit={handleSubmit} className={ searchForm}>
        <input
          name="search"
          type="text"
          defaultValue={current}
          className={ searchInput}/>
        <input
          type="submit"
          value="🔍" // not need icons library :P
          className={searchButton}
        />
      </form>
    </nav>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSearch: PropTypes.func,
  current: PropTypes.string,
};

const useStyles = createUseStyles({
  'nav': {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff159',
    minHeight: 75,
    justifyContent: 'center',
  },
  'logo': {
    display: 'flex',
    width: 45,
    height: 35,
    backgroundImage:
      'url(https://http2.mlstatic.com/frontend-assets/ui-navigation/5.16.1/mercadolibre/logo__small@2x.png)', // free cdn =)
    backgroundSize: 45,
    backgroundRepeat: 'no-repeat',
  },
  'searchForm': {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
  },
  'searchButton': {
    border: 'none',
    width: '10%',
    cursor: 'pointer',
  },
  'searchInput': {
    border: 'none',
    width: '70%',
    height: 30,
  },
  '@media screen and (max-width: 600px)': {
    'nav': {
      minHeight: 50,

    },
    'searchForm': {
      width: '90%',
    },
    'logo': {display: 'none'},
  },
})
;
