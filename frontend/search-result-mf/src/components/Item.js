import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import ItemPrice from './ItemPrice';


const Item = ({
  id,
  picture,
  title,
  price: {amount, decimals, currency},
  // eslint-disable-next-line camelcase
  free_shipping,
  condition,
  onClickItem: handleClickItem,
}) => {
  const {
    oneItem,
    itemImage,
    itemImageWrapper,
    itemInfo,
  } = useStyles();

  return (
    <div className={oneItem} onClick={() => handleClickItem(id)}>
      <div className={itemImageWrapper}>
        <img src={picture} className={itemImage} />
      </div>
      <div className={itemInfo}>
        <ItemPrice {...{currency, amount, decimals, condition}}/>
        <div>
          <p>{title}</p>
        </div>

        <div>
          {/* eslint-disable-next-line camelcase*/}
          {free_shipping && <span title="envio gratis!">envio gratis! 🚛</span>}
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
  condition: PropTypes.string,
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
    padding: 8,
    justifyContent: 'space-around',
  },

});
