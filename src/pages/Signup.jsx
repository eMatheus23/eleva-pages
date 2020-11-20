import React, { useState } from 'react';

//CSS
import '../styles/pages/signup.css';

// Components
import Footer from '../components/Footer'
import HeaderSignup from '../components/HeaderSignup'
import { ButtonDark, ToggleSwitch } from '../components/Buttons'

// Icons 
import ArrowRight from '../images/icons/arrow-right.svg';
import RevealPassword from '../images/icons/reveal-password.svg';

import Progrogress from '../images/progress-bar/progress-your-accout.svg'

function CreatePremiumVisit() {
  const [passwordType, setPasswordType] = useState('password')

function handlePasswordVisibility() {
    setPasswordType('text')

    setTimeout(() => setPasswordType('password'), 2000);
  }

  return (
    <div id='page-signup'>
      
      <HeaderSignup/>

      <main>
        <h3 className="active">Conta Premium Elevagro</h3>
        <h3>Dados necessários para sua adesão Premium</h3>
        <div className="account-creation-visit-card">
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

            <section>
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
                  <a href="#">Não tem CPF?</a>
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
            
            <ButtonDark>
                Próximo 
                <img src={ArrowRight} alt="Próximo"/>
            </ButtonDark>

            <ToggleSwitch className="terms-and-policies">
              Concordo com os 
              <a href="">termos de uso</a>  
              e 
              <a href="">Política de privacidade</a> 
            </ToggleSwitch>
          </form>
        </div>

        
        <div className="progress-bar">
          <img src={Progrogress} alt=""/>
        </div>
        <div className="progress-legend">
            <span>Sua conta</span>
            <span>Dados</span>
            <span>Pagamento</span>
            <span>Acesso</span>
        </div>
        
      </main>

        <Footer/>
      </div>
  );
}

export default CreatePremiumVisit;