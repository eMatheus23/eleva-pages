import React from 'react';

import '../../styles/components/cards/payment-options.css';

// Icons
import cardIcon from '../../images/icons/card-icon-gray.svg';
import barcodeIcon from '../../images/icons/barcode-icon-gray.svg';
import Radio from '@material-ui/core/Radio';

// Components
import { ToggleSwitch, ButtonLight } from '../../components/Buttons';
import ProgressBar from '../../components/ProgressBar';

export default function PaymentOptionsCard(props) {
  const [creditSelected, setCreditSelected] = React.useState('true');

  const handleChange = (event) => {
    setCreditSelected(event.target.value);
  };

  return (
    <div className='payment-options-wrapper'>
      <div className='payment-options-title'>
        <h3>Pagamento</h3>
      </div>
      <div
        className={`credit-card
          ${creditSelected === 'true' ? 'active' : ''}`}
      >
        <header className='payment-options-header'>
          <div>
            <Radio
              checked={creditSelected === 'true'}
              onChange={handleChange}
              value='true'
              color='default'
              id='radio-button'
              inputProps={{ 'aria-label': 'true' }}
            />

            <img src={cardIcon} alt='Pague com cartão' />

            <h3>CARTÃO DE CRÉDITO</h3>
          </div>
          <span>[Em até 10 vezes]</span>
        </header>

        <main>
          <form action=''>
            <fieldset>
              <label htmlFor='payment'>Pagamento em:</label>
              <select
                name='payment'
                id='payment'
                className='select-appearance'
                required
              >
                <option value='1'>1 vez de R$ 189,00</option>
                <option value='2'>2 vezes de R$ 94,50</option>
                <option value='3'>3 vezes de R$ 63,00</option>
                <option value='4'>4 vezes de R$ 47,25</option>
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor='name'>Nome do titular do cartão</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Titular do cartão'
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor='card-number'>Número do cartão de crédito</label>
              <input
                type='number'
                name='card-number'
                id='card-number'
                placeholder='0000 0000 0000 0000'
                required
              />
            </fieldset>

            <section>
              <fieldset>
                <label htmlFor='card-expiring-date'>Validade</label>
                <input
                  type='number'
                  name='card-expiring-date'
                  id='card-expiring-date'
                  placeholder='00/00'
                  required
                />
              </fieldset>

              <fieldset>
                <label htmlFor='card-cvv'>Código de segurança</label>
                <input
                  type='number'
                  name='card-cvv'
                  id='card-cvv'
                  placeholder='CVV'
                  required
                />
              </fieldset>
            </section>

            <ButtonLight linkTo={props.accessPage}>
              Realizar pagamento
            </ButtonLight>

            <ToggleSwitch className='terms-and-policies'>
              Li e concordo com os
              <a href=''>termos de uso</a>
              da compra
            </ToggleSwitch>
          </form>
        </main>
      </div>

      <div
        className={`payment-card-bill 
        ${creditSelected === 'false' ? 'active' : ''}`}
      >
        <header className='payment-options-header'>
          <div>
            <Radio
              checked={creditSelected === 'false'}
              onChange={handleChange}
              value='false'
              color='default'
              name='radio-button-demo'
              inputProps={{ 'aria-label': 'false' }}
            />

            <img src={barcodeIcon} alt='Pague com cartão' />

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
            Após gerar o seu boleto, salve ele em seu computador ou celular.{' '}
            <br></br> Por segurança, enviaremos para o seu e-mail.
          </p>

          <ToggleSwitch className='terms-and-policies'>
            Li e concordo com os
            <a href=''>termos de uso</a>
            da compra
          </ToggleSwitch>

          <ButtonLight linkTo={props.billPage}>Gerar Boleto</ButtonLight>
        </main>
      </div>

      <ProgressBar progress={2} />
    </div>
  );
}
