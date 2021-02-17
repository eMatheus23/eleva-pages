import React from 'react';
import PropTypes from 'prop-types';
import { GiSoundWaves } from 'react-icons/gi';

import playButton from '../../../assets/icons/video-play-large-icon.svg';

import { Container } from './styles';

const ContentCard = ({ content }) => {
  return (
    <Container>
      <div className="cover__container">
        {/* eslint-disable-next-line no-self-compare */}
        {content.type === 'video' && (
          <img src={playButton} alt="" className="play-video__icon" />
        )}

        {/* eslint-disable-next-line no-self-compare */}
        {content.type === 'podcast' && (
          <GiSoundWaves size="13rem" className="podcast-icon" />
        )}

        <img src={content.cover_url} alt="" className="cover__background-img" />
      </div>
      <div className="text__container">
        <h5>{content.category}</h5>
        <p>{content.title}</p>
      </div>
    </Container>
  );
};

ContentCard.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string.isRequired,
    cover_url: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default ContentCard;
