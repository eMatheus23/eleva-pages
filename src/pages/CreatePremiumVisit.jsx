import React from 'react';

//CSS
import '../styles/pages/create-premium-visit.css';

// Components
import Footer from '../components/Footer'
import HeaderCreateAccount from '../components/HeaderCreateAccount'
import { ButtonDark, ToggleSwitch } from '../components/Buttons'

// Icons 
import ArrowRight from '../images/icons/arrow-right.svg';
import RevealPassword from '../images/icons/reveal-password.svg';

function CreatePremiumVisit() {
  return (
    <div id='page-create-premium-visit'>
      
      <HeaderCreateAccount/>

      <main>
        <h3>Conta Premium Elevagro</h3>
        <div className="account-creation-visit-card">
          <form action="">
            <fieldset>
              <label htmlFor="name">Nome</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Digite aqui"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="surname">Sobrenome</label>
              <input 
                type="text" 
                name="surname" 
                id="surname" 
                placeholder="Digite aqui"
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
              />
            </fieldset>

            <fieldset>
              <label htmlFor="password">Senha</label>
              <div className="input-container">
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Sua senha de acesso"
                />
                <img src={RevealPassword} alt="Revelar Senha"/>
              </div>
              

            </fieldset>
          </form>

          <ButtonDark>
              Próximo 
              <img src={ArrowRight} alt="Próximo"/>
          </ButtonDark>

          <ToggleSwitch>
            Concordo com os 
            <a href="">termos de uso</a>  
            e 
            <a href="">Política de privacidade</a> 
          </ToggleSwitch>
        </div>

      </main>

        <Footer/>
      </div>
  );
}

export default CreatePremiumVisit;