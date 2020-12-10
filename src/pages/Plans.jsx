import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

//CSS
import '../styles/pages/plans.css';

// Components
import Footer from '../components/Footer';
import ButtonRounded, { ToggleSwitch } from '../components/Buttons';

// Logos
import logoElevagro from '../assets/images/logos/marca-elevagro-negativa.svg';
import googleLogo from '../assets/images/logos/google-logo.svg';
import faceLogo from '../assets/images/logos/facebook-logo.svg';

// Imagens
import centralImgMensal from '../assets/images/acerconceptd800@2x.png';
import centralImgSemestral from '../assets/images/eleva-soja@2x.png';
import centralImgAnual from '../assets/images/elevs@2x.png';

// Mockups
import videoImgMensal from '../assets/images/mockups/person-holding-green-leafed-plant-2280551.png';
import videoImgSemestral from '../assets/images/mockups/pexels-photo-1326946.png';
import videoImgAnual from '../assets/images/mockups/Captura de Tela 2020-11-03 às 22.37.05.png';

// Icons
import cardIcon from '../assets/images/icons/card-icon.svg';
import barcodeIcon from '../assets/images/icons/barcode-icon.svg';

import cornerImg from '../assets/images/corner.svg';

// Data and Functions
import products from '../data/products';
import addToCart from '../functions/addToCart';

