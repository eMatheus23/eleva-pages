import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

// Icons
import videoIcon from '../../../assets/icons/videos-icon.svg';
import materialsIcon from '../../../assets/icons/materials-icon.svg';
import certificateIcon from '../../../assets/icons/certificate-icon.svg';
import articlesIcon from '../../../assets/icons/articles-icon.svg';
import infoIcon from '../../../assets/icons/info-icon.svg';
import clockIcon from '../../../assets/icons/clock-icon.svg';

const DetailsComponent = ({ track }) => {
  const { videos_count, hours } = track;

  return (
    <section className="track-details">
      <ul>
        <li>
          <img src={videoIcon} alt="Vídeos" />
          <span>
            <>+ </>
            {videos_count}
            <> vídeos</>
          </span>
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
          <span>
            {hours}
            <>h de atividade</>
          </span>
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

DetailsComponent.propTypes = {
  track: PropTypes.shape({
    videos_count: PropTypes.number.isRequired,
    hours: PropTypes.number.isRequired,
  }),
};

export default DetailsComponent;
