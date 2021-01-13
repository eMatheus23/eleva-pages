import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

import './styles.css';

// Utils
import formatValue from '../../../utils/formatValue';

import cartIcon from '../../../assets/images/icons/cart-icon.svg';
import saveIcon from '../../../assets/images/icons/bookmark-icon.svg';
import cart02Icon from '../../../assets/images/icons/cart-icon-02.svg';
import videoPlayIcon from '../../../assets/images/icons/video-play-icon.svg';
import facebookLogo from '../../../assets/images/logos/facebook-logo-02.svg';
import linkedinLogo from '../../../assets/images/logos/linkedin-logo.svg';
import messengerLogo from '../../../assets/images/logos/messenger-logo.svg';
import whatsappLogo from '../../../assets/images/logos/whatsapp-logo.svg';
import bitwiseImg from '../../../assets/images/icons/bitwise.svg';

const TrackPlaylistModal = ({ closeModal, trackData }) => {
  const history = useHistory();

  const {
    main_video,
    title,
    demo_videos,
    total_price,
    price,
    discount_for_premium,
    price_for_premium,
  } = trackData;

  const handleBecomePremium = () => {
    history.push('/checkout');
  };

  return (
    <div className="track-playlist-modal">
      <div className="content">
        <span
          onClick={closeModal}
          role="button"
          tabIndex={0}
          className="close-modal"
        >
          X
        </span>

        <video controls poster={main_video.tumbnail_url} />

        <p>
          <del>{formatValue(total_price)}</del>
        </p>

        <div className="price-container">
          <div className="track-title">
            <h3>TRILHA DE ENSINO</h3>
            <h2>{title}</h2>
          </div>

          <button type="button">
            {formatValue(price)}
            <img src={cart02Icon} alt="" />
          </button>
        </div>

        <p>
          12x de
          <> </>
          {formatValue(price / 12)}
          <> </>
        </p>

        <div className="be-premium-card">
          <p>
            Seja um associado Premium na Elevagro e pague
            <strong> apenas:</strong>
          </p>
          <div>
            <button type="button">{formatValue(price_for_premium)}</button>
            <span>
              <strong>
                {Math.floor((discount_for_premium / 1) * 100)}
                <>% </>
              </strong>
              de
              <strong> desconto.</strong>
            </span>
          </div>
        </div>

        <div className="playlist-container">
          {demo_videos.map(video => (
            <div className="video-container" key={video.id}>
              <img src={video.tumbnail_url} alt={video.title} />
              <button type="button">
                <img src={videoPlayIcon} alt="Dar play" />
              </button>
              <p>{video.title}</p>
              <span>{video.length}</span>
            </div>
          ))}
        </div>

        <div className="premium-offer-container">
          <p>
            <>Associado Premium ganha </>
            {Math.floor((discount_for_premium / 1) * 100)}
            <>% de desconto. Clique aqui e seja Premium</>
          </p>

          <button type="button" onClick={handleBecomePremium}>
            <strong>Seja Premium </strong>
            <> e pague </>
            <strong>{formatValue(price_for_premium)}</strong>
          </button>
        </div>
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className="clickable-background" onClick={closeModal} />
    </div>
  );
};

const TrackPurchaseCard = ({ trackData }) => {
  const modalRoot = document.getElementById('portal');
  const [modalOpened, setModalOpened] = useState(false);
  const {
    main_video,
    courses,
    total_price,
    price,
    discount,
    price_for_premium,
  } = trackData;

  const closeModal = () => setModalOpened(false);

  return (
    <>
      {modalOpened &&
        ReactDOM.createPortal(
          <TrackPlaylistModal closeModal={closeModal} trackData={trackData} />,
          modalRoot,
        )}
      <div className="track-video-card">
        <div className="card">
          <main>
            <video
              controls
              onClick={() => setModalOpened(true)}
              poster={main_video.tumbnail_url}
            />
            <div className="video-caption">
              <p>
                {courses.length}
                <> </>
                cursos você pagaria: R$:
                <del>{total_price}</del>
              </p>

              <span>
                {Math.floor((discount / 1) * 100)}
                <>% OFF</>
              </span>
            </div>

            <h3>{formatValue(price)}</h3>

            <div>
              <button type="button">
                Compre agora
                <img src={cartIcon} alt="Compre Agora" />
              </button>

              <span>
                Em até 12x de
                <> </>
                {formatValue(price / 12)}
                <> </>
                no cartão
              </span>
            </div>
          </main>

          <section className="offer">
            <p>Seja Premium e pague menos!</p>
            <button type="button">{formatValue(price_for_premium)}</button>
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

export default TrackPurchaseCard;
