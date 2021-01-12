import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

// Mockups
import mainVideoTumbnail from '../../../assets/images/mockups/track-video-thumbnail.png';
import videoMockupTumbnail from '../../../assets/images/mockups/video-mockup-01.png';
import videoMockup02Tumbnail from '../../../assets/images/mockups/video-mockup-02.png';
import videoMockup03Tumbnail from '../../../assets/images/mockups/video-mockup-03.png';

import cartIcon from '../../../assets/images/icons/cart-icon.svg';
import saveIcon from '../../../assets/images/icons/bookmark-icon.svg';
import cart02Icon from '../../../assets/images/icons/cart-icon-02.svg';
import videoPlayIcon from '../../../assets/images/icons/video-play-icon.svg';
import facebookLogo from '../../../assets/images/logos/facebook-logo-02.svg';
import linkedinLogo from '../../../assets/images/logos/linkedin-logo.svg';
import messengerLogo from '../../../assets/images/logos/messenger-logo.svg';
import whatsappLogo from '../../../assets/images/logos/whatsapp-logo.svg';

import bitwiseImg from '../../../assets/images/icons/bitwise.svg';

export const TrackPlaylistModal = ({ handleModal }) => {
  const history = useHistory();

  const handleBecomePremium = () => {
    history.push('/checkout');
  };

  return (
    <div className="track-playlist-modal">
      <div className="content">
        <span
          onClick={() => handleModal({ modalName: 'playlist', opened: false })}
          role="button"
          tabIndex={0}
          className="close-modal"
        >
          X
        </span>

        <video controls poster={mainVideoTumbnail} />

        <p>
          <del>R$: 2.500,00</del>
        </p>

        <div className="price-container">
          <div className="track-title">
            <h2>TRILHA DE ENSINO</h2>
            <h3>VENDAS E INSUMOS AGRÍCOLAS</h3>
          </div>

          <button type="button">
            R$: 1.768,00
            <img src={cart02Icon} alt="" />
          </button>
        </div>

        <p>12x de R$ 74,30</p>

        <div className="be-premium-card">
          <p>
            Seja um associado Premium na Elevagro e pague
            <strong> apenas:</strong>
          </p>
          <div>
            <button type="button">R$ 1.694,00</button>
            <span>
              <strong>20% </strong>
              de
              <strong> desconto.</strong>
            </span>
          </div>
        </div>

        <div className="playlist-container">
          <div className="video-container">
            <img src={videoMockupTumbnail} alt="Título" />
            <button type="button">
              <img src={videoPlayIcon} alt="Dar play" />
            </button>
            <p>Controle das lagartas da soja</p>
            <span>10:05</span>
          </div>

          <div className="video-container">
            <img src={videoMockup02Tumbnail} alt="Título" />
            <button type="button">
              <img src={videoPlayIcon} alt="Dar play" />
            </button>
            <p>Controle das lagartas da soja</p>
            <span>8:30</span>
          </div>

          <div className="video-container">
            <img src={videoMockup03Tumbnail} alt="Título" />
            <button type="button">
              <img src={videoPlayIcon} alt="Dar play" />
            </button>
            <p>Doenças que atacam a soja no verão</p>
            <span>9:05</span>
          </div>

          <div className="video-container">
            <img src={videoMockupTumbnail} alt="Título" />
            <button type="button">
              <img src={videoPlayIcon} alt="Dar play" />
            </button>
            <p>Controle das lagartas da soja</p>
            <span>10:05</span>
          </div>

          <div className="video-container">
            <img src={videoMockup02Tumbnail} alt="Título" />
            <button type="button">
              <img src={videoPlayIcon} alt="Dar play" />
            </button>
            <p>Controle das lagartas da soja</p>
            <span>8:30</span>
          </div>

          <div className="video-container">
            <img src={videoMockup03Tumbnail} alt="Título" />
            <button type="button">
              <img src={videoPlayIcon} alt="Dar play" />
            </button>
            <p>Doenças que atacam a soja no verão</p>
            <span>9:05</span>
          </div>
        </div>

        <div className="premium-offer-container">
          <p>
            Associado Premium ganha 15% de desconto. Clique aqui e seja Premium
          </p>

          <button type="button" onClick={handleBecomePremium}>
            <strong>Seja Premium </strong>
            <> e pague </>
            <strong>R$ 1.768,00</strong>
          </button>
        </div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="clickable-background"
        onClick={() => handleModal({ modalName: 'playlist', opened: false })}
      />
    </div>
  );
};

const CourseTrackVideo = ({ handleModal }) => {
  return (
    <>
      <div className="track-video-card">
        <div className="card">
          <main>
            <video
              controls
              onClick={
                () => handleModal({ modalName: 'playlist', opened: true })
                // eslint-disable-next-line react/jsx-curly-newline
              }
              poster={mainVideoTumbnail}
            />
            <div className="video-caption">
              <p>
                7 cursos você pagaria: R$:
                <del>2.500,00</del>
              </p>

              <span>25% OFF</span>
            </div>

            <h3>R$: 1.768,00</h3>

            <div>
              <button type="button">
                Compre agora
                <img src={cartIcon} alt="Compre Agora" />
              </button>

              <span>Em até 12x de R$ 120,30 no cartão</span>
            </div>
          </main>

          <section className="offer">
            <p>Seja Premium e pague menos!</p>
            <button type="button">R$ 1.512,00</button>
          </section>
        </div>

        <div className="card-actions-container">
          <button className="save" type="button">
            <img src={saveIcon} alt="Salvar para depois" />
            <p>Salvar</p>
          </button>
          <img src={bitwiseImg} alt="" />
          <div className="share">
            <p>Indique:</p>

            <a
              href="https://www.facebook.com/elevagro/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookLogo} alt="Compartilhe no Facebook" />
            </a>
            <a
              href="https://www.facebook.com/elevagro/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinLogo} alt="Compartilhe no Linkedin" />
            </a>
            <a
              href="https://www.facebook.com/elevagro/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={messengerLogo} alt="Compartilhe no Messenger" />
            </a>
            <a
              href="https://www.facebook.com/elevagro/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsappLogo} alt="Compartilhe no Whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseTrackVideo;
