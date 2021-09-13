import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
const getSeparator = (index) => index !== 0 ? ' - ' : '';
const Categories = ({categories = []}) => {
  const {categoriesList} = useStyles();

  return (
    <ul className={categoriesList}>
      {categories.map((c, i) => (
        <li key={`category-${i}`}>{` ${getSeparator(i)} ${c}`}</li>
      ))}
    </ul>
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
  },
});

