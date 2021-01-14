import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

// Icons
import deleteIcon from '../../../assets/images/icons/delete-product-checkout.svg';

// Components
import ButtonRounded from '../../Buttons';

// Utils
import formatValue from '../../../utils/formatValue';

import getDecimals from '../../../utils/getDecimals';

const ProductCheckout = ({ product, success, deleteProduct }) => {
  const [checkoutSucess] = useState(() => {
    if (success) return true;

    return false;
  });

  const {
    id,
    category,
    title,
    original_price,
    price,
    discount,
    cover_url,
  } = product;

  return (
    <div className="product-checkout-card">
      <img src={cover_url} alt={category} />

      <div className={`product-title ${checkoutSucess && 'bold'} `}>
        <h2>{category}</h2>
        <p>{title}</p>
      </div>

      {!checkoutSucess && (
        <>
          <div className="product-price">
            <p>{formatValue(original_price)}</p>
            <h2 className="price-style">
              <span>R$</span>
              <strong>{Math.floor(price)}</strong>
              <>,</>
              {getDecimals(price)}
            </h2>
            <span>
              {Math.floor((discount / 1) * 100)}
              <>% de desconto </>
            </span>
          </div>

          <img
            className="delete-button"
            src={deleteIcon}
            onClick={() => {
              deleteProduct(id);
            }}
            alt="Excluir produto"
          />
        </>
      )}

      {checkoutSucess && (
        <ButtonRounded type="link" linkTo="/" buttonStyle="primary">
          Acessar
        </ButtonRounded>
      )}
    </div>
  );
};

ProductCheckout.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    original_price: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    cover_url: PropTypes.string.isRequired,
  }),
  success: PropTypes.bool,
  deleteProduct: PropTypes.func.isRequired,
};

ProductCheckout.defaultProps = {
  success: false,
};

export default ProductCheckout;
