import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useProdutDetail} from '../hooks/useProductDetail';
import {createUseStyles} from 'react-jss';
const Detail = ({id}) => {
  const [detail] = useProdutDetail(id);
  const {
    card,
    wrapper,
    item,
    imageWrapper,
    info,
    buyButton,
    description,
  } = useStyles();
  useEffect(() => {
    console.log(detail);
  }, [detail]);
  return (
    detail &&
    <div className={card}>
      <div className={wrapper}>
        <div className={item}>
          <div className={imageWrapper}>
            <img src={detail.pictures[0]} />
          </div>
        </div>
        <div className={item}>
          <div className={info}>
            <div>
              <span>{detail.condition === 'new' ? 'nuevo' : 'usado'}</span>
              {' '}
              <span>{detail.sold_quantity}  vendidos</span>
            </div>
            <div>
              <h3>{detail.title}</h3>
            </div>
            <div>
              <h1>$ {detail.price.ammount},{detail.price.decimals}</h1>
            </div>
            <div>
              {detail.free_shipping && <p>Envio gratis!</p>}
              {!detail.free_shipping && <button>Calcular envio</button>}
            </div>
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

  );
};

export default Detail;

Detail.propTypes = {
  id: PropTypes.string,
};

const useStyles = createUseStyles({
  'wrapper': {
    'display': 'flex',
    'flexDirection': 'row',
  },
  'card': {
    'margin': 8,
    'padding': 8,
    'background': '#fff',
    'borderRadius': '2px',
    'boxShadow': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    'transition': 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  },
  'item': {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  '@media screen and (max-width: 720px)': {
    'imageWrapper': {
      maxWidth: 300,
    },
    'wrapper': {
      'flexDirection': 'column',
    },
  },
  'info': {
    display: 'flex',
    flexDirection: 'column',
  },
  'buyButton': {
    width: '100%',
  },
  'description': {
    whiteSpace: 'pre-line',

  },
});
