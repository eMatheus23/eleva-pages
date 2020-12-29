import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// CSS
import '../../styles/components/cards/login-card.css';

// Components
import Switch from '@material-ui/core/Switch';
import ButtonRounded from '../Buttons';

// Logos
import googleLogo from '../../assets/images/logos/google-logo.svg';
import faceLogo from '../../assets/images/logos/facebook-logo.svg';

export default function LoginCard() {
  const history = useHistory();

  const [state, setState] = useState({
    checkedA: false,
  });

  const handleSwitchChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  function handleLogin() {
    // Caso o login seja bem sucedido
    sessionStorage.setItem(
      '@elevagro-app/viewer-status|is-logged-in',
      JSON.stringify(true),
    );
    history.push('/signup/address');
  }

  return (
    <div className="login-card animate-apper">
      <h3>JÁ TENHO CONTA</h3>

      <form action="">
        <fieldset>
          <label htmlFor="login">Login</label>
          <input
            type="email"
            name="e-mail"
            id="e-mail"
            placeholder="Seu e-mail de acesso"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="senha">Senha</label>
          <input type="email" name="e-mail" id="e-mail" placeholder="******" />
        </fieldset>
        <div className="login-options">
          <div>
            <Switch
              checked={state.checkedA}
              onChange={handleSwitchChange}
              name="checkedA"
            />

            <p>Salvar login</p>
          </div>

          <ButtonRounded onClick={handleLogin} buttonStyle="secondary">
            Acessar
          </ButtonRounded>
        </div>

        <fieldset>
          <label htmlFor="senha">Login com:</label>
          <div>
            <button type="button">
              <img src={googleLogo} alt="Login com Google" />
              Google
            </button>
            <button type="button">
              <img src={faceLogo} alt="Login com Facebook" />
              Facebook
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
