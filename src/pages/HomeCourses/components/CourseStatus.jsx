import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { differenceInCalendarMonths, differenceInCalendarDays } from 'date-fns';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.9rem;
  background: var(--color-background-secondary);

  ${p =>
    p.daysInTotal < 5 &&
    css`
      background: var(--color-alert);
    `}

  ${p =>
    p.courseProgress === 100 &&
    css`
      background: var(--color-secondary);
    `}

  h5 {
    width: 100%;
    font: bold 1.3rem/2rem var(--font-primary);
    text-align: center;
    color: var(--color-text-base);

    ${p =>
      p.daysInTotal < 5 &&
      css`
        color: var(--color-text-white);
      `}

    ${p =>
      p.courseProgress === 100 &&
      css`
        color: var(--color-text-white);
      `}
  }
`;

const CourseStatus = ({ expireDate, courseProgress }) => {
  const months = differenceInCalendarMonths(new Date(expireDate), Date.now());
  const daysInTotal = differenceInCalendarDays(
    new Date(expireDate),
    Date.now(),
  );

  const getDays = useCallback(() => {
    if (months > 0) {
      return daysInTotal % (months * 30);
    }
    return daysInTotal;
  }, [daysInTotal, months]);

  const days = getDays();

  return (
    <StyledContainer daysInTotal={daysInTotal} courseProgress={courseProgress}>
      {courseProgress !== 100 && (
        <h5>
          Termina em
          <> </>
          {months > 0 && (
            <>{months === 1 ? `${months} mês e ` : `${months} meses e `}</>
          )}
          {days > 0 && <>{days === 1 ? `${days} dia` : `${days} dias`}</>}
        </h5>
      )}

      {courseProgress === 100 && <h5>CONCLUÍDO</h5>}
    </StyledContainer>
  );
};

export default CourseStatus;
