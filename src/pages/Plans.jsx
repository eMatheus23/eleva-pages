import React from 'react';

// Logos
import logoElevagro from '../images/logos/marca-elevagro-01.svg';
import logoElevagroFooter from '../images/logos/marca-footer.svg';

// Mockups
import centralImg from '../images/eleva-soja.png';
import videoImg from '../images/pexels-photo-1326946.png';

// Icons
import cardIcon from '../images/icons/card-icon.svg';
import barcodeIcon from '../images/icons/barcode-icon.svg';

import cornerImg from '../images/corner.svg';

//CSS
import '../styles/pages/Plans.css';

function Plans() {
  return (
    <div id='plans-page'>
      <div className='content-wrapper'>
        <main>
          <img src={logoElevagro} alt='' />

          <h2>ESCOLHA O SEU PLANO PREMIUM</h2>
          <div className='plans-selector'>
            <button>MENSAL</button>

            <button className='active'>SEMESTRAL</button>

            <button>ANUAL</button>

            <p>Maior desconto</p>
          </div>

          <div id='plans-card'>
            <img class='corner-img' src={cornerImg} alt='' />
            <div class='corner'>
              <span>SAVE <p>R$ 14,50</p></span>
            </div>
            <h3>Plano Semestral</h3>
            <p>Semestralmente, é descontado apenas R$ 85,80</p>

            <h2>
              R$ <span>14</span>,20
            </h2>
            <p>(Valor do mês)</p>

            <button>
              Contratar plano <strong>Semestral</strong>
            </button>

            <p>Em até 5x de R$ 15,10 no cartão.</p>

            <div className='payment-options'>
              <img src={cardIcon} alt='Pague com cartão' />
              <img src={barcodeIcon} alt='Pague com boleto' />
            </div>
          </div>

          <p>Você pode cancelar o plano a hora que quiser.</p>

          <div className='other-plans'>
            <a href='#'>Para estudantes</a>
            <a href='#'>Planos empresariais</a>
          </div>
        </main>

        <img
          className='central-img'
          src={centralImg}
          alt='Escolha seu plano Premium'
        />

        <aside>
          <div>
            <img src={videoImg} alt='' />

            <h2>COM O PLANO PREMIUM NA ELEVAGRO VOCÊ TEM:</h2>
            <ul className='aside-description'>
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
        </aside>

        <footer>
          <div>
            <p>© Todos os direitos reservados a</p>
            <img src={logoElevagroFooter} alt='Elevagro' />
          </div>

          <div className='footer-links'>
            <a href='#'>Ajuda</a>
            <a href='#'>Termos de uso</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Plans;
