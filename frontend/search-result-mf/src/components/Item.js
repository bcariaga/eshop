import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
const Item = ({
  id,
  picture,
  title,
  price: {ammount, decimals},
  // eslint-disable-next-line camelcase
  free_shipping,
  onClickItem: handleClickItem,
}) => {
  const {oneItem, itemImage, itemImageWrapper, itemInfo, price} = useStyles();
  return (
    <div
      className={oneItem}
      onClick={() => handleClickItem(id)}
    >
      <div className={itemImageWrapper}>
        <img src={picture} className={itemImage} />
      </div>
      <div className={itemInfo}>
        <div>
          <p>{title}</p>
        </div>
        <div className={price}>
          <h4>{ammount}</h4>
          <span>{decimals}</span>

        </div>
        <div>
          {/* eslint-disable-next-line camelcase*/}
          <p>{free_shipping ? 'envio gratis' : ''}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;

Item.propTypes = {
  id: PropTypes.string,
  picture: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.object,
  free_shipping: PropTypes.bool,
  onClickItem: PropTypes.func,
};
const useStyles = createUseStyles({
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
  price: {
    fontSize: 'large',
    display: 'inline',
  },
});
