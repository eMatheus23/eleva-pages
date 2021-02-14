import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './styles.css';
import './checkout-bill.css';

import logoElevagroFooter from '../../assets/logos/marca-elevagro.svg';

// Components
import ButtonRounded from '../../components/Buttons';
import ProgressBar from '../../components/ProgressBar';

const CheckoutPage = () => {
  document.title = 'Boleto | Elevagro';

  return (
    <div id="page-checkout-bill">
      <header>
        <Link to="/">
          <img src={logoElevagroFooter} alt="Elevagro" />
        </Link>
      </header>

      <div className="content-wrapper">
        <main>
          <div className="checkout-bill-wrapper">
            <div className="checkout-bill-title">
              <h3>Pedido concluído!</h3>
            </div>

            <div className="checkout-bill-card">
              <h3>Pedido #981</h3>
              <h2>Seu pedido foi concluído com êxito!</h2>
              <p>
                Para que sua compra seja liberada, é necessário que você efetue
                o pagamento da fatura, que pode ser feito até a data do
                vencimento em qualquer agência bancária ou através do site do
                seu banco. A confirmação de pagamento do boleto é feita
                automaticamente pelo banco.
              </p>

              <ButtonRounded buttonStyle="primary">
                Acessar boleto
              </ButtonRounded>
            </div>

            <ButtonRounded
              type="link"
              linkTo="/checkout"
              buttonStyle="transparent"
            >
              Pagar com cartão
            </ButtonRounded>

            <ProgressBar progress={2} />
          </div>
        </main>

        <aside>
          <div className="call-center-card">
            <h2>Central de atendimento</h2>
            <p>
              Caso tenha dúvidas ou enfrente alguma dificuldade com sua compra,
              estamos à disposição através dos contatos por telefone ou e-mail
              disponível. Acesse a nossa seção de contato com o cliente.
            </p>

            <div className="buttons">
              <ButtonRounded buttonStyle="transparent">
                Fale conosco
              </ButtonRounded>
              <ButtonRounded type="link" linkTo="/" buttonStyle="transparent">
                Página inicial
              </ButtonRounded>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
