import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isBefore } from 'date-fns';

import { StyledCard } from './styles';

// Icons
import shareIcon from '../../../../assets/images/icons/share-icon.svg';

// Components
import CourseStatus from '../CourseStatus';

const UserCourseCard = ({ course }) => {
  const { user_purchase_info, title, type, type_name, cover_url } = course;

  const { progress, expiring_date } = user_purchase_info;

  const [expired] = useState(isBefore(new Date(expiring_date), Date.now()));

  return (
    <StyledCard
      courseType={type}
      courseProgress={`${progress * 100}%`}
      className="user-course-card"
    >
      {/* Envia o progresso do curso para o styled-component como porcentagem */}

      <img src={cover_url} alt={title} className="course-cover" />

      <CourseStatus
        expireDate={expiring_date}
        courseProgress={progress * 100}
      />

      <main>
        <div className="text-container">
          <h4>{type_name}</h4>

          <div className="course__progress-container">
            <div className="wrapper">
              <div className="progress-bar" />
            </div>
          </div>

          <p>{title}</p>
        </div>

        {/* eslint-disable-next-line no-self-compare */}
        {progress < 1 && (
          <Link
            to="/track"
            className={`course__link access ${expired ? 'desabled' : ''}`}
          >
            ACESSAR
          </Link>
        )}

        {/* eslint-disable-next-line no-self-compare */}
        {progress === 1 && (
          <div className="flex-buttons">
            <Link to="/track" className="course__link share" disabled>
              <img src={shareIcon} alt="Compatilhar" />
            </Link>

            <Link to="/track" className="course__link certificate">
              CERTIFICADO
            </Link>
          </div>
        )}
      </main>
    </StyledCard>
  );
};

UserCourseCard.propTypes = {
  course: PropTypes.shape({
    cover_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    type_name: PropTypes.string.isRequired,
    user_purchase_info: PropTypes.shape({
      progress: PropTypes.number.isRequired,
      expiring_date: PropTypes.string.isRequired,
    }),
  }),
};

export default UserCourseCard;
