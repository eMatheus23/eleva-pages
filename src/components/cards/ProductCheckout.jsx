import React, { useEffect, useState } from 'react';

import '../../styles/components/cards/product-checkout.css';

// Icons
import deleteIcon from '../../images/icons/delete-product-checkout.svg';

// Components
import { ButtonLight } from '../Buttons';

export default function ProductCheckout(props) {
  document.title = 'Elevagro | Obrigado pela compra!';

  const currencyFormat = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  };

  const {
    id,
    name,
    discription,
    price_original,
    price,
    discount,
    img,
  } = props.product;

  var priceArray = [];

  const [checkoutSucess, setCheckoutSucess] = useState(false);

  function handlePrice() {
    // Evita que a função execute quando o props.product estiver vazio
    if (price) {
      priceArray = price
        .toLocaleString('pt-BR', currencyFormat)
        .split('$')
        .join(',')
        .split(',');
    }
  }

  handlePrice();

  useEffect(() => {
    setCheckoutSucess(props.success);
  }, []);

  console.log(priceArray);

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
              <strong>{priceArray[1]}</strong>,{priceArray[2]}
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
