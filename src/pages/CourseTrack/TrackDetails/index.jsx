import React from 'react';

import './styles.css';

// Icons
import videoIcon from '../../../assets/images/icons/videos-icon.svg';
import materialsIcon from '../../../assets/images/icons/materials-icon.svg';
import certificateIcon from '../../../assets/images/icons/certificate-icon.svg';
import articlesIcon from '../../../assets/images/icons/articles-icon.svg';
import infoIcon from '../../../assets/images/icons/info-icon.svg';
import clockIcon from '../../../assets/images/icons/clock-icon.svg';

const TrackDetails = () => {
  return (
    <section className="track-details">
      <ul>
        <li>
          <img src={videoIcon} alt="Vídeos" />
          <span>+ 94 vídeos</span>
        </li>

        <li>
          <img src={articlesIcon} alt="Artigos" />
          <span>+ Artigos</span>
        </li>

        <li>
          <img src={materialsIcon} alt="Materiais" />
          <span>+ materiais de apoio</span>
        </li>

        <li>
          <img src={infoIcon} alt="Infográficos" />
          <span>+ Infográficos</span>
        </li>

        <li>
          <img src={certificateIcon} alt="Certificados" />
          <span>Certificação Elevagro</span>
        </li>

        <li>
          <img src={clockIcon} alt="Atividades" />
          <span>170h de atividade</span>
        </li>
      </ul>

      <p>Material de apoio disponível para download;</p>

      <p>
        Para concluir o curso, é necessário acertar 65% da avaliação, caso
        contrário o certificado não será liberado na plataforma;
      </p>

      <p>
        A matrícula do curso tem duração de 183 dias (6 meses), ao solicitar
        prazo extra será cobrada uma taxa de 50% do valor total do curso.
      </p>
    </section>
  );
};

export default TrackDetails;