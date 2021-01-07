import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// CSS
import './styles.css';

// Components
import Footer from '../../components/footers/CheckoutFooter';
import ButtonRounded from '../../components/Buttons';
import LoginCard from '../../components/cards/LoginCard';

// Logos
import logoElevagro from '../../assets/images/logos/marca-elevagro-negativa.svg';

// Imagens
import centralImgMensal from '../../assets/images/acerconceptd800@2x.png';
import centralImgSemestral from '../../assets/images/eleva-soja.png';
import centralImgAnual from '../../assets/images/elevs@2x.png';

// Mockups
import videoImgMensal from '../../assets/images/mockups/person-holding-green-leafed-plant-2280551.png';
import videoImgSemestral from '../../assets/images/mockups/pexels-photo-1326946.png';
import videoImgAnual from '../../assets/images/mockups/Captura de Tela 2020-11-03 às 22.37.05.png';

// Icons
import cardIcon from '../../assets/images/icons/card-icon.svg';
import barcodeIcon from '../../assets/images/icons/barcode-icon.svg';

import cornerImg from '../../assets/images/corner.svg';

// Data and Functions
import products from '../../data/products';
import addProductToCart from '../../services/AddProductToCart';

const Plans = () => {
  document.title = 'Escolha seu plano premium | Elevagro';

  const history = useHistory();

  const [selectedPlan, setSelectedPlan] = useState('semestral');
  const [loginScreenActive, setLoginScreenActive] = useState(false);

  const [isLoggedIn] = useState(() => {
    const checkIsLoggedIn = localStorage.getItem(
      '@elevagro-app/viewer-status|is-logged-in',
    );

    if (checkIsLoggedIn) {
      return JSON.parse(checkIsLoggedIn);
    }

    return false;
  });

  const [isPremium] = useState(() => {
    const checkIsPremium = localStorage.getItem(
      '@elevagro-app/viewer-status|is-premium',
    );

    if (checkIsPremium) {
      return true;
    }

    return false;
  });

  function handleSelectPlan(plan) {
    setSelectedPlan(plan);

    setLoginScreenActive(false);
  }

  function handleMockupClick() {
    addProductToCart({ productId: 4 });

    history.push('/checkout');
  }

  function HandleAddToCart() {
    const [chosenProduct] = products.filter(product => {
      if (product.subscription === selectedPlan) {
        return true;
      }
      return false;
    });

    addProductToCart({ productId: chosenProduct.id });

    if (isLoggedIn && isPremium) {
      history.push('/checkout');
    } else {
      setLoginScreenActive(true);
    }
  }

  function updateCentralImg() {
    switch (selectedPlan) {
      case 'mensal':
        return centralImgMensal;
      case 'semestral':
        return centralImgSemestral;
      case 'anual':
        return centralImgAnual;
      default:
        return centralImgMensal;
    }
  }

  return (
    <div id="plans-page">
      <div className="content-wrapper">
        <main>
          <img src={logoElevagro} alt="" />

          <h2>ESCOLHA O SEU PLANO PREMIUM</h2>
          <div className="plans-selector">
            <button
              type="button"
              onClick={() => handleSelectPlan('mensal')}
              className={selectedPlan === 'mensal' ? 'active' : ''}
            >
              MENSAL
            </button>

            <button
              type="button"
              onClick={() => handleSelectPlan('semestral')}
              className={selectedPlan === 'semestral' ? 'active' : ''}
            >
              SEMESTRAL
            </button>

            <button
              type="button"
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
              <img className="corner-img" src={cornerImg} alt="" />
              <div className="corner-text">
                <span>
                  SAVE
                  <p>R$ 14,50</p>
                </span>
              </div>
            </div>

            <section className="animate-apper">
              <h3 className="animate-apper">Plano Mensal</h3>
              <p>É descontado todos os meses, R$29,90.</p>
            </section>

            <section className="animate-apper">
              <h2>
                R$
                <span>29</span>
                ,90
              </h2>
              <p>(Valor do mês)</p>
            </section>

            <button
              type="button"
              onClick={HandleAddToCart}
              className={!loginScreenActive ? 'active' : ''}
            >
              Contratar plano
              <strong>Mensal</strong>
            </button>

            <section>
              <p>Pagamento apenas via cartão.</p>
              <div className="payment-options">
                <img src={cardIcon} alt="Pague com cartão" />
              </div>
            </section>
          </div>

          {/* Plano Semestral */}
          <div
            className={`plans-card ${
              selectedPlan === 'semestral' ? 'active' : ''
            }`}
          >
            <img className="corner-img" src={cornerImg} alt="" />
            <div className="corner-text">
              <span>
                SAVE
                <p>R$ 14,50</p>
              </span>
            </div>
            <section className="animate-apper">
              <h3>Plano Semestral</h3>
              <p>Semestralmente, é descontado apenas R$ 85,80</p>
            </section>

            <section className="animate-apper">
              <h2>
                R$
                <span>14</span>
                ,20
              </h2>
              <p>(Valor do mês)</p>
            </section>

            <button
              type="button"
              onClick={HandleAddToCart}
              className={!loginScreenActive ? 'active' : ''}
            >
              Contratar plano
              <strong>Semestral</strong>
            </button>

            <section>
              <p>Em até 5x de R$ 15,10 no cartão.</p>
              <div className="payment-options">
                <img src={cardIcon} alt="Pague com cartão" />
                <img src={barcodeIcon} alt="Pague com boleto" />
              </div>
            </section>
          </div>

          {/* Plano Anual */}
          <div
            className={`plans-card ${selectedPlan === 'anual' ? 'active' : ''}`}
          >
            <img className="corner-img" src={cornerImg} alt="" />
            <div className="corner-text">
              <span>
                SAVE
                <p>R$ 44,50</p>
              </span>
            </div>
            <section className="animate-apper">
              <h3>Plano anual</h3>
              <p>Uma mensalidade anual apenas, de R$ 134,80</p>
            </section>

            <section className="animate-apper">
              <h2>
                R$
                <span>11</span>
                ,20
              </h2>
              <p>(Valor do mês)</p>
            </section>

            <button
              type="button"
              onClick={HandleAddToCart}
              className={!loginScreenActive ? 'active' : ''}
            >
              Contratar plano
              <strong>Anual</strong>
            </button>

            <section>
              <p>Em até 10x de R$ 14,10 no cartão.</p>
              <div className="payment-options">
                <img src={cardIcon} alt="Pague com cartão" />
                <img src={barcodeIcon} alt="Pague com boleto" />
              </div>
            </section>
          </div>

          <p>Você pode cancelar o plano a hora que quiser.</p>

          <div className="other-plans">
            <Link to="/">Para estudantes</Link>
            <Link to="/">Planos empresariais</Link>
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
            className="central-img active animate-apper"
            src={updateCentralImg()}
            alt="Escolha seu plano Premium"
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
            />
            <video
              controls
              poster={videoImgSemestral}
              className={selectedPlan === 'semestral' ? 'active' : ''}
            />
            <video
              controls
              poster={videoImgAnual}
              className={selectedPlan === 'anual' ? 'active' : ''}
            />

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
            <div className="create-account animate-apper">
              <h3>AINDA NÃO TENHO CONTA</h3>

              <ButtonRounded type="link" linkTo="/signup" buttonStyle="primary">
                Criar conta
              </ButtonRounded>
            </div>

            <LoginCard />
          </div>
        </aside>

        <Footer />
      </div>
    </div>
  );
};

export default Plans;
