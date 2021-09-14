import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';
import Item from './Item';
import {createUseStyles} from 'react-jss';

const SearchResult = ({items, categories, onClickItem: handleClickItem}) => {
  const {wrapper, itemList} =
    useStyles();
  return (
    <div className={wrapper}>
      <Categories categories={categories} />
      {items && (
        <div className={itemList}>
          {items.map((item, i) => (
            <Item key={`item-${i}`} {...item} onClickItem={handleClickItem}/>
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
  },
  categoriesList: {
    display: 'inline-flex',
    listStyle: 'none',
  },
  itemList: {
    display: 'flex',
    flexDirection: 'column',
  },
  oneItem: {
    'cursor': 'pointer',
    'display': 'flex',
    'background': '#fff',
    'borderRadius': '2px',
    'margin': 8,
    'padding': 8,
    'position': 'relative',
    'boxShadow': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    'transition': 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
  },
  itemImageWrapper: {
    padding: 16,
  },
  itemImage: {
    width: 160,
    height: 160,
  },
  itemInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
});
