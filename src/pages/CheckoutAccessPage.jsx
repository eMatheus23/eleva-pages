import React from 'react';
import { Link } from 'react-router-dom';

//CSS
import '../styles/pages/checkout-page.css';
import '../styles/components/cards/complete-profile.css';

import logoElevagroFooter from '../assets/images/logos/marca-elevagro.svg';

// Components
import ProgressBar from '../components/ProgressBar';
import { ButtonDark } from '../components/Buttons';
import OptionsGenerator from '../components/SelectorOptionsGenerator';
import ProductCheckout from '../components/cards/ProductCheckout';

import ProfileIcon from '../assets/images/icons/complete-profile.svg';

import {
  professions,
  formations,
  cultures,
  areas,
} from '../data/research-options';

export default function CheckoutAccessPage() {
  document.title = 'Acesse seu produto!';

  // Busca os produtos no carrinho
  const purchases = JSON.parse(sessionStorage.getItem('@elevagro-app/purchases'));
  const productsInCart = purchases;

  function handleSelectChange(event) {
    const select = event.target;
    const input = event.target.nextSibling;

    console.log(input);

    if (select.value === 'outro') {
      select.style.display = 'none';
      input.style.display = 'flex';
    }
  }

  function handleInputCancel(event) {
    const inputContainer = event.target.parentNode;
    const input = event.target.parentNode.firstChild;
    const select = event.target.parentNode.previousSibling;

    console.log(event);

    inputContainer.style.display = 'none';
    input.value = '';
    select.style.display = 'flex';
    select.value = 0;
  }

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
                    defaultValue={0}
                    required
                  >
                    <option value={0} disabled>
                      Selecione aqui
                    </option>
                    <OptionsGenerator array={cultures} />
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
                    defaultValue={0}
                    required
                  >
                    <option value={0} disabled>
                      Selecione aqui
                    </option>
                    <OptionsGenerator array={areas} />
                  </select>
                </fieldset>

                <fieldset>
                  <label htmlFor='user-profession'>Profissão</label>
                  <select
                    name='user-profession'
                    id='user-profession'
                    className='select-appearance'
                    onChange={handleSelectChange}
                    defaultValue={0}
                    required
                  >
                    <option value={0} disabled>
                      Selecione aqui
                    </option>
                    <OptionsGenerator array={professions} />
                  </select>

                  <div className='input-container-research'>
                    <input type='text' placeholder='Digite aqui' />
                    <button type='button' onClick={handleInputCancel}>
                      Cancelar
                    </button>
                  </div>
                </fieldset>

                <fieldset>
                  <label htmlFor='user-formation'>Formação</label>
                  <select
                    name='user-formation'
                    id='user-formation'
                    className='select-appearance'
                    onChange={handleSelectChange}
                    defaultValue={0}
                    required
                  >
                    <option value={0} disabled>
                      Selecione aqui
                    </option>
                    <OptionsGenerator array={formations} />
                  </select>

                  <div className='input-container-research'>
                    <input type='text' placeholder='Digite aqui' />
                    <button type='button' onClick={handleInputCancel}>
                      Cancelar
                    </button>
                  </div>
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
          <section className='checkout-cart-success'>
            <h3>O seu pedido</h3>

            {productsInCart.map((product, key) => {
              if (product.type !== 'coupon') {
                return (
                  <ProductCheckout
                    key={'produto_' + key}
                    product={product}
                    success={true}
                  />
                );
              }
              return false;
            })}
          </section>

          <section className='checkout-premium-success'>
            <h2>MARCOS, SEJA BEM-VINDO(A).</h2>
            <p>
              Queremos que você aprenda muito com nossos conteúdos e cursos.
              Trabalhamos para a capacitação constante do profissional do
              agronegócio.
            </p>
            <p>
              Para qualquer dúvida ou sugestão, por favor, entre em contato com
              a gente.
            </p>

            <p>
              <strong>Esperamos que sua experiência seja ótima.</strong>
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
