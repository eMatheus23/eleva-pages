import React, { useState } from 'react';

import './styles.css';

// Icons
import deleteIcon from '../../../assets/images/icons/delete-product-checkout.svg';

// Components
import ButtonRounded from '../../Buttons';

import currencyFormat from '../../../data/currency-format';

const ProductCheckout = ({ product, success, ...props }) => {
  document.title = 'Elevagro | Obrigado pela compra!';

  const [checkoutSucess] = useState(() => {
    if (success) return true;

    return false;
  });

  const {
    id,
    name,
    discription,
    price_original,
    price,
    promo_discount,
    img,
  } = product;

  const priceDecimals = Math.round((price % Math.floor(price)) * 100);

  return (
    <div className="product-checkout-card">
      <img src={img.default} alt="Plataforma Elevagro" />

      <div className={`product-title ${checkoutSucess && 'bold'} `}>
        <h2>{name}</h2>
        <p>{discription}</p>
      </div>

      {!checkoutSucess && (
        <>
          <div className="product-price">
            <p>{price_original.toLocaleString('pt-BR', currencyFormat)}</p>
            <h2 className="price-style">
              <span>R$</span>
              <strong>{Math.floor(price)}</strong>
              <>,</>
              {priceDecimals
                .toLocaleString('pt-BR', {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })
                .slice(-2)}
            </h2>
            <span>
              {promo_discount}
              <> % de desconto </>
            </span>
          </div>

          <img
            className="delete-button"
            src={deleteIcon}
            onClick={() => {
              props.deleteProduct(id);
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

export default ProductCheckout;
