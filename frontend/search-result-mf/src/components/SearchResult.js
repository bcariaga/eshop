import React, {Suspense} from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import {createUseStyles} from 'react-jss';
const Categories = React.lazy(() => import('lib/Categories'));
import {
  mobileStyles,
  tabletStyles,
  laptopStyles,
  largeStyles,
} from 'lib/mediaQueries';


const SearchResult = ({items, categories, onClickItem: handleClickItem}) => {
  const {wrapper, itemList} =
    useStyles();
  return (
    <div className={wrapper}>
      {categories &&
          <Suspense fallback={'cargando categorias...'}>
            <Categories
              categories={categories}
            />
          </Suspense>}
      {items && (
        <div className={itemList} data-testid="items">
          {items.map((item, i) => (
            <Item
              key={`item-${i}`}
              {...item}
              onClickItem={handleClickItem}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;

SearchResult.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.arrayOf(PropTypes.string),
  onClickItem: PropTypes.func,
};
const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    margin: 0,
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemList: {
    display: 'flex',
    flexDirection: 'column',

  },
  ...mobileStyles({
    'itemList': {
      maxWidth: '95vw',
    },

  }),
  ...tabletStyles({
    'itemList': {
      maxWidth: '80vw',
    },
  }),
  ...laptopStyles({
    'itemList': {
      maxWidth: '70vw',
    },
  }),
  ...largeStyles({
    'itemList ': {
      maxWidth: '50vw',
    },
  }),
});
