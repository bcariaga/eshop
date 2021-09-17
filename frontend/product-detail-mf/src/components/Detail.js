import React, {Suspense} from 'react';
import PropTypes from 'prop-types';
import {useProdutDetail} from '../hooks/useProductDetail';
import {createUseStyles} from 'react-jss';
const ItemPrice = React.lazy(() => import('lib/ItemPrice'));
const Categories = React.lazy(() => import('lib/Categories'));
import {
  mobileStyles,
  tabletStyles,
  laptopStyles,
  largeStyles,
} from 'lib/mediaQueries';
const Detail = ({id, categories}) => {
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

  return (
    detail && (
      <div className={wrapper}>
        {categories &&
          <Suspense fallback={'cargando categorias...'}>
            <Categories
              categories={categories}
            />
          </Suspense>}
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
                  <h3 data-testid="title">{detail.title}</h3>
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
            <p data-testid="description">{detail.description}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Detail;

Detail.propTypes = {
  id: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
};

const useStyles = createUseStyles({
  'wrapper': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },

  'cardBody': {
    display: 'flex',
    flexDirection: 'row',
  },
  'card': {
    maxWidth: '50vw',
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
  ...mobileStyles({
    'card': {
      maxWidth: '90vw',
    },
    'imageWrapper': {
      maxWidth: 100,
    },
    'cardBody': {
      flexDirection: 'column',
    },
  }),
  ...tabletStyles({
    'card': {
      maxWidth: '80vw',
    },
    'imageWrapper': {
      maxWidth: 150,
    },
    'cardBody': {
      flexDirection: 'column',
    },
  }),
  ...laptopStyles({
    card: {
      maxWidth: '70vw',
    },
    imageWrapper: {
      maxWidth: 300,
    },
  }),
  ...largeStyles({
    card: {
      maxWidth: '50vw',
    },
    imageWrapper: {
      maxWidth: 700,
    },
  }),
  'imageWrapper': {
    'maxWidth': 800,
    '& img': {
      width: '100%',
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
