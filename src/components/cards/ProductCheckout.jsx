import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

import '../../styles/components/cards/product-checkout.css';

// Mockups
import ProductImg from '../../images/mockups/product-checkout-mockup.png';

// Icons
import deleteIcon from '../../images/icons/delete-product-checkout.svg';

// Components
import { ButtonLight } from '../Buttons';

export default function ProductCheckout(props) {
  document.title = 'Elevagro | Obrigado pela compra!';

  const {
    name,
    discription,
    price_original,
    price,
    discount,
  } = props.product;
  const [priceArray, setPriceArray] = useState([]);
  const [checkoutSucess, setCheckoutSucess] = useState(false);

  useEffect(() => {
    // Evita que a função execute quando o props.product estiver vazio
    price && setPriceArray(() => price.split(','));

    setCheckoutSucess(props.success);
  }, []);

  return (
    <div className='product-checkout-card'>
      <img src={ProductImg} alt='Plataforma Elevagro' />

      <div className='product-title'>
        <h2>{name}</h2>
        <p>{discription}</p>
      </div>

      {!checkoutSucess && (
        <>
          <div className='product-price'>
            <p>R$: {price_original}</p>
            <h2 className='price-style'>
              <span>R$</span>
              <strong>{priceArray[0]}</strong>,{priceArray[1]}
            </h2>
            <span>{discount} de desconto</span>
          </div>

          <img
            className='delete-button'
            src={deleteIcon}
            onClick={() => {
              props.deleteProduct(props.product.id);
            }}
            alt='Excluir produto'
          />
        </>
      )}

      {checkoutSucess && <ButtonLight>Acessar</ButtonLight>}
    </div>
  );
}