export default function Plans() {
  document.title = 'Escolha seu plano premium';

  const history = useHistory();

  const [selectedPlan, setSelectedPlan] = useState('semestral');
  const [loginScreenActive, setLoginScreenActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  function handleSelectPlan(plan) {
    setSelectedPlan(plan);

    setLoginScreenActive(false);
  }

  function handleMockupClick() {
    addToCart(4);

    history.push('/checkout');
  }

  function HandleAddToCart() {
    const productId = products.filter((product) => {
      if (product.subscription === selectedPlan) {
        return product.id;
      }
      return false;
    });

    addToCart(productId[0].id);

    if (isLoggedIn && isPremium) {
      history.push('/checkout')
    } else {
      setLoginScreenActive(true);
    }
  }

  function handleCentralImg() {
    switch (selectedPlan) {
      case 'mensal':
        return centralImgMensal;
      case 'semestral':
        return centralImgSemestral;
      case 'anual':
        return centralImgAnual;
      default:
        break;
    }
  }

  function handleLogin() {

    // Caso o login seja bem sucedido
    sessionStorage.setItem('@elevagro-app/viewer-status|is-logged-in', JSON.stringify(true));
    history.push('/signup/address')
  }

  useEffect(() => {
    const checkIsLoggedIn = JSON.parse(sessionStorage.getItem('@elevagro-app/viewer-status|is-logged-in'));
    const checkIsPremium = JSON.parse(sessionStorage.getItem('@elevagro-app/viewer-status|is-premium'));

    if (checkIsLoggedIn === null) {
      sessionStorage.setItem('@elevagro-app/viewer-status|is-logged-in', JSON.stringify(false));
      sessionStorage.setItem('@elevagro-app/viewer-status|is-premium', JSON.stringify(false));
    }

    setIsLoggedIn(checkIsLoggedIn)

    setIsPremium(checkIsPremium)

  }, [])

  return (
    <div id='plans-page'>
      <div className='content-wrapper'>
        <main>
          <img src={logoElevagro} alt='' />

          <h2>ESCOLHA O SEU PLANO PREMIUM</h2>
          <div className='plans-selector'>
            <button
              type='button'
              onClick={() => handleSelectPlan('mensal')}
              className={selectedPlan === 'mensal' ? 'active' : ''}
            >
              MENSAL
            </button>

            <button
              type='button'
              onClick={() => handleSelectPlan('semestral')}
              className={selectedPlan === 'semestral' ? 'active' : ''}
            >
              SEMESTRAL
            </button>

            <button
              type='button'
              onClick={() => handleSelectPlan('anual')}
              className={selectedPlan === 'anual' ? 'active' : ''}
            >
              ANUAL
            </button>

            <p>Maior desconto</p>
          </div>

          {/* Plano Mensal */}
          <div
            className={`plans-card ${
              selectedPlan === 'mensal' ? 'active' : ''
            }`}
          >
            <div
              className={`corner ${selectedPlan === 'mensal' ? 'hiden' : ''}`}
            >
              <img className='corner-img' src={cornerImg} alt='' />
              <div className='corner-text'>
                <span>
                  SAVE <p>R$ 14,50</p>
                </span>
              </div>
            </div>

            <section className='animate-apper'>
              <h3 className='animate-apper'>Plano Mensal</h3>
              <p>É descontado todos os meses, R$29,90.</p>
            </section>

            <section className='animate-apper'>
              <h2>
                R$ <span>29</span>,90
              </h2>
              <p>(Valor do mês)</p>
            </section>

            <button
              type='button'
              onClick={HandleAddToCart}
              className={!loginScreenActive ? 'active' : ''}
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
          <div
            className={`plans-card ${
              selectedPlan === 'semestral' ? 'active' : ''
            }`}
          >
            <img className='corner-img' src={cornerImg} alt='' />
            <div className='corner-text'>
              <span>
                SAVE <p>R$ 14,50</p>
              </span>
            </div>
            <section className='animate-apper'>
              <h3>Plano Semestral</h3>
              <p>Semestralmente, é descontado apenas R$ 85,80</p>
            </section>

            <section className='animate-apper'>
              <h2>
                R$ <span>14</span>,20
              </h2>
              <p>(Valor do mês)</p>
            </section>

            <button
              type='button'
              onClick={HandleAddToCart}
              className={!loginScreenActive ? 'active' : ''}
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
          <div
            className={`plans-card ${selectedPlan === 'anual' ? 'active' : ''}`}
          >
            <img className='corner-img' src={cornerImg} alt='' />
            <div className='corner-text'>
              <span>
                SAVE <p>R$ 44,50</p>
              </span>
            </div>
            <section className='animate-apper'>
              <h3>Plano anual</h3>
              <p>Uma mensalidade anual apenas, de R$ 134,80</p>
            </section>

            <section className='animate-apper'>
              <h2>
                R$ <span>11</span>,20
              </h2>
              <p>(Valor do mês)</p>
            </section>

            <button
              type='button'
              onClick={HandleAddToCart}
              className={!loginScreenActive ? 'active' : ''}
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
            <Link to='#'>Para estudantes</Link>
            <Link to='#'>Planos empresariais</Link>
          </div>
        </main>

        {/* Central Image */}
        <div
          className={`central-img-container ${
            !loginScreenActive ? 'active' : ''
          }`}
        >
          <img
            onClick={handleMockupClick}
            className={`central-img active animate-apper`}
            src={handleCentralImg()}
            alt='Escolha seu plano Premium'
          />
        </div>

        <aside>
          <div
            className={`premium-description ${
              !loginScreenActive ? 'active' : ''
            }`}
          >
            <video
              controls
              poster={videoImgMensal}
              className={selectedPlan === 'mensal' ? 'active' : ''}
            ></video>
            <video
              controls
              poster={videoImgSemestral}
              className={selectedPlan === 'semestral' ? 'active' : ''}
            ></video>
            <video
              controls
              poster={videoImgAnual}
              className={selectedPlan === 'anual' ? 'active' : ''}
            ></video>

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

          <div className={`login ${loginScreenActive ? 'active' : ''}`}>
            <div className='create-account animate-apper'>
              <h3>AINDA NÃO TENHO CONTA</h3>

              <ButtonRounded linkTo='/signup/visitor' buttonStyle='primary'>Criar conta</ButtonRounded>
            </div>

            <div className='login-card animate-apper'>
              <h3>JÁ TENHO CONTA</h3>

              <form action=''>
                <fieldset>
                  <label htmlFor='login'>Login</label>
                  <input
                    type='email'
                    name='e-mail'
                    id='e-mail'
                    placeholder='Seu e-mail de acesso'
                  />
                </fieldset>

                <fieldset>
                  <label htmlFor='senha'>Senha</label>
                  <input
                    type='email'
                    name='e-mail'
                    id='e-mail'
                    placeholder='******'
                  />
                </fieldset>
                <div className='login-options'>
                  <div>
                    <ToggleSwitch>Salvar login</ToggleSwitch>

                    <Link to='#'>Esqueci a senha</Link>
                  </div>

                  <ButtonRounded onClick={handleLogin} buttonStyle='secondary'>Acessar</ButtonRounded>
                </div>

                <fieldset>
                  <label htmlFor='senha'>Login com:</label>
                  <div>
                    <button type='button'>
                      <img src={googleLogo} alt='Login com Google' />
                      Google
                    </button>
                    <button type='button'>
                      <img src={faceLogo} alt='Login com Facebook' />
                      Facebook
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </aside>

        <Footer />
      </div>
    </div>
  );
}
