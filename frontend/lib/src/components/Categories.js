import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
const getSeparator = (index) => index !== 0 ? ' - ' : '';
const Categories = ({categories = []}) => {
  const {categoriesList, wrapper} = useStyles();

  return (
    <div className={wrapper}>
      <ul className={categoriesList}>
        {categories.map((c, i) => (
          <li key={`category-${i}`}>{` ${getSeparator(i)} ${c}`}</li>
        ))}
      </ul>
    </div>

  );
};


Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default Categories;

const useStyles = createUseStyles({
  categoriesList: {
    padding: 0,
    display: 'inline-flex',
    listStyle: 'none',
    whiteSpace: 'pre-wrap',
    fontSize: 'small',
    fontWeight: 200,
    color: 'GrayText',
    alignSelf: 'flex-start',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
});

