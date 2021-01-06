import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import Switch from '@material-ui/core/Switch';
import ButtonRounded from '../../Buttons';
import ProgressBar from '../../ProgressBar';

// Icons
import ArrowRight from '../../../assets/images/icons/arrow-right-white.svg';
import ArrowRightGray from '../../../assets/images/icons/arrow-right-gray.svg';
import RevealPassword from '../../../assets/images/icons/reveal-password.svg';

const Page01 = ({ handleNextPage, isInCheckout }) => {
  const [passwordType, setPasswordType] = useState('password');
  const [inCheckout] = useState(() => {
    if (isInCheckout) {
      return true;
    }

    return false;
  });
  const [state, setState] = useState({
    checkedA: false,
  });

  const handleSwitchChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  function handlePasswordVisibility() {
    setPasswordType('text');

    setTimeout(() => setPasswordType('password'), 2000);
  }

  return (
    <>
      <div className="create-account-title">
        {!inCheckout && <h3>Conta Premium Elevagro</h3>}
        {inCheckout && <h3>Criar sua conta para acesso</h3>}
      </div>

      <div className="create-account-card">
        <form action="">
          <fieldset>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite aqui"
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="surname">Sobrenome</label>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="Digite aqui"
              required
            />
          </fieldset>

          <section className="middle-section">
            <fieldset>
              <label htmlFor="phone">Nº celular</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="(xx) 0 0000.0000"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="cpf">
                CPF
                <Link to="/">Não tem CPF?</Link>
              </label>

              <input
                type="text"
                name="cpf"
                id="cpf"
                placeholder="000.000.000-00"
                required
              />
            </fieldset>
          </section>

          <fieldset>
            <label htmlFor="e-mail">e-mail</label>
            <input
              type="e-mail"
              name="e-mail"
              id="e-mail"
              placeholder="Será o seu login"
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="password">Senha</label>
            <div className="input-container">
              <input
                type={passwordType}
                name="password"
                id="password"
                placeholder="Sua senha de acesso"
                required
              />
              <img
                src={RevealPassword}
                alt="Revelar Senha"
                onClick={handlePasswordVisibility}
              />
            </div>
          </fieldset>

          <ButtonRounded
            onClick={handleNextPage}
            buttonStyle={inCheckout ? 'primary' : 'secondary'}
          >
            Próximo
            {!inCheckout && <img src={ArrowRight} alt="Próximo" />}
            {inCheckout && <img src={ArrowRightGray} alt="Próximo" />}
          </ButtonRounded>

          <div className="terms-and-policies">
            <Switch
              checked={state.checkedA}
              onChange={handleSwitchChange}
              name="checkedA"
            />
            Concordo com os
            <Link to="/">termos de uso</Link>
            <>e</>
            <Link to="/">Política de privacidade</Link>
          </div>
        </form>
      </div>

      {inCheckout && (
        <p className="login-option">
          Já tem conta na Elevagro?
          <Link to="/">Faça o login aqui.</Link>
        </p>
      )}

      <ProgressBar progress={0} />
    </>
  );
};

export default Page01;
