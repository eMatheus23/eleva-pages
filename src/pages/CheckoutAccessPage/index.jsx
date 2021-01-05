import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './styles.css';

import logoElevagroFooter from '../../assets/images/logos/marca-elevagro.svg';

// Components
import ProductCheckout from '../../components/cards/ProductCheckout';
import CompleteProfileCard from '../../components/cards/CompleteProfile';

export default function CheckoutAccessPage() {
  document.title = 'Acesse seu produto!';

  // Busca os produtos no carrinho
  const purchases = JSON.parse(localStorage.getItem('@elevagro-app/purchases'));
  const productsInCart = purchases;

  return (
    <div id="page-checkout">
      <header>
        <Link to="/">
          <img src={logoElevagroFooter} alt="Elevagro" />
        </Link>
      </header>

      <div className="content-wrapper">
        <main>
          <CompleteProfileCard />
        </main>

        <aside>
          <section className="checkout-cart-success">
            <h3>O seu pedido</h3>

            {productsInCart.map((product, key) => {
              if (product.type !== 'coupon') {
                return (
                  <ProductCheckout
                    key={`produto_${key}`}
                    product={product}
                    success
                  />
                );
              }
              return false;
            })}
          </section>

          <section className="checkout-premium-success">
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
