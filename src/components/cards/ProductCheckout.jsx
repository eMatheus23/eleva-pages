import React, { useEffect, useState } from 'react';

import '../../styles/components/cards/product-checkout.css';

// Icons
import deleteIcon from '../../images/icons/delete-product-checkout.svg';

// Components
import { ButtonLight } from '../Buttons';

export default function ProductCheckout(props) {
  document.title = 'Elevagro | Obrigado pela compra!';

  const [checkoutSucess, setCheckoutSucess] = useState(false);

  const {
    id,
    name,
    discription,
    price_original,
    price,
    discount,
    img,
  } = props.product;

  const priceDecimals = Math.round((price % Math.floor(price)) * 100)

  const currencyFormat = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  };

  useEffect(() => {
    setCheckoutSucess(props.success);
  }, [props.success]);

  return (
    <div className='product-checkout-card'>
      <img src={img.default} alt='Plataforma Elevagro' />

      <div className={`product-title ${checkoutSucess && 'bold'} `}>
        <h2>{name}</h2>
        <p>{discription}</p>
      </div>

      {!checkoutSucess && (
        <>
          <div className='product-price'>
            <p>{price_original.toLocaleString('pt-BR', currencyFormat)}</p>
            <h2 className='price-style'>
              <span>R$</span>
              <strong>{Math.floor(price)}</strong>,
              {priceDecimals}
            </h2>
            <span>{discount} de desconto</span>
          </div>

          <img
            className='delete-button'
            src={deleteIcon}
            onClick={() => {
              props.deleteProduct(id);
            }}
            alt='Excluir produto'
          />
        </>
      )}

      {checkoutSucess && <ButtonLight linkTo={'/'}>Acessar</ButtonLight>}
    </div>
  );
}
