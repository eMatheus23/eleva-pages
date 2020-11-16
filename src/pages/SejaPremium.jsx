import React from 'react';

import marcaElevagro from '../images/marca-elevagro-01.svg';

// Mockups
import middleImg from '../images/eleva-soja.png';
import videoImg from '../images/pexels-photo-1326946.png';

// Icons
import cardIcon from '../images/icons/card-icon.svg';
import barcodeIcon from '../images/icons/barcode-icon.svg';

//CSS
import '../styles/pages/SejaPremium.css';

function SejaPremium() {
  return (
    <div id='seja-premium'>
      <div className='content-wrapper'>
        <main>
          <img src={marcaElevagro} alt='' />

          <h2>ESCOLHA O SEU PLANO PREMIUM</h2>
          <div className='seletor-planos'>
            <button>MENSAL</button>

            <button>SEMESTRAL</button>

            <button>ANUAL</button>
            <p>Maior desconto</p>
          </div>

          <div className='card-planos'>
            <h3>Plano Semestral</h3>
            <p>Semestralmente, é descontado apenas R$ 85,80</p>

            <strong>
              R$<span>14</span>,20
            </strong>
            <p>(Valor do mês)</p>

            <button>
              Contratar plano <strong>Semestral</strong>
            </button>

            <p>Em até 5x de R$ 15,10 no cartão.</p>

            <div className='opcoes-pagamento'>
              <img src={cardIcon} alt='Pague com cartão' />
              <img src={barcodeIcon} alt='Pague com boleto' />
            </div>
          </div>

          <p>Você pode cancelar o plano a hora que quiser.</p>

          <a href="#">Para estudantes</a>
          <a href="#">Planos empresariais</a>
        </main>

        <img src={middleImg} alt="Escolha seu plano Premium"/>

        <aside>
          <img src={videoImg} alt=""/>

          <h2>COM O PLANO PREMIUM NA ELEVAGRO VOCÊ TEM:</h2>
          <ul className="aside-description">
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
        </aside>
      </div>
      <footer>
         <p>© Todos os direitos reservados a <img src={marcaElevagro} alt="Elevagro"/></p> 
         <p>Ajuda</p> 
         <p>Termos de uso</p> 
        </footer>
    </div>
  );
}

export default SejaPremium;
