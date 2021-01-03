import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

// Icons
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';
import cardIcon from '../../../assets/images/icons/card-icon-gray.svg';
import barcodeIcon from '../../../assets/images/icons/barcode-icon-gray.svg';

// Components
import ButtonRounded from '../../Buttons';
import ProgressBar from '../../ProgressBar';

import currencyFormat from '../../../data/currency-format';

export default function PaymentOptionsCard({ billPage, cartSum }) {
  const [creditSelected, setCreditSelected] = useState('true');
  const [state, setState] = useState({
    checkedA: false,
  });
  const history = useHistory();

  const installments = [];
  let cardInstallments = 0;

  if (cartSum > 150) {
    cardInstallments = 10;
  } else {
    cardInstallments = 1;
  }

  const handleInstallments = () => {
    for (let i = 0; i < cardInstallments; i++) {
      const installment = cartSum / (i + 1);

      installments.push(installment.toLocaleString('pt-BR', currencyFormat));
    }
  };

  handleInstallments();

  const handleChange = event => {
    setCreditSelected(event.target.value);
  };

  const handleSwitchChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handlePurchase = () => {
    // Busca os produtos no carrinho do sessionStorage
    const cart = JSON.parse(sessionStorage.getItem('@elevagro-app/cart'));

    // Exclui o carrinho do sessionStorage
    sessionStorage.setItem('@elevagro-app/cart', JSON.stringify([]));

    // Envia as compras para outra sessão do sessionStorage
    sessionStorage.setItem('@elevagro-app/purchases', JSON.stringify(cart));

    // Procura pela assinatura premium no cart
    const plan = cart.filter(
      product => product.type === 'premium-subscription',
    );

    if (plan) {
      sessionStorage.setItem(
        '@elevagro-app/viewer-status|is-premium',
        JSON.stringify(true),
      );
    }

    history.push('/checkout/access');
  };

  return (
    <div className="payment-options-wrapper">
      <div className="payment-options-title">
        <h3>Pagamento</h3>
      </div>
      <div
        className={`credit-card
          ${creditSelected === 'true' ? 'active' : ''}`}
      >
        <header className="payment-options-header">
          <div>
            <Radio
              checked={creditSelected === 'true'}
              onChange={handleChange}
              value="true"
              color="default"
              id="radio-button"
              inputProps={{ 'aria-label': 'true' }}
            />

            <img src={cardIcon} alt="Pague com cartão" />

            <h3>CARTÃO DE CRÉDITO</h3>
          </div>
          <span>
            [Em até
            <> </>
            <>
              {cardInstallments}
              {cardInstallments === 1 ? ' vez' : ' vezes'}
            </>
            ]
          </span>
        </header>

        <main>
          <form action="">
            <fieldset>
              <label htmlFor="payment">Pagamento em:</label>
              <select
                name="payment"
                id="payment"
                className="select-appearance"
                required
              >
                {installments.map((installment, index) => (
                  <option value={installment} key={`parcela_${index}`}>
                    {`${index + 1} x de ${installment}`}
                  </option>
                ))}
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor="name">Nome do titular do cartão</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Titular do cartão"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="card-number">Número do cartão de crédito</label>
              <input
                type="number"
                name="card-number"
                id="card-number"
                placeholder="0000 0000 0000 0000"
                required
              />
            </fieldset>

            <section>
              <fieldset>
                <label htmlFor="card-expiring-date">Validade</label>
                <input
                  type="number"
                  name="card-expiring-date"
                  id="card-expiring-date"
                  placeholder="00/00"
                  required
                />
              </fieldset>

              <fieldset>
                <label htmlFor="card-cvv">Código de segurança</label>
                <input
                  type="number"
                  name="card-cvv"
                  id="card-cvv"
                  placeholder="CVV"
                  required
                />
              </fieldset>
            </section>

            <ButtonRounded onClick={handlePurchase} buttonStyle="primary">
              Realizar pagamento
            </ButtonRounded>

            <div className="switch">
              <Switch
                checked={state.checkedA}
                onChange={handleSwitchChange}
                name="checkedA"
              />
              <label htmlFor="">
                <>Li e concordo com os </>
                <Link href="/">termos de uso</Link>
                <> da compra</>
              </label>
            </div>
          </form>
        </main>
      </div>

      <div
        className={`payment-card-bill
        ${creditSelected === 'false' ? 'active' : ''}`}
      >
        <header className="payment-options-header">
          <div>
            <Radio
              checked={creditSelected === 'false'}
              onChange={handleChange}
              value="false"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'false' }}
            />

            <img src={barcodeIcon} alt="Pague com cartão" />

            <h3>BOLETO BANCÁRIO</h3>
          </div>

          <span>[Apenas à vista]</span>
        </header>

        <main>
          <p>Pagamento através de boleto bancário não poderá ser parcelado.</p>
          <p>
            Pague seu boleto dentro de 5 dias para não ultrapassar a data de
            vencimento.
          </p>
          <p>
            Você obterá acesso ao conteúdo ou curso entre 3 a 7 dias úteis após
            o pagamento devido à compensação das instituições financeiras.
          </p>
          <p>
            Após gerar o seu boleto, salve ele em seu computador ou celular.
            <br />
            Por segurança, enviaremos para o seu e-mail.
          </p>

          <div className="switch">
            <Switch
              checked={state.checkedA}
              onChange={handleSwitchChange}
              name="checkedA"
            />
            <label htmlFor="">
              <>Li e concordo com os </>

              <Link to="/">termos de uso</Link>
              <>da compra</>
            </label>
          </div>

          <ButtonRounded type="link" linkTo={billPage} buttonStyle="primary">
            Gerar Boleto
          </ButtonRounded>
        </main>
      </div>

      <ProgressBar progress={2} />
    </div>
  );
}