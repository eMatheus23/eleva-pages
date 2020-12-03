import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

//CSS
import '../styles/pages/checkout-page.css';
import '../styles/components/cards/checkout-bill.css';

import logoElevagroFooter from '../images/logos/marca-elevagro.svg';

// Components
import { ButtonLight, ButtonWhite } from '../components/Buttons';
import ProgressBar from '../components/ProgressBar';

export default function CheckoutPage() {
  document.title = 'Elevagro | Checkout';

  const [productsInCart, setProductsInCart] = useState([]);
  const [offerActive, setOfferActive] = useState(false);

  const history = useHistory();

  // Busca os produtos no carrinho
  const cart = JSON.parse(localStorage.getItem('@elevagro-app/cart'));

  useEffect(() => {
    // Se o carrinho estiver vazio, retorna para a homepage
    if (!cart | (cart.length === 0)) {
      return history.push('/');
    }

    setProductsInCart(cart[0]);

    // Procura os planos premium no carrinho
    const plan = cart[0].filter((product) => product.subscription);

    // Se existir algum, ele seta na const ChosenPlan
    plan && plan[0].subscription === 'semestral' && setOfferActive(true);
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
          <div className='checkout-bill-wrapper'>
            <div className='checkout-bill-title'>
              <h3>Pedido concluído!</h3>
            </div>

            <div className='checkout-bill-card'>
              <h3>Pedido #981</h3>
              <h2>Seu pedido foi concluído com êxito!</h2>
              <p>
                Para que sua compra seja liberada, é necessário que você efetue
                o pagamento da fatura, que pode ser feito até a data do
                vencimento em qualquer agência bancária ou através do site do
                seu banco. A confirmação de pagamento do boleto é feita
                automaticamente pelo banco.
              </p>

              <ButtonLight>Acessar boleto</ButtonLight>
            </div>

            <ButtonWhite linkTo={'/signup/checkout'}>
              Pagar com cartão
            </ButtonWhite>

            <ProgressBar progress={2} />
          </div>
        </main>

        <aside>
          <div className='call-center-card'>
            <h2>Central de atendimento</h2>
            <p>
              Caso tenha dúvidas ou enfrente alguma dificuldade com sua compra,
              estamos à disposição através dos contatos por telefone ou e-mail
              disponível. Acesse a nossa seção de contato com o cliente.
            </p>

            <div className='buttons'>
              <ButtonWhite>Fale conosco</ButtonWhite>
              <ButtonWhite linkTo={'/'}>Página inicial</ButtonWhite>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
