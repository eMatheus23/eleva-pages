import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import { ButtonDark, ToggleSwitch } from '../../components/Buttons';
import ProgressBar from '../../components/ProgressBar';

// Icons
import ArrowRight from '../../assets/images/icons/arrow-right.svg';
import RevealPassword from '../../assets/images/icons/reveal-password.svg';

// CSS
import '../../styles/components/cards/create-account.css';

export default function CreateAccountCard() {
  const [passwordType, setPasswordType] = useState('password');

  function handlePasswordVisibility() {
    setPasswordType('text');

    setTimeout(() => setPasswordType('password'), 2000);
  }

  return (
    <>
      <h3>Conta Premium Elevagro</h3>

      <div className='account-creation-visit-card'>
        <form action=''>
          <fieldset>
            <label htmlFor='name'>Nome</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Digite aqui'
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor='surname'>Sobrenome</label>
            <input
              type='text'
              name='surname'
              id='surname'
              placeholder='Digite aqui'
              required
            />
          </fieldset>

          <section>
            <fieldset>
              <label htmlFor='phone'>Nº celular</label>
              <input
                type='text'
                name='phone'
                id='phone'
                placeholder='(xx) 0 0000.0000'
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor='cpf'>
                CPF
                <Link to='#'>Não tem CPF?</Link>
              </label>

              <input
                type='text'
                name='cpf'
                id='cpf'
                placeholder='000.000.000-00'
                required
              />
            </fieldset>
          </section>

          <fieldset>
            <label htmlFor='e-mail'>e-mail</label>
            <input
              type='e-mail'
              name='e-mail'
              id='e-mail'
              placeholder='Será o seu login'
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor='password'>Senha</label>
            <div className='input-container'>
              <input
                type={passwordType}
                name='password'
                id='password'
                placeholder='Sua senha de acesso'
                required
              />
              <img
                src={RevealPassword}
                alt='Revelar Senha'
                onClick={handlePasswordVisibility}
              />
            </div>
          </fieldset>

          <ButtonDark linkTo={'/signup/address'}>
            Próximo
            <img src={ArrowRight} alt='Próximo' />
          </ButtonDark>

          <ToggleSwitch className='terms-and-policies'>
            Concordo com os
            <Link to='#'>termos de uso</Link>e<Link to='#'>Política de privacidade</Link>
          </ToggleSwitch>
        </form>
      </div>

      <ProgressBar progress={0} />
    </>
  );
}
