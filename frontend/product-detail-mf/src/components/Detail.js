import React, {Suspense, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useProdutDetail} from '../hooks/useProductDetail';
import {createUseStyles} from 'react-jss';
const ItemPrice = React.lazy(() => import('lib/ItemPrice'));

const Detail = ({id}) => {
  const [detail] = useProdutDetail(id);
  const {
    card,
    cardBody,
    item,
    imageWrapper,
    info,
    buyButton,
    description,
    wrapper,
    badgeGreen,
    badgeGray,
    solds,
    titleCls,
  } = useStyles();
  useEffect(() => {
    console.log({pepe: 'pepe', detail});
  }, [detail]);
  return (
    detail && (
      <div className={wrapper}>
        <div className={card}>
          <div className={cardBody}>
            <div className={item}>
              <div className={imageWrapper}>
                <img src={detail.pictures[0]} />
              </div>
            </div>
            <div className={item}>
              <div className={info}>
                <div>
                  {/* y si no es nuevo pero tampoco usado? */}
                  {detail.condition === 'new' && (
                    <small className={badgeGreen}>nuevo</small>
                  )}
                  {detail.condition === 'used' && (
                    <small className={badgeGray}>usado</small>
                  )}{' '}
                  <small className={solds}>
                    {detail.sold_quantity} vendidos
                  </small>
                </div>
                <div className={ titleCls}>
                  <h3>{detail.title}</h3>
                </div>
                <div>
                  <Suspense fallback={'cargando precio...'}>
                    <ItemPrice
                      currency={detail.price.currency}
                      amount={detail.price.amount}
                      decimals={detail.price.decimals}
                    />
                  </Suspense>
                </div>

                {detail.free_shipping && (
                  <div>
                    <p>Envio gratis!</p>
                  </div>
                )}

                <div>
                  <button className={buyButton}>Comprar</button>
                </div>
              </div>
            </div>
          </div>

          <div className={description}>
            <h3>Descripcion del producto</h3>
            {detail.description}
          </div>
        </div>
      </div>
    )
  );
};

export default Detail;

Detail.propTypes = {
  id: PropTypes.string,
};

const useStyles = createUseStyles({
  'wrapper': {
    display: 'flex',
    justifyContent: 'center',
  },

  'cardBody': {
    display: 'flex',
    flexDirection: 'row',
  },
  'card': {
    maxWidth: '75vw',
    margin: 8,
    padding: 8,
    background: '#fff',
    borderRadius: '2px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  },
  'item': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 8,
  },
  '@media screen and (max-width: 720px)': {
    imageWrapper: {
      maxWidth: 300,
    },
    wrapper: {
      flexDirection: 'column',
    },
  },
  'info': {
    display: 'flex',
    flexDirection: 'column',
  },
  'buyButton': {
    width: '100%',
    padding: 8,
    marginTop: 64,
    borderRadius: 8,
    backgroundColor: '#3483fa',
    color: 'white',
    borderColor: 'transparent',
    height: '4vh',
    fontSize: 'large',
    cursor: 'pointer',
  },
  'description': {
    whiteSpace: 'pre-line',
    padding: 8,
  },
  'badge': {
    borderRadius: '8%',
    textAlign: 'center',
    display: 'inline-block',
    color: 'white',
    padding: 4,
    margin: 4,
    fontSize: 10,
    fontWeight: 'bold',
    verticalAlign: 'middle',
  },
  'badgeGreen': {
    composes: ['$badge'],
    background: 'green',
  },
  'badgeGray': {
    composes: ['$badge'],
    background: 'gray',
  },
  'solds': {
    fontWeight: 300,
  },
  'titleCls': {
    marginTop: 64,
  },
});
