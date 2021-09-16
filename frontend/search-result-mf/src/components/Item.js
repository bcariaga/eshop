import React, {Suspense} from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
const ItemPrice = React.lazy(() => import('lib/ItemPrice'));
import {
  mobileStyles,
  tabletStyles,
  laptopStyles,
  largeStyles,
} from 'lib/mediaQueries';

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
        <Suspense fallback={'cargando precio...'}>
          <ItemPrice
            currency={currency}
            amount={amount}
            decimals={decimals}
            condition={condition}
          />
        </Suspense>
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
    'width': '100%',
    'maxWidth': 850,
    'minWidth': 600,
  },
  itemImageWrapper: {
    padding: 16,
  },
  itemImage: {
    width: 180,
    height: 180,
  },
  itemInfo: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    justifyContent: 'space-around',
  },
  ...mobileStyles({

    'itemImage': {
      width: 100,
      height: 100,
    },
    'itemImageWrapper': {
      padding: 4,
    },
    'itemInfo': {
      padding: 0,
    },
  }),
  ...tabletStyles({
    'itemImage': {
      width: 120,
      height: 120,
    },
    'itemImageWrapper': {
      padding: 4,
    },
    'itemInfo': {
      padding: 0,
    },
  }),
  ...laptopStyles({
    'itemImage': {
      width: 170,
      height: 170,
    },
    'itemImageWrapper': {
      padding: 8,
    },
    'itemInfo': {
      padding: 16,
    },
  }),
  ...largeStyles({
    'itemImage': {
      width: 190,
      height: 190,
    },
    'itemImageWrapper': {
      padding: 8,
    },
    'itemInfo': {
      padding: 16,
    },
  }),
});
