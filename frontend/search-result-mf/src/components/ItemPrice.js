import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';

export const formatAmount = (amount,
    millionsSeparatorChar = '.') =>
  amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, millionsSeparatorChar);
export const formatDecimals = (decimals) => (decimals === 0 ? '00' : decimals);
export const formatCurrency = (currency) =>
  `${currency === 'ARS' ? '$' : '?'} `;

const ItemPrice = ({currency, amount, decimals, condition}) => {
  const {price, amountCls, decimalsCls, badge} = useStyles();
  return (
    <div className={price}>
      <h3 className={amountCls}>{formatCurrency(currency)}</h3>
      <h3 className={amountCls}>{formatAmount(amount)}</h3>
      <small className={decimalsCls}>{formatDecimals(decimals)}</small>
      {/* eslint-disable-next-line camelcase*/}
      {condition === 'new' && <small className={badge}>nuevo</small>}
    </div>
  );
};

ItemPrice.propTypes = {
  currency: PropTypes.string,
  amount: PropTypes.number,
  decimals: PropTypes.number,
  condition: PropTypes.string,
};

export default ItemPrice;

const useStyles = createUseStyles({

  price: {
    fontSize: 'large',
    display: 'inline',
  },
  amountCls: {
    display: 'inline',
    fontWeight: 300,
  },
  decimalsCls: {
    verticalAlign: 'top',
    fontWeight: 300,
  },
  badge: {
    borderRadius: '8%',
    textAlign: 'center',
    background: 'green',
    display: 'inline-block',
    color: 'white',
    padding: 4,
    margin: 4,
    fontSize: 10,
    fontWeight: 'bold',
    verticalAlign: 'middle',
  },
});

