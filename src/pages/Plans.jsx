import React, { useState } from 'react';

//CSS
import '../styles/pages/plans.css';

// Components
import Footer from '../components/Footer'
import { ButtonLight, ButtonDark, ToggleSwitch } from '../components/Buttons'

// Logos 
import logoElevagro from '../images/logos/marca-elevagro-01.svg';
import googleLogo from '../images/logos/google-logo.svg'
import faceLogo from '../images/logos/facebook-logo.svg'

// Imagens
import centralImgMensal from '../images/acerconceptd800@2x.png';
import centralImgSemestral from '../images/eleva-soja@2x.png';
import centralImgAnual from '../images/elevs@2x.png';

// Mockups
import videoImgMensal from '../images/mockups/person-holding-green-leafed-plant-2280551.png';
import videoImgSemestral from '../images/mockups/pexels-photo-1326946.png';
import videoImgAnual from '../images/mockups/Captura de Tela 2020-11-03 às 22.37.05.png';

// Icons
import cardIcon from '../images/icons/card-icon.svg';
import barcodeIcon from '../images/icons/barcode-icon.svg';


import cornerImg from '../images/corner.svg';


function Plans() {
  const [selectedPlan, setSelectedPlan] = useState(2);
  const [loginActive, setLoginActive] = useState(false);

  function handleSelectPlan(planIndex) {
    setSelectedPlan(planIndex);
    setLoginActive(false);
  }

  function handleCentralImg() {
    switch (selectedPlan) {
      case 1: 
        return centralImgMensal;
      case 2: 
        return centralImgSemestral;
      case 3: 
        return centralImgAnual;
      default: 
        break;
    }
  }

  return (
    <div id='plans-page'>
      <div className='content-wrapper'>
        <main>
          <img src={logoElevagro} alt='' />

          <h2>ESCOLHA O SEU PLANO PREMIUM</h2>
          <div className='plans-selector'>
            <button
              type="button"
              onClick={() => handleSelectPlan(1)}
              className={selectedPlan === 1 ? 'active' : ''}
            >
              MENSAL
            </button>

            <button 
              type="button"
              onClick={() => handleSelectPlan(2)}
              className={selectedPlan === 2 ? 'active' : ''}
            >
              SEMESTRAL
            </button>

            <button
              type="button"
              onClick={() => handleSelectPlan(3)}
              className={selectedPlan === 3 ? 'active' : ''}
            >
              ANUAL
            </button>

            <p>Maior desconto</p>
          </div>

          {/* Plano Mensal */}
          <div className={`plans-card ${selectedPlan === 1 ? 'active' : ''}`}>
            <div className={`corner ${selectedPlan === 1 ? 'hiden' : ''}`}>
              <img 
                className="corner-img"
                src={cornerImg} 
                alt='' 
              />
              <div className='corner-text'>
                <span>SAVE <p>R$ 14,50</p></span>
              </div>
            </div>


            <section className="animate-apper">
              <h3 className="animate-apper">Plano Mensal</h3>
              <p>Semestralmente, é descontado apenas R$ 29,80</p>
            </section>

            <section className="animate-apper">
              <h2>R$ <span>29</span>,90</h2>
              <p>(Valor do mês)</p>
            </section>

            <button 
              type="button" 
              onClick={setLoginActive}
              className={!loginActive ? 'active' : ''}
            >
              Contratar plano <strong>Mensal</strong>
            </button>

            <section>
              <p>Pagamento apenas via cartão.</p>
              <div className='payment-options'>
                <img src={cardIcon} alt='Pague com cartão' />
              </div>
            </section>

          </div>

          {/* Plano Semestral */}
          <div className={`plans-card ${selectedPlan === 2 ? 'active' : ''}`}>
            <img className='corner-img' src={cornerImg} alt='' />
            <div className='corner-text'>
              <span>SAVE <p>R$ 14,50</p></span>
            </div>
            <section className="animate-apper">
              <h3>Plano Semestral</h3>
              <p>Semestralmente, é descontado apenas R$ 85,80</p>
            </section>

            <section className="animate-apper">
              <h2>R$ <span>14</span>,20</h2>
              <p>(Valor do mês)</p>
    	      </section>

            <button 
              type="button" 
              onClick={setLoginActive}
              className={!loginActive ? 'active' : ''}
            >
              Contratar plano <strong>Semestral</strong>
            </button>

            <section>
              <p>Em até 5x de R$ 15,10 no cartão.</p>
              <div className='payment-options'>
                <img src={cardIcon} alt='Pague com cartão' />
                <img src={barcodeIcon} alt='Pague com boleto' />
              </div>
            </section>
          </div>

          {/* Plano Anual */}
          <div className={`plans-card ${selectedPlan === 3 ? 'active' : ''}`}>
            <img className='corner-img' src={cornerImg} alt='' />
            <div className='corner-text'>
              <span>SAVE <p>R$ 44,50</p></span>
            </div>
            <section className="animate-apper">
              <h3>Plano anual</h3>
              <p>Semestralmente, é descontado apenas R$ 134,80</p>
            </section>

            <section className="animate-apper">
              <h2>
                R$ <span>11</span>,20
              </h2>
              <p>(Valor do mês)</p>
            </section>

            <button 
              type="button" 
              onClick={setLoginActive}
              className={!loginActive ? 'active' : ''}
            >
              Contratar plano <strong>Anual</strong>
            </button>

            <section>
              <p>Em até 10x de R$ 14,10 no cartão.</p>
              <div className='payment-options'>
                <img src={cardIcon} alt='Pague com cartão' />
                <img src={barcodeIcon} alt='Pague com boleto' />
              </div>
            </section>
          </div>

          <p>Você pode cancelar o plano a hora que quiser.</p>

          <div className='other-plans'>
            <a href='#'>Para estudantes</a>
            <a href='#'>Planos empresariais</a>
          </div>
        </main>

        {/* Central Image */}
        <div className={`central-img-container ${!loginActive ? 'active' : ''}`}>
          <img
            className={`central-img active animate-apper`}
            src={handleCentralImg()}
            alt='Escolha seu plano Premium'
          />
        </div>


        <aside>
          <div className={`premium-description ${!loginActive ? 'active' : ''}`}>
            <video 
              controls poster={videoImgMensal}
              className={selectedPlan === 1 ? 'active' : ''}>
            </video>
            <video 
              controls poster={videoImgSemestral}
              className={selectedPlan === 2 ? 'active' : ''}>
            </video>
            <video 
              controls poster={videoImgAnual} 
              className={selectedPlan === 3 ? 'active' : ''}>
            </video>


            <h2>COM O PLANO PREMIUM NA ELEVAGRO VOCÊ TEM:</h2>
            <ul>
              <li>Descontos em todos os Cursos</li>
              <li>Catálogo de cultivares</li>
              <li>Vídeos estendidos e mais completos</li>
              <li>Materiais mais completos</li>
              <li>Diagnoses com material de alta resolução</li>
              <li>Podcasts Exclusivos</li>
              <li>Workshops para a produtividade</li>
              <li>Mini Cursos Exclusivos</li>
              <li>Descontos em eventos presenciais</li>
              <li>Maior número de infográficos</li>
              <li>Prioridade em todas as Palestras Online</li>
              <li>Palestras Online exclusivas</li>
            </ul>
          </div>

          <div className={`login ${loginActive ? 'active' : ''}`}>
            <div className="create-account-card animate-apper">
              <h3>AINDA NÃO TENHO CONTA</h3>
              <ButtonLight linkTo="/signup/visitor">Criar conta</ButtonLight>
            </div>

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
                  <input 
                    type="email" 
                    name="e-mail" 
                    id="e-mail" 
                    placeholder="******"
                  />
                </fieldset>
                <div className="login-options">
                  <div>
                    <ToggleSwitch>
                      Salvar login
                    </ToggleSwitch>

                    <a href="#">Esqueci a senha</a>
                  </div>

                  <ButtonDark linkTo='/signup/address'>
                    Acessar
                  </ButtonDark>
                </div>


                <fieldset>
                  <label htmlFor="senha">Login com:</label>
                  <div>
                    <button type="button"> 
                      <img src={googleLogo} alt="Login com Google"/> 
                      Google
                    </button>
                    <button type="button">
                      <img src={faceLogo} alt="Login com Facebook"/>
                      Facebook
                    </button>
                  </div>
                </fieldset>
              </form>

            </div>
          </div>
        </aside>

      <Footer/>
      </div>
    </div>
  );
}

export default Plans;
