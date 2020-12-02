import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

//CSS
import '../styles/pages/checkout-page.css';
import '../styles/components/cards/complete-profile.css';

import logoElevagroFooter from '../images/logos/marca-elevagro.svg';

// Components
import ProgressBar from '../components/ProgressBar';
import { ButtonDark } from '../components/Buttons';
import ProductCheckout from '../components/cards/ProductCheckout';

import ProfileIcon from '../images/icons/complete-profile.svg';

export default function CheckoutAccessPage(props) {
  document.title = 'Acesse seu produto!';

  const [productsInCart, setProductsInCart] = useState([]);
  const history = useHistory();

  // Busca os produtos no carrinho
  const cart = JSON.parse(localStorage.getItem('@elevagro-app/cart'));

  useEffect(() => {
    // Se o carrinho estiver vazio, retorna para a homepage
    if (!cart) {
      return history.push('/');
    }

    setProductsInCart(cart[0]);
  }, []);

  return (
    <div id='page-checkout'>
      <header>
        <Link to={'/'}>
          <img src={logoElevagroFooter} alt='Elevagro' />
        </Link>
      </header>

      <div className='content-wrapper'>
        <main>
          <div className='complete-profile-wrapper'>
            <div className='complete-profile-title'>
              <h3>Compra realizada com sucesso.</h3>
            </div>
            <div className='card-container'>
              <h2>Melhore a sua experiência.</h2>
              <p>
                A Elevagro sugere conteúdos mais úteis e relevantes para você,
                se você tiver o seu perfil mais completo.
              </p>
              <form action=''>
                <fieldset>
                  <label htmlFor='user-prefered-culture'>
                    Principal cultura de interesse
                  </label>
                  <select
                    name='user-prefered-culture'
                    id='user-prefered-culture'
                    className='select-appearance'
                    required
                  >
                    <option value='soja'>Selecione aqui</option>
                    <option value='soja'>Soja</option>
                    <option value='milho'>Milho</option>
                    <option value='trigo'>Trigo</option>
                    <option value='...'>...</option>
                  </select>
                </fieldset>

                <fieldset>
                  <label htmlFor='user-prefered-area'>
                    Principal área de interesse
                  </label>
                  <select
                    name='user-prefered-area'
                    id='user-prefered-area'
                    className='select-appearance'
                    required
                  >
                    <option value='soja'>Selecione aqui</option>
                    <option value='fitopatologia1'>Fitopatologia</option>
                    <option value='fitopatologia12'>Fitopatologia</option>
                    <option value='fitopatologia13'>Fitopatologia</option>
                    <option value='...'>...</option>
                  </select>
                </fieldset>

                <fieldset>
                  <label htmlFor='user-profession'>Profissão</label>
                  <select
                    name='user-profession'
                    id='user-profession'
                    className='select-appearance'
                    required
                  >
                    <option value='soja'>Selecione aqui</option>
                    <option value='1'>Profissão 01</option>
                    <option value='2'>Profissão 02</option>
                    <option value='3'>Profissão 03</option>
                    <option value='4'>...</option>
                  </select>
                </fieldset>

                <ButtonDark>
                  <img src={ProfileIcon} alt='Complete seu perfil' />
                  Completar meu perfil
                </ButtonDark>
              </form>
            </div>

            <ProgressBar progress={3} />
          </div>
        </main>

        <aside>
          <section className='checkout-cart-sucess'>
            <h3>O seu pedido</h3>

            {productsInCart.map((product, key) => {
              return (
                <ProductCheckout
                  key={'produto_' + key}
                  product={product}
                  success={true}
                />
              );
            })}
          </section>
        </aside>
      </div>
    </div>
  );
}
